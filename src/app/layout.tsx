import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { Person, WebSite, WithContext } from "schema-dts";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  };
}

function getPersonJsonLd(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: USER.displayName,
    givenName: USER.firstName,
    familyName: USER.lastName,
    jobTitle: USER.jobTitle,
    url: USER.website || SITE_INFO.url,
    sameAs: [SITE_INFO.url],
    description: SITE_INFO.description,
  };
}
// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      // Use a literal here to avoid circular import issues during module evaluation
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#09090b')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
  // Remove known extension-injected attributes and scripts that cause
  // hydration mismatches. Run as early as possible during parse so the
  // client DOM matches the SSR output.
  try {
    // Remove attributes beginning with 'bis_' or 'data-bis'
    const all = document.getElementsByTagName('*');
    for (let i = 0; i < all.length; i++) {
      const el = all[i];
      const attrs = Array.from(el.attributes || []);
      for (let j = 0; j < attrs.length; j++) {
        const name = attrs[j] && attrs[j].name;
        if (name && (name.startsWith('bis_') || name.startsWith('data-bis'))) {
          el.removeAttribute(name);
        }
      }
    }

    // Remove any script tags injected from chrome extensions
    const extScripts = document.querySelectorAll('script[src^="chrome-extension://"]');
    for (let k = 0; k < extScripts.length; k++) {
      extScripts[k].remove();
    }
  } catch (_) {}
`;


export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@hesxo", // Twitter username
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/favicon.svg",
      type: "image/svg+xml",
      sizes: "180x180",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Avoid referencing META_THEME_COLORS at module eval time (prevents circular import issues)
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        {/* Ensure extension-injected attributes like `bis_skin_checked` are removed
            before React hydrates. Using beforeInteractive guarantees this script
            runs early (prior to hydration) so we avoid hydration mismatch logs. */}
        <Script
          id="strip-bis-attributes"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: String.raw`
            (function(){
              try {
                function stripAttrs(root) {
                  const els = root.getElementsByTagName ? root.getElementsByTagName('*') : [];
                  for (let i = 0; i < els.length; i++) {
                    const el = els[i];
                    const attrs = Array.from(el.attributes || []);
                    for (let j = 0; j < attrs.length; j++) {
                      const name = attrs[j] && attrs[j].name;
                      if (!name) continue;
                      if (name.startsWith('bis_') || name.startsWith('data-bis') || name === 'bis_skin_checked') {
                        try { el.removeAttribute(name); } catch (e) {}
                      }
                    }
                  }
                }

                stripAttrs(document);
                const extScripts = document.querySelectorAll('script[src^="chrome-extension://"], script[src^="moz-extension://"], script[src^="safari-extension://"]');
                for (let k = 0; k < extScripts.length; k++) {
                  try { extScripts[k].remove(); } catch (e) {}
                }

                const observer = new MutationObserver((mutations) => {
                  for (let m = 0; m < mutations.length; m++) {
                    const mu = mutations[m];
                    if (mu.type === 'attributes' && mu.target && mu.target.removeAttribute) {
                      const name = mu.attributeName;
                      if (name && (name.startsWith('bis_') || name.startsWith('data-bis') || name === 'bis_skin_checked')) {
                        try { mu.target.removeAttribute(name); } catch (e) {}
                      }
                    }
                    if (mu.type === 'childList' && mu.addedNodes && mu.addedNodes.length) {
                      for (let i = 0; i < mu.addedNodes.length; i++) {
                        const node = mu.addedNodes[i];
                        try {
                          if (node.nodeType === 1) {
                            stripAttrs(node);
                            if (node.tagName === 'SCRIPT') {
                              const src = node.getAttribute && node.getAttribute('src');
                              if (src && (src.indexOf('chrome-extension://') === 0 || src.indexOf('moz-extension://') === 0 || src.indexOf('safari-extension://') === 0)) {
                                node.remove();
                              }
                            }
                          }
                        } catch (e) {}
                      }
                    }
                  }
                });

                observer.observe(document, { attributes: true, childList: true, subtree: true });
                setTimeout(() => { try { observer.disconnect(); } catch (e) {} }, 3000);
              } catch (_) {}
            })();
          ` }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
