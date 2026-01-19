module.exports=[45805,a=>{"use strict";let b={firstName:"Hasal",lastName:"Dharmagunawardana",displayName:"Hasal Dharmagunawardana",username:"hesxo",gender:"male",pronouns:"he/him",bio:"Creating with code. Small details matter.",flipSentences:["Software Developer","Web Developer","Full Stack Developer"],address:"Colombo, Sri Lanka",phoneNumber:"Kzk0IDc3IDMzOCAxMDM5",email:"aGFzYWxkaGFybWFndW5hd2FyZGFuYUBnbWFpbC5jb20KCg",website:"https://hasal.me",jobTitle:"Design Engineer",jobs:[{title:"Computer Science Undergraduate",company:"University of Westminster",website:"https://www.westminster.ac.uk/"}],about:`
A 20-year-old computer science student developing breadth across full-stack engineering, cloud infrastructure,
 and applied AI. Strong grounding in frontend work with React, Next.js, Tailwind CSS, and ShadCN, paired with backend capability in
  Node.js, Spring Boot, and Appwrite. Active in DevOps through CI/CD pipelines, Docker, Kubernetes, and deployments on GCP and AWS.
   Integrated experience across machine learning, UI/UX design, and digital media. Focused on building scalable systems, leading effective project teams,
    and delivering solutions with clear technical impact.

Let's connect and collaborate!
  `,avatar:"https://i.postimg.cc/FFC05vqp/Firefly-20250222195436.png",ogImage:"https://i.postimg.cc/FFC05vqp/Firefly-20250222195436.png",namePronunciationUrl:"",keywords:["Hasal","Dharmagunawardana","Hasal Hansada Dharmagunawardana","Hansada","hesxo","thurstan","it","cricketer","Welikanna","Hasal Dharmagunawardana","Hasal Hansada Dharmagunawardana","Hasal","Hansada","hansada","hasal","hesxo","software developer","web developer","full stack developer","computer science student","university of westminster","westminster","uk","sri lanka","colombo","lk","sri lankan","sri lankan software developer","sri lankan web developer","sri lankan full stack developer","sri lankan computer science student","sri lankan university of westminster","sri lankan westminster","iit","iit university","iit university of westminster","iit university of westminster computer science student","iit university of westminster web developer","iit university of westminster full stack developer","iit university of westminster software developer","iit university of westminster computer science","iit university of westminster computer science student","iit university of westminster web developer","iit university of westminster full stack developer","iit university of westminster software developer","iit university of westminster computer science","iit university of westminster computer science student","iit university of westminster web developer","iit university of westminster full stack developer","iit university of westminster software developer","iit university of westminster computer science"],dateCreated:"2023-10-20"};a.s(["USER",0,b])},96139,a=>{"use strict";var b=a.i(45805);let c={name:b.USER.displayName,url:process.env.APP_URL||"https://hasal.me",ogImage:b.USER.ogImage,description:b.USER.bio,keywords:b.USER.keywords};a.s(["MAIN_NAV",0,[{title:"Portfolio",href:"/"},{title:"Blog",href:"/blog"}],"SITE_INFO",0,c,"SOURCE_CODE_GITHUB_REPO",0,"hesxo/portfolio","SOURCE_CODE_GITHUB_URL",0,"https://github.com/hesxo/portfolio","UTM_PARAMS",0,{utm_source:"hasal.me",utm_medium:"portfolio_website",utm_campaign:"referral"}])},72123,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/script.js <module evaluation>"))},44536,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/script.js"))},11153,a=>{"use strict";a.i(72123);var b=a.i(44536);a.n(b)},71618,(a,b,c)=>{b.exports=a.r(11153)},17133,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/providers.tsx <module evaluation>","Providers");a.s(["Providers",0,b])},7698,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/providers.tsx","Providers");a.s(["Providers",0,b])},47189,a=>{"use strict";a.i(17133);var b=a.i(7698);a.n(b)},70754,a=>{a.v({className:"ibm_plex_sans_2fc5a022-module__JHRiQG__className",variable:"ibm_plex_sans_2fc5a022-module__JHRiQG__variable"})},82411,a=>{a.v({className:"ibm_plex_mono_713c6c8d-module__75UuTG__className",variable:"ibm_plex_mono_713c6c8d-module__75UuTG__variable"})},27572,a=>{"use strict";var b=a.i(7997),c=a.i(71618),d=a.i(47189),e=a.i(96139),f=a.i(45805),g=a.i(70754);let h={className:g.default.className,style:{fontFamily:"'IBM Plex Sans', 'IBM Plex Sans Fallback'",fontStyle:"normal"}};null!=g.default.variable&&(h.variable=g.default.variable);var i=a.i(82411);let j={className:i.default.className,style:{fontFamily:"'IBM Plex Mono', 'IBM Plex Mono Fallback'",fontStyle:"normal"}};null!=i.default.variable&&(j.variable=i.default.variable);let k=String.raw`
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
`,l={metadataBase:new URL(e.SITE_INFO.url),alternates:{canonical:"/"},title:{template:`%s – ${e.SITE_INFO.name}`,default:`${f.USER.displayName} – ${f.USER.jobTitle}`},description:e.SITE_INFO.description,keywords:e.SITE_INFO.keywords,authors:[{name:f.USER.displayName,url:e.SITE_INFO.url}],creator:f.USER.displayName,openGraph:{siteName:e.SITE_INFO.name,url:"/",type:"profile",firstName:f.USER.firstName,lastName:f.USER.lastName,username:f.USER.username,gender:f.USER.gender,images:[{url:e.SITE_INFO.ogImage,width:1200,height:630,alt:e.SITE_INFO.name}]},twitter:{card:"summary_large_image",creator:"@hesxo",images:[e.SITE_INFO.ogImage]},icons:{icon:[{url:"/favicon.ico",sizes:"any"},{url:"/favicon.svg",type:"image/svg+xml"}],apple:{url:"/favicon.svg",type:"image/svg+xml",sizes:"180x180"}}};function m({children:a}){return(0,b.jsxs)("html",{lang:"en",className:`${h.variable} ${j.variable}`,suppressHydrationWarning:!0,children:[(0,b.jsxs)("head",{children:[(0,b.jsx)("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:k}}),(0,b.jsx)(c.default,{src:`data:text/javascript;base64,${btoa(k)}`}),(0,b.jsx)(c.default,{id:"strip-bis-attributes",strategy:"beforeInteractive",dangerouslySetInnerHTML:{__html:String.raw`
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
          `}}),(0,b.jsx)("script",{type:"application/ld+json",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:e.SITE_INFO.name,url:e.SITE_INFO.url,alternateName:[f.USER.username]}).replace(/</g,"\\u003c")}}),(0,b.jsx)("script",{type:"application/ld+json",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:f.USER.displayName,givenName:f.USER.firstName,familyName:f.USER.lastName,jobTitle:f.USER.jobTitle,url:f.USER.website||e.SITE_INFO.url,sameAs:[e.SITE_INFO.url],description:e.SITE_INFO.description}).replace(/</g,"\\u003c")}})]}),(0,b.jsx)("body",{suppressHydrationWarning:!0,children:(0,b.jsx)(d.Providers,{children:a})})]})}a.s(["default",()=>m,"metadata",0,l,"viewport",0,{width:"device-width",initialScale:1,viewportFit:"cover",themeColor:"#ffffff"}],27572)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__a4840aa1._.js.map