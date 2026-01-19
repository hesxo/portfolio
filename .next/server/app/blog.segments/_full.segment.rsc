1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js"],""]
e:I[68027,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"default"]
:HL["/_next/static/chunks/d58dd575d6c337aa.css","style"]
:HL["/_next/static/chunks/1ad08377e38c84f5.css","style"]
:HL["/_next/static/media/03fc1b4a8d284b5e-s.p.af4fcd24.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/23b7a97ae3b5c134-s.p.2902b61f.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/99e609270109b47d-s.p.64b9304e.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/effe91970fc4db64-s.p.19510058.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
2:T5a5,
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
4:T7a4,data:text/javascript;base64,CiAgdHJ5IHsKICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09ICdkYXJrJyB8fCAoKCEoJ3RoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpIHx8IGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gJ3N5c3RlbScpICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykpIHsKICAgICAgLy8gVXNlIGEgbGl0ZXJhbCBoZXJlIHRvIGF2b2lkIGNpcmN1bGFyIGltcG9ydCBpc3N1ZXMgZHVyaW5nIG1vZHVsZSBldmFsdWF0aW9uCiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT0idGhlbWUtY29sb3IiXScpLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICcjMDkwOTBiJykKICAgIH0KICB9IGNhdGNoIChfKSB7fQoKICB0cnkgewogICAgaWYgKC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSB7CiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcy1tYWNvcycpCiAgICB9CiAgfSBjYXRjaCAoXykge30KICAvLyBSZW1vdmUga25vd24gZXh0ZW5zaW9uLWluamVjdGVkIGF0dHJpYnV0ZXMgYW5kIHNjcmlwdHMgdGhhdCBjYXVzZQogIC8vIGh5ZHJhdGlvbiBtaXNtYXRjaGVzLiBSdW4gYXMgZWFybHkgYXMgcG9zc2libGUgZHVyaW5nIHBhcnNlIHNvIHRoZQogIC8vIGNsaWVudCBET00gbWF0Y2hlcyB0aGUgU1NSIG91dHB1dC4KICB0cnkgewogICAgLy8gUmVtb3ZlIGF0dHJpYnV0ZXMgYmVnaW5uaW5nIHdpdGggJ2Jpc18nIG9yICdkYXRhLWJpcycKICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkrKykgewogICAgICBjb25zdCBlbCA9IGFsbFtpXTsKICAgICAgY29uc3QgYXR0cnMgPSBBcnJheS5mcm9tKGVsLmF0dHJpYnV0ZXMgfHwgW10pOwogICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGF0dHJzLmxlbmd0aDsgaisrKSB7CiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2pdICYmIGF0dHJzW2pdLm5hbWU7CiAgICAgICAgaWYgKG5hbWUgJiYgKG5hbWUuc3RhcnRzV2l0aCgnYmlzXycpIHx8IG5hbWUuc3RhcnRzV2l0aCgnZGF0YS1iaXMnKSkpIHsKICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAvLyBSZW1vdmUgYW55IHNjcmlwdCB0YWdzIGluamVjdGVkIGZyb20gY2hyb21lIGV4dGVuc2lvbnMKICAgIGNvbnN0IGV4dFNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbc3JjXj0iY2hyb21lLWV4dGVuc2lvbjovLyJdJyk7CiAgICBmb3IgKGxldCBrID0gMDsgayA8IGV4dFNjcmlwdHMubGVuZ3RoOyBrKyspIHsKICAgICAgZXh0U2NyaXB0c1trXS5yZW1vdmUoKTsKICAgIH0KICB9IGNhdGNoIChfKSB7fQo=0:{"P":null,"b":"hUQQNYPbFtFcTVuPA2avv","c":["","blog"],"q":"","i":false,"f":[[["",{"children":["(app)",{"children":["(docs)",{"children":["blog",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/d58dd575d6c337aa.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/1ad08377e38c84f5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/569beec6ce652ca3.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/e8189ee112d00244.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","className":"ibm_plex_sans_2fc5a022-module__JHRiQG__variable ibm_plex_mono_713c6c8d-module__75UuTG__variable","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","script",null,{"type":"text/javascript","dangerouslySetInnerHTML":{"__html":"$2"}}],["$","$L3",null,{"src":"$4"}],"$L5","$L6","$L7"]}],"$L8"]}]]}],{"children":["$L9",{"children":["$La",{"children":["$Lb",{"children":["$Lc",{},null,false,false]},null,false,false]},null,false,false]},null,false,false]},null,false,false],"$Ld",false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
10:I[1661,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js"],"Providers"]
11:I[39756,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"default"]
12:I[37457,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"default"]
13:I[19455,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"Button"]
14:I[22016,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],""]
15:I[94169,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"SiteHeaderWrapper"]
16:I[1025,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"SiteHeaderMark"]
17:I[38970,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"DesktopNav"]
18:I[52157,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"PreloadChunks"]
1b:I[68923,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"ToggleTheme"]
1e:I[85437,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"Image"]
23:I[97367,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"ViewportBoundary"]
25:I[97367,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"MetadataBoundary"]
26:"$Sreact.suspense"
f:Tb47,
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
          5:["$","$L3",null,{"id":"strip-bis-attributes","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$f"}}]
6:["$","script",null,{"type":"application/ld+json","suppressHydrationWarning":true,"dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"Hasal Dharmagunawardana\",\"url\":\"https://hasal.me\",\"alternateName\":[\"hesxo\"]}"}}]
7:["$","script",null,{"type":"application/ld+json","suppressHydrationWarning":true,"dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"Person\",\"name\":\"Hasal Dharmagunawardana\",\"givenName\":\"Hasal\",\"familyName\":\"Dharmagunawardana\",\"jobTitle\":\"Design Engineer\",\"url\":\"https://hasal.me\",\"sameAs\":[\"https://hasal.me\"],\"description\":\"Creating with code. Small details matter.\"}"}}]
8:["$","body",null,{"suppressHydrationWarning":true,"children":["$","$L10",null,{"children":["$","$L11",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L12",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"flex flex-col items-center justify-center h-screen","children":[["$","svg",null,{"className":"h-28 w-full text-border","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 514 258","fill":"none","children":["$","path",null,{"d":"M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z","stroke":"currentColor","strokeWidth":"1","vectorEffect":"non-scaling-stroke"}]}],["$","h1",null,{"className":"mt-8 mb-6 font-mono text-8xl font-medium","children":"404"}],["$","$L13",null,{"variant":"default","asChild":true,"children":["$","$L14",null,{"href":"/","children":["Go to Home",["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]]}]}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]
9:["$","$1","c",{"children":[[["$","script","script-0",{"src":"/_next/static/chunks/be8e01a7b92d86bd.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/10b9ae9ff3432632.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/00c2bc07373182e2.js","async":true,"nonce":"$undefined"}],["$","script","script-3",{"src":"/_next/static/chunks/23d74ee1d8794e8e.js","async":true,"nonce":"$undefined"}],["$","script","script-4",{"src":"/_next/static/chunks/204218aa9faacd78.js","async":true,"nonce":"$undefined"}],["$","script","script-5",{"src":"/_next/static/chunks/a16e62cbda526a9c.js","async":true,"nonce":"$undefined"}],["$","script","script-6",{"src":"/_next/static/chunks/97841d0b558083e9.js","async":true,"nonce":"$undefined"}]],[["$","$L15",null,{"className":"sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2 data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black] not-dark:data-[affix=true]:**:data-header-container:after:bg-border transition-shadow duration-300","children":["$","div",null,{"className":"screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl","data-header-container":true,"suppressHydrationWarning":true,"children":[["$","$L14",null,{"href":"/","aria-label":"Home","className":"[&_svg]:h-8","children":["$","$L16",null,{}]}],["$","div",null,{"className":"flex-1"}],["$","$L17",null,{"items":[{"title":"Portfolio","href":"/"},{"title":"Blog","href":"/blog"}]}],["$","div",null,{"className":"flex items-center *:first:mr-2","children":[[["$","$L18",null,{"moduleIds":["1661795820283289673"]}],"$L19"],"$L1a",["$","span",null,{"className":"mx-2 flex h-4 w-px bg-border"}],["$","$L1b",null,{}],[["$","$L18",null,{"moduleIds":["7923668823271313463"]}],"$L1c"]]}]]}]}],["$","main",null,{"className":"max-w-screen overflow-x-hidden px-2","suppressHydrationWarning":true,"children":["$","$L11",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L12",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"flex flex-col items-center justify-center h-screen","children":[["$","svg",null,{"className":"h-28 w-full text-border","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 514 258","fill":"none","children":["$","path",null,{"d":"M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z","stroke":"currentColor","strokeWidth":"1","vectorEffect":"non-scaling-stroke"}]}],["$","h1",null,{"className":"mt-8 mb-6 font-mono text-8xl font-medium","children":"404"}],["$","$L13",null,{"variant":"default","asChild":true,"children":["$","$L14",null,{"href":"/","children":["Go to Home",["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]]}]}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","footer",null,{"className":"max-w-screen overflow-x-hidden px-2","children":["$","div",null,{"className":"screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl","children":["$","p",null,{"className":"mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground","children":["Built by"," ",["$","a",null,{"className":"link","href":"https://github.com/hesxo","target":"_blank","rel":"noopener","children":"Hasal Dharmagunwardana"}],"."]}]}]}],[["$","$L18",null,{"moduleIds":["6277144292413625101"]}],"$L1d"]]]}]
a:["$","$1","c",{"children":[null,["$","div",null,{"className":"mx-auto border-x border-edge md:max-w-3xl","children":[["$","div",null,{"className":"h-8 px-2 screen-line-after before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"}],["$","$L11",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L12",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]]}]
b:["$","$1","c",{"children":[null,["$","$L11",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L12",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center","children":[["$","svg",null,{"className":"h-28 w-full text-border","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 514 258","fill":"none","children":["$","path",null,{"d":"M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z","stroke":"currentColor","strokeWidth":"1","vectorEffect":"non-scaling-stroke"}]}],["$","h1",null,{"className":"mt-8 mb-6 font-mono text-8xl font-medium","children":"404"}],["$","$L13",null,{"variant":"default","asChild":true,"children":["$","$L14",null,{"href":"/","children":["Go to Home",["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]]}]}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}]
c:["$","$1","c",{"children":[[["$","div",null,{"className":"screen-line-after px-4","children":["$","h1",null,{"className":"text-3xl font-semibold","children":"Blog"}]}],["$","div",null,{"className":"screen-line-after p-4","children":["$","p",null,{"className":"font-mono text-sm text-balance text-muted-foreground","children":"A collection of articles on development, design, and ideas."}]}],["$","div",null,{"className":"relative pt-4","children":[["$","div",null,{"className":"absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2","children":[["$","div",null,{"className":"border-r border-edge"}],["$","div",null,{"className":"border-l border-edge"}]]}],["$","div",null,{"className":"grid grid-cols-1 gap-4 sm:grid-cols-2","children":[["$","$L14","Tedx",{"href":"/blog/Tedx","className":"group/post flex flex-col gap-2 p-2 max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after","children":[["$","div",null,{"className":"relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl","children":[["$","$L1e",null,{"src":"https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg","alt":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey","width":1200,"height":630,"quality":100,"priority":true,"unoptimized":true}],["$","div",null,{"className":"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10"}],["$","span",null,{"className":"absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-md bg-info","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-pin size-4 rotate-45 text-white","aria-hidden":"true","children":[["$","path","bb1du9",{"d":"M12 17v5"}],["$","path","1nkz8b",{"d":"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}],"$undefined"]}],["$","span",null,{"className":"sr-only","children":"Pinned"}]]}]]}],["$","div",null,{"className":"flex flex-col gap-1 p-2","children":[["$","h3",null,{"className":"text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline","children":["Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey","$undefined"]}],["$","dl",null,{"children":[["$","dt",null,{"className":"sr-only","children":"Published on"}],["$","dd",null,{"className":"text-sm text-muted-foreground","children":["$","time",null,{"dateTime":"2025-06-01T00:00:00.000Z","children":"01.06.2025"}]}]]}]]}]]}],["$","$L14","Responsive",{"href":"/blog/Responsive","className":"group/post flex flex-col gap-2 p-2 max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after","children":[["$","div",null,{"className":"relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl","children":[["$","$L1e",null,{"src":"https://i.postimg.cc/NGR3RyLK/1-j-ZCYevnot-N-5UKCs-X0I1fw.jpg","alt":"Responsive Design Mastery - My Creative Adventure in Crafting Websites That Adapt to Every Screen","width":1200,"height":630,"quality":100,"priority":true,"unoptimized":true}],["$","div",null,{"className":"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10"}],false]}],["$","div",null,{"className":"flex flex-col gap-1 p-2","children":[["$","h3",null,{"className":"text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline","children":["Responsive Design Mastery - My Creative Adventure in Crafting Websites That Adapt to Every Screen","$undefined"]}],["$","dl",null,{"children":[["$","dt",null,{"className":"sr-only","children":"Published on"}],["$","dd",null,{"className":"text-sm text-muted-foreground","children":["$","time",null,{"dateTime":"2024-11-13T18:30:00.000Z","children":"14.11.2024"}]}]]}]]}]]}],["$","$L14","F1",{"href":"/blog/F1","className":"group/post flex flex-col gap-2 p-2 max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after","children":["$L1f","$L20"]}]]}]]}],"$L21"],null,"$L22"]}]
d:["$","$1","h",{"children":[null,["$","$L23",null,{"children":"$@24"}],["$","div",null,{"hidden":true,"children":["$","$L25",null,{"children":["$","$26",null,{"name":"Next.Metadata","children":"$@27"}]}]}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}]
28:I[97367,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"OutletBoundary"]
1f:["$","div",null,{"className":"relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl","children":[["$","$L1e",null,{"src":"https://i.postimg.cc/9XDsD5p1/1733653498230.png","alt":"The Impact of AI in Formula 1","width":1200,"height":630,"quality":100,"priority":true,"unoptimized":true}],["$","div",null,{"className":"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10"}],false]}]
20:["$","div",null,{"className":"flex flex-col gap-1 p-2","children":[["$","h3",null,{"className":"text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline","children":["The Impact of AI in Formula 1","$undefined"]}],["$","dl",null,{"children":[["$","dt",null,{"className":"sr-only","children":"Published on"}],["$","dd",null,{"className":"text-sm text-muted-foreground","children":["$","time",null,{"dateTime":"2024-08-26T18:30:00.000Z","children":"27.08.2024"}]}]]}]]}]
21:["$","div",null,{"className":"h-4"}]
22:["$","$L28",null,{"children":["$","$26",null,{"name":"Next.MetadataOutlet","children":"$@29"}]}]
2a:I[11719,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"CommandMenu"]
2e:I[92553,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"MobileNav"]
2f:I[36068,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"ScrollTop"]
2b:T1f52,
# TEDxColombo 2025 — Where Ideas Collide and Minds Expand

![TEDxColombo 2025 Highlights](https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg )

TEDxColombo 2025 brought together thinkers, creators, and everyday people with powerful stories.  
I joined the event as a volunteer, and seeing everything from the inside gave me a different kind of understanding.  
Here is my full experience, written simply, with space left for photos I took throughout the day.

---

## Behind the Scenes: Volunteering Within the “MADness”


![Arrival & Volunteer Briefing](https://i.postimg.cc/yxHBHcpm/Whats-App-Image-2025-06-01-at-13-27-28.jpg)

I arrived early at Nelum Pokuna Theatre for the volunteer briefing.  
The theme was **MADness**—breaking norms and stepping into uncomfortable ideas.  
Even before the doors opened, I felt how much effort goes into making an event like this work.  
Backstage is quiet, but everything starts there.

---


![Stage & Lighting Setup](https://i.postimg.cc/Df94SMHr/20250601-173913.jpg)

During the event, I learned valuable lessons about leadership. True leadership is not about commanding but about inspiring and enabling others to succeed. Watching the TEDxColombo team work together seamlessly, I saw how clear communication, trust, and shared purpose can turn a vision into reality.

---

#### **Yevan David: Mindset Is Everything**
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe 
        src="https://www.youtube.com/embed/hdrKVXWoyoQ" 
        title="Yevan David TEDxColombo" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
        frameBorder="0" 
        allowFullScreen
    ></iframe>
</div>

Yevan spoke about racing at 250 mph and how presence can save your life.  
He shared how he left home at 13 to live alone in Italy.  
His lesson was simple: **resilience grows from struggle, not comfort.**

#### **Jason Rajasinghe: Adapting to Chaos**
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe 
        src="https://www.youtube.com/embed/Y2064LlhKhY" 
        title="Jason Rajasinghe TEDxColombo" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
        frameBorder="0" 
        allowFullScreen
    ></iframe>
</div>

Jason talked about the Sri Lankan reality—how our systems make simple things difficult.  
He explained how we move through “15 steps when others take 2.”  
His message: **adaptation is survival. Stress can push us to evolve.**  
His reminder stayed with me:  
> “It’s okay—it’s just life. Don’t let the weight slow you down.”

---

### **Audience Engagement & Social Space**

![Audience Engagement](https://i.postimg.cc/NM3TwsHp/54562930190-d1dae9f3cd-o.jpg)

The audience was deeply engaged, with lively discussions in the social space.  
This was where ideas were exchanged, connections were made, and the spirit of TEDx truly came alive.

When the event began, the hall filled quickly.  
From the side, I saw people reacting to every talk—nodding, thinking, leaning forward.  
Outside, the social space was full of conversations, coffee, and new connections.  
This showed me that ideas spread not only on stage, but in the small moments between people.

---

## Theme 2: **Game On — Infinite vs Finite Thinking**

<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe 
        src="https://www.youtube.com/embed/S16XUhMp-Ro" 
        title="Sanjiva Weerawarana TEDxColombo" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
        frameBorder="0" 
        allowFullScreen
    ></iframe>
</div>

Sanjiva Weerawarana used a cricket example to explain the difference between winning and truly building something meaningful.

- Sri Lanka makes **$1.5B in IT exports**, mostly outsourcing.  
- The real potential is in **products**, not just services.  
- Deep learning matters more than scattered learning.

His advice was clear:  
>"Don’t complain. Build. Be stubborn. Give a damn."

---

## Theme 3: **Culture, Courage & Compassion**

### **Sonali Silva**
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe 
        src="https://www.youtube.com/embed/trpKyifxS1M" 
        title="Sonali Silva TEDxColombo" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
        frameBorder="0" 
        allowFullScreen
    ></iframe>
</div>

Sonali spoke about abortion stigma in Sri Lanka.  
She said something that everyone in the room felt:

> “We are privately empathetic, but publicly disapproving.”

Her talk reminded me that silence can be more harmful than disagreement.  
Change starts when we choose to speak with honesty.

### **Kevin Wilson**
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe 
        src="https://www.youtube.com/embed/e85jWs_EzEs" 
        title="Kevin Wilson TEDxColombo" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
        frameBorder="0" 
        allowFullScreen
    ></iframe>
</div>

Kevin explained that fear doesn’t have to be an enemy.  
When we welcome it, **life becomes richer and more colorful.**  
He ended by saying something very Sri Lankan:

> “Enna tea ekak bomu” — Let’s sit down for tea and talk.

---

### **Vikum Nawagamuwa — Closing Reflection**
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe 
        src="https://www.youtube.com/embed/L-MVnFkP1Hw" 
        title="Vikum Nawagamuwa TEDxColombo" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
        frameBorder="0" 
        allowFullScreen
    ></iframe>
</div>

He explained that > “not giving a f***” doesn’t mean not caring.  
It means caring **about the right things**.  
Let go of noise. Focus on what matters.

---

### **Anya Ratnayaka — Colombo Wetlands**
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe 
        src="https://www.youtube.com/embed/_aiR_3LwjBo" 
        title="Anya Ratnayaka — Colombo Wetlands" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
        frameBorder="0" 
        allowFullScreen
    ></iframe>
</div>

Colombo’s wetlands, once overlooked, are now recognized as vital for flood control and for shaping the city’s history. These urban ecosystems support remarkable biodiversity—including the endangered fishing cat—and thrive thanks to interconnected green spaces. Beyond wildlife, wetlands reduce urban heat, improve water quality, and provide restorative spaces that boost mental well‑being. They show that nature and urban life can coexist when planning prioritizes ecological resilience.

Watch Anya Ratnayaka’s talk for a thoughtful perspective on conserving Colombo’s wetlands and engaging communities in their stewardship.


After the event ended, we cleaned up, moved equipment, and guided people out.  
I heard people talking about what they learned.  
It felt good knowing we helped create that space.

---

## Reflections From the Volunteer Side

- Backstage work matters as much as what’s on stage.  
- MADness means stepping out of comfort, not losing control.  
- The audience completes the story.  
- Volunteers keep the message alive by keeping the event smooth.  
- When the event ends, the real thinking begins.

---


![Group Volunteer Photo](https://i.postimg.cc/65HTN6Rk/54562924030-b6461b405e-o.jpg)

Thank you to the organisers, speakers, technical team, and every volunteer.  
Being part of TEDxColombo 2025 wasn’t just helping an event—it was being part of change.

---

## Final Thought

TEDxColombo 2025 didn’t give final answers.  
It gave better questions.  
It pushed us to build, fail, learn, adapt, and grow.

Let’s change the narrative—together.2c:Tefe,
# Responsive Design Mastery: My Creative Adventure in Crafting Websites That Adapt to Every Screen

As a frontend developer, I initially learned the basics of responsive design using frameworks like Tailwind CSS and Bootstrap. While these made it easier to build responsive websites, I realized I wasn't fully understanding the core principles. To improve, I decided to dive deeper into CSS and media queries. In this article, I'll share my journey and offer helpful tips for anyone wanting to enhance their knowledge of responsive design.

## 1. Initial Learning and Challenges

When I started frontend development, I learned basic responsive design, but it was mostly surface-level. As I worked more without frameworks, I realized I didn't fully understand the underlying concepts. This pushed me to go back to the basics of CSS and learn how to create responsive websites from scratch.

**Challenge:** At first, managing breakpoints without frameworks was tough. It was hard to figure out how to target different screen sizes effectively.

<FramedImage
  className="hidden [html.dark_&]:block"
  src="https://i.postimg.cc/BQMFkkW3/OKX-Main.jpg"
  alt="AI in F1 – Dark Theme"
/>


## 2. Media Queries and Their Usage

Media queries allow you to apply CSS styles based on the screen size or other properties. Here's an example of a basic media query:

```css
/* Base styles for mobile */
.container {
  padding: 10px;
}

/* Adjust padding for larger screens */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}
```

**Breakthrough Tip:** Analyze how popular CSS frameworks handle breakpoints by inspecting their source code. This helped me understand the logic behind their responsive classes and implement similar practices in my projects.

## 3. Frameworks and Their Take on Responsiveness

While frameworks like Tailwind CSS handle responsiveness with utilities like `sm:grid` or `lg:px-4`, understanding how to write custom media queries provided me with greater flexibility and control.

**Example from Tailwind:**

```html
<div class="container sm:grid lg:px-4">
  <!-- Content -->
</div>
```

## 4. The Process of Building Responsiveness from Scratch

Here's how I approach designing responsive layouts:

### Start with a Mobile-First Approach

Begin with styles optimized for smaller screens and progressively add styles for larger screens.

```css
.menu {
  display: block;
}

@media (min-width: 768px) {
  .menu {
    display: flex;
  }
}
```

### Use Fluid Layouts

Replace fixed-width values with percentage-based or `em`, `rem`, `vw`, and `vh` units to create adaptable layouts.

### Responsive Media

Apply `max-width: 100%` to ensure images and videos resize within their containers.

### Flexbox and Grid Layouts

Implement Flexbox for simple, adaptable structures and CSS Grid for more complex, responsive designs.

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 992px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
```

## 5. Major Lessons Learned

- **Plan for Responsiveness Early:** Always keep responsiveness in mind during the design phase to avoid complex restructuring later.
- **Prioritize a Mobile-First Strategy:** Ensures better performance on mobile devices by loading minimal styles and adding complexity as the screen size increases.
- **Understand Frameworks, Master Core Concepts:** Frameworks are helpful, but true mastery comes from understanding how and why the underlying code works.

## Final Thoughts

Mastering responsive design using core CSS is an essential step for any frontend developer who wants to build websites that provide a seamless user experience across all devices. By learning and practicing these core techniques, you'll not only enhance your projects but also strengthen your overall development skills.2d:Tecd,

Artificial intelligence has become one of the most decisive competitive tools in Formula 1. Every major team now relies on AI-driven modelling to refine aerodynamics, simulate thousands of race scenarios, analyse drivers’ behavioural patterns, and make engineering decisions that once depended on intuition alone.

<FramedImage
  className="hidden [html.dark_&]:block"
  src="https://i.postimg.cc/BQMFkkW3/OKX-Main.jpg"
  alt="AI in F1 – Dark Theme"
/>

<FramedImage
  className="hidden [html.light_&]:block"
  src="https://i.postimg.cc/BQMFkkW3/OKX-Main.jpg"
  alt="AI in F1 – Light Theme"
/>

### How AI Shapes Modern F1 Engineering

Teams process millions of data points every race weekend. Sensors spread across the power unit, gearbox, suspension, chassis, tyres, and even the driver’s biometrics continuously stream telemetry.  
AI models analyse this data in real time to detect anomalies, predict failures and automatically recommend engineering responses.

This shift allows teams to **prevent component breakdowns**, adjust thermal loads, and optimise fuel-energy deployment long before issues occur. Predictive maintenance alone has saved teams both performance loss and millions in potential penalties.

### Race Strategy Powered by Machine Learning

Strategy units now depend heavily on Monte-Carlo-based simulations—often running **hundreds of thousands of race permutations** each weekend. AI systems evaluate:

- Tyre degradation curves  
- Track evolution  
- Overtaking probability  
- Pit-window modelling  
- Competitor behaviour patterns  
- Virtual safety-car and full safety-car likelihood  
- Weather volatility  

This modelling gives strategists near-instant clarity on undercut/overcut feasibility, optimal lap timing for pit stops, and risk-weighted decision-making.  
This is why top teams often appear “predictive”—the machine already calculated the move.

### Driver Performance Analysis

AI also acts as a virtual performance engineer for drivers.  
Telemetry from throttle maps, braking pressure, steering traces and tyre slip is compared against ideal racing lines generated by machine learning. The system identifies micro-inefficiencies invisible to the naked eye.

Drivers receive targeted insights such as:

- “Brake 2 meters earlier at Turn 9.”  
- “Reduce mid-corner steering correction by 3%.”  
- “Increase throttle commitment 12 meters sooner on exit.”  

This transforms training sessions into **data-driven optimisation loops**, giving drivers more consistent lap-time improvements.

### Aerodynamic Development

Wind-tunnel time is restricted by FIA regulations, making AI simulation indispensable.  
Teams now use AI-accelerated CFD (Computational Fluid Dynamics) models to evaluate thousands of aerodynamic shapes far faster than traditional solvers.

These models analyse:

- Flow separation zones  
- Turbulence intensity  
- Drag vs. downforce trade-offs  
- Yaw-sensitivity  
- Dirty-air behaviour during overtakes  

The outcome is quicker iteration cycles and more aggressive aero concepts—crucial in the cost-cap era.

### Competitive Advantage and Future Direction

AI has turned Formula 1 into a hybrid battlefield of human instinct and algorithmic dominance.  
Teams with better data pipelines, cleaner telemetry, and faster modelling infrastructure gain measurable race-winning advantages.

The future trajectory includes:

- Full AI-driven virtual car setups  
- Predictive-race execution systems  
- Reinforcement-learning race strategies  
- Near real-time aerodynamic shape adaptation  
- Advanced biometrics-to-strategy integration  

As AI matures, Formula 1 will shift even further into computational racing—where milliseconds are earned through algorithms as much as through engineering.
19:["$","$L2a",null,{"posts":[{"metadata":{"title":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey","description":"A simple reflection on my volunteer experience at TEDxColombo 2025, the ideas that shaped the day, and the moments that unfolded backstage.","image":"https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg","pinned":true,"createdAt":"$D2025-06-01T00:00:00.000Z"},"slug":"Tedx","content":"$2b"},{"metadata":{"title":"Responsive Design Mastery - My Creative Adventure in Crafting Websites That Adapt to Every Screen","description":"A frontend developer's journey from framework dependency to mastering core CSS and media queries for building truly responsive websites from scratch.","image":"https://i.postimg.cc/NGR3RyLK/1-j-ZCYevnot-N-5UKCs-X0I1fw.jpg","pinned":false,"createdAt":"Nov 14, 2024","updatedAt":"Nov 14, 2024"},"slug":"Responsive","content":"$2c"},{"metadata":{"title":"The Impact of AI in Formula 1","description":"A deep analysis of how artificial intelligence powers strategy, engineering, performance optimisation, and competitive advantage in modern Formula 1.","image":"https://i.postimg.cc/9XDsD5p1/1733653498230.png","pinned":false,"createdAt":"Aug 27, 2024","updatedAt":"Aug 27, 2024"},"slug":"F1","content":"$2d"}]}]
1c:["$","$L2e",null,{"className":"sm:hidden","items":"$9:props:children:1:0:props:children:props:children:2:props:items"}]
1d:["$","$L2f",null,{}]
24:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, viewport-fit=cover"}],["$","meta","2",{"name":"theme-color","content":"#ffffff"}]]
31:I[27201,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"IconMark"]
30:T521,Hasal,Dharmagunawardana,Hasal Hansada Dharmagunawardana,Hansada,hesxo,thurstan,it,cricketer,Welikanna,Hasal Dharmagunawardana,Hasal Hansada Dharmagunawardana,Hasal,Hansada,hansada,hasal,hesxo,software developer,web developer,full stack developer,computer science student,university of westminster,westminster,uk,sri lanka,colombo,lk,sri lankan,sri lankan software developer,sri lankan web developer,sri lankan full stack developer,sri lankan computer science student,sri lankan university of westminster,sri lankan westminster,iit,iit university,iit university of westminster,iit university of westminster computer science student,iit university of westminster web developer,iit university of westminster full stack developer,iit university of westminster software developer,iit university of westminster computer science,iit university of westminster computer science student,iit university of westminster web developer,iit university of westminster full stack developer,iit university of westminster software developer,iit university of westminster computer science,iit university of westminster computer science student,iit university of westminster web developer,iit university of westminster full stack developer,iit university of westminster software developer,iit university of westminster computer science27:[["$","title","0",{"children":"Blog – Hasal Dharmagunawardana"}],["$","meta","1",{"name":"description","content":"A collection of articles on development, design, and ideas."}],["$","link","2",{"rel":"author","href":"https://hasal.me"}],["$","meta","3",{"name":"author","content":"Hasal Dharmagunawardana"}],["$","link","4",{"rel":"manifest","href":"/manifest.webmanifest","crossOrigin":"$undefined"}],["$","meta","5",{"name":"keywords","content":"$30"}],["$","meta","6",{"name":"creator","content":"Hasal Dharmagunawardana"}],["$","link","7",{"rel":"canonical","href":"https://hasal.me"}],["$","meta","8",{"property":"og:title","content":"Blog – Hasal Dharmagunawardana"}],["$","meta","9",{"property":"og:description","content":"A collection of articles on development, design, and ideas."}],["$","meta","10",{"property":"og:url","content":"https://hasal.me"}],["$","meta","11",{"property":"og:site_name","content":"Hasal Dharmagunawardana"}],["$","meta","12",{"property":"og:image","content":"https://i.postimg.cc/FFC05vqp/Firefly-20250222195436.png"}],["$","meta","13",{"property":"og:image:width","content":"1200"}],["$","meta","14",{"property":"og:image:height","content":"630"}],["$","meta","15",{"property":"og:image:alt","content":"Hasal Dharmagunawardana"}],["$","meta","16",{"property":"og:type","content":"profile"}],["$","meta","17",{"property":"profile:first_name","content":"Hasal"}],["$","meta","18",{"property":"profile:last_name","content":"Dharmagunawardana"}],["$","meta","19",{"property":"profile:username","content":"hesxo"}],["$","meta","20",{"property":"profile:gender","content":"male"}],["$","meta","21",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","22",{"name":"twitter:creator","content":"@hesxo"}],["$","meta","23",{"name":"twitter:title","content":"Blog – Hasal Dharmagunawardana"}],["$","meta","24",{"name":"twitter:description","content":"A collection of articles on development, design, and ideas."}],["$","meta","25",{"name":"twitter:image","content":"https://i.postimg.cc/FFC05vqp/Firefly-20250222195436.png"}],["$","link","26",{"rel":"icon","href":"/favicon.ico","sizes":"any"}],["$","link","27",{"rel":"icon","href":"/favicon.svg","type":"image/svg+xml"}],["$","link","28",{"rel":"apple-touch-icon","href":"/favicon.svg","type":"image/svg+xml","sizes":"180x180"}],["$","$L31","29",{}]]
29:null
32:I[46798,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"Tooltip"]
33:I[46798,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"TooltipTrigger"]
34:I[46798,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"TooltipContent"]
1a:["$","$L32",null,{"children":[["$","$L33",null,{"asChild":true,"children":["$","$L13",null,{"className":"gap-1.5 pr-1.5 pl-2","variant":"ghost","asChild":true,"children":["$","a",null,{"href":"https://github.com/hesxo/portfolio","target":"_blank","rel":"noopener","children":[["$","svg",null,{"viewBox":"0 0 24 24","className":"-translate-y-px","children":["$","path",null,{"d":"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12","fill":"currentColor"}]}],["$","span",null,{"className":"sr-only","children":"GitHub"}],["$","span",null,{"className":"font-mono text-[13px] text-muted-foreground","children":"0"}]]}]}]}],["$","$L34",null,{"className":"rounded-full bg-black dark:bg-zinc-800 px-3 py-1 text-sm text-white font-mono","children":["0"," stars"]}]]}]
