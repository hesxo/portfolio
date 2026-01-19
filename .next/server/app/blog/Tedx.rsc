1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js"],""]
f:I[68027,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"default"]
:HL["/_next/static/chunks/d58dd575d6c337aa.css","style"]
:HL["/_next/static/chunks/1ad08377e38c84f5.css","style"]
:HL["/_next/static/media/03fc1b4a8d284b5e-s.p.af4fcd24.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/23b7a97ae3b5c134-s.p.2902b61f.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/99e609270109b47d-s.p.64b9304e.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/effe91970fc4db64-s.p.19510058.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/chunks/e9b84da6d07baf88.css","style"]
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
4:T7a4,data:text/javascript;base64,CiAgdHJ5IHsKICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09ICdkYXJrJyB8fCAoKCEoJ3RoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpIHx8IGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gJ3N5c3RlbScpICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykpIHsKICAgICAgLy8gVXNlIGEgbGl0ZXJhbCBoZXJlIHRvIGF2b2lkIGNpcmN1bGFyIGltcG9ydCBpc3N1ZXMgZHVyaW5nIG1vZHVsZSBldmFsdWF0aW9uCiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT0idGhlbWUtY29sb3IiXScpLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICcjMDkwOTBiJykKICAgIH0KICB9IGNhdGNoIChfKSB7fQoKICB0cnkgewogICAgaWYgKC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSB7CiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcy1tYWNvcycpCiAgICB9CiAgfSBjYXRjaCAoXykge30KICAvLyBSZW1vdmUga25vd24gZXh0ZW5zaW9uLWluamVjdGVkIGF0dHJpYnV0ZXMgYW5kIHNjcmlwdHMgdGhhdCBjYXVzZQogIC8vIGh5ZHJhdGlvbiBtaXNtYXRjaGVzLiBSdW4gYXMgZWFybHkgYXMgcG9zc2libGUgZHVyaW5nIHBhcnNlIHNvIHRoZQogIC8vIGNsaWVudCBET00gbWF0Y2hlcyB0aGUgU1NSIG91dHB1dC4KICB0cnkgewogICAgLy8gUmVtb3ZlIGF0dHJpYnV0ZXMgYmVnaW5uaW5nIHdpdGggJ2Jpc18nIG9yICdkYXRhLWJpcycKICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkrKykgewogICAgICBjb25zdCBlbCA9IGFsbFtpXTsKICAgICAgY29uc3QgYXR0cnMgPSBBcnJheS5mcm9tKGVsLmF0dHJpYnV0ZXMgfHwgW10pOwogICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGF0dHJzLmxlbmd0aDsgaisrKSB7CiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2pdICYmIGF0dHJzW2pdLm5hbWU7CiAgICAgICAgaWYgKG5hbWUgJiYgKG5hbWUuc3RhcnRzV2l0aCgnYmlzXycpIHx8IG5hbWUuc3RhcnRzV2l0aCgnZGF0YS1iaXMnKSkpIHsKICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAvLyBSZW1vdmUgYW55IHNjcmlwdCB0YWdzIGluamVjdGVkIGZyb20gY2hyb21lIGV4dGVuc2lvbnMKICAgIGNvbnN0IGV4dFNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbc3JjXj0iY2hyb21lLWV4dGVuc2lvbjovLyJdJyk7CiAgICBmb3IgKGxldCBrID0gMDsgayA8IGV4dFNjcmlwdHMubGVuZ3RoOyBrKyspIHsKICAgICAgZXh0U2NyaXB0c1trXS5yZW1vdmUoKTsKICAgIH0KICB9IGNhdGNoIChfKSB7fQo=0:{"P":null,"b":"hUQQNYPbFtFcTVuPA2avv","c":["","blog","Tedx"],"q":"","i":false,"f":[[["",{"children":["(app)",{"children":["(docs)",{"children":["blog",{"children":[["slug","Tedx","d"],{"children":["__PAGE__",{}]}]}]}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/d58dd575d6c337aa.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/1ad08377e38c84f5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/569beec6ce652ca3.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/e8189ee112d00244.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","className":"ibm_plex_sans_2fc5a022-module__JHRiQG__variable ibm_plex_mono_713c6c8d-module__75UuTG__variable","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","script",null,{"type":"text/javascript","dangerouslySetInnerHTML":{"__html":"$2"}}],["$","$L3",null,{"src":"$4"}],"$L5","$L6","$L7"]}],"$L8"]}]]}],{"children":["$L9",{"children":["$La",{"children":["$Lb",{"children":["$Lc",{"children":["$Ld",{},null,false,false]},null,false,false]},null,false,false]},null,false,false]},null,false,false]},null,false,false],"$Le",false]],"m":"$undefined","G":["$f",[]],"s":false,"S":true}
11:I[1661,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js"],"Providers"]
12:I[39756,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"default"]
13:I[37457,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"default"]
14:I[19455,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"Button"]
15:I[22016,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],""]
16:I[94169,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"SiteHeaderWrapper"]
17:I[1025,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"SiteHeaderMark"]
18:I[38970,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"DesktopNav"]
19:I[52157,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"PreloadChunks"]
1a:I[11719,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"CommandMenu"]
26:I[97367,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"OutletBoundary"]
27:"$Sreact.suspense"
29:I[97367,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"ViewportBoundary"]
2b:I[97367,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"MetadataBoundary"]
10:Tb47,
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
          5:["$","$L3",null,{"id":"strip-bis-attributes","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$10"}}]
6:["$","script",null,{"type":"application/ld+json","suppressHydrationWarning":true,"dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"Hasal Dharmagunawardana\",\"url\":\"https://hasal.me\",\"alternateName\":[\"hesxo\"]}"}}]
7:["$","script",null,{"type":"application/ld+json","suppressHydrationWarning":true,"dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"Person\",\"name\":\"Hasal Dharmagunawardana\",\"givenName\":\"Hasal\",\"familyName\":\"Dharmagunawardana\",\"jobTitle\":\"Design Engineer\",\"url\":\"https://hasal.me\",\"sameAs\":[\"https://hasal.me\"],\"description\":\"Creating with code. Small details matter.\"}"}}]
8:["$","body",null,{"suppressHydrationWarning":true,"children":["$","$L11",null,{"children":["$","$L12",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L13",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"flex flex-col items-center justify-center h-screen","children":[["$","svg",null,{"className":"h-28 w-full text-border","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 514 258","fill":"none","children":["$","path",null,{"d":"M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z","stroke":"currentColor","strokeWidth":"1","vectorEffect":"non-scaling-stroke"}]}],["$","h1",null,{"className":"mt-8 mb-6 font-mono text-8xl font-medium","children":"404"}],["$","$L14",null,{"variant":"default","asChild":true,"children":["$","$L15",null,{"href":"/","children":["Go to Home",["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]]}]}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]
1b:T1f52,
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

Let’s change the narrative—together.1c:Tefe,
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

Mastering responsive design using core CSS is an essential step for any frontend developer who wants to build websites that provide a seamless user experience across all devices. By learning and practicing these core techniques, you'll not only enhance your projects but also strengthen your overall development skills.1d:Tecd,

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
9:["$","$1","c",{"children":[[["$","script","script-0",{"src":"/_next/static/chunks/be8e01a7b92d86bd.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/10b9ae9ff3432632.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/00c2bc07373182e2.js","async":true,"nonce":"$undefined"}],["$","script","script-3",{"src":"/_next/static/chunks/23d74ee1d8794e8e.js","async":true,"nonce":"$undefined"}],["$","script","script-4",{"src":"/_next/static/chunks/204218aa9faacd78.js","async":true,"nonce":"$undefined"}],["$","script","script-5",{"src":"/_next/static/chunks/a16e62cbda526a9c.js","async":true,"nonce":"$undefined"}],["$","script","script-6",{"src":"/_next/static/chunks/97841d0b558083e9.js","async":true,"nonce":"$undefined"}]],[["$","$L16",null,{"className":"sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2 data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black] not-dark:data-[affix=true]:**:data-header-container:after:bg-border transition-shadow duration-300","children":["$","div",null,{"className":"screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl","data-header-container":true,"suppressHydrationWarning":true,"children":[["$","$L15",null,{"href":"/","aria-label":"Home","className":"[&_svg]:h-8","children":["$","$L17",null,{}]}],["$","div",null,{"className":"flex-1"}],["$","$L18",null,{"items":[{"title":"Portfolio","href":"/"},{"title":"Blog","href":"/blog"}]}],["$","div",null,{"className":"flex items-center *:first:mr-2","children":[[["$","$L19",null,{"moduleIds":["1661795820283289673"]}],["$","$L1a",null,{"posts":[{"metadata":{"title":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey","description":"A simple reflection on my volunteer experience at TEDxColombo 2025, the ideas that shaped the day, and the moments that unfolded backstage.","image":"https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg","pinned":true,"createdAt":"$D2025-06-01T00:00:00.000Z"},"slug":"Tedx","content":"$1b"},{"metadata":{"title":"Responsive Design Mastery - My Creative Adventure in Crafting Websites That Adapt to Every Screen","description":"A frontend developer's journey from framework dependency to mastering core CSS and media queries for building truly responsive websites from scratch.","image":"https://i.postimg.cc/NGR3RyLK/1-j-ZCYevnot-N-5UKCs-X0I1fw.jpg","pinned":false,"createdAt":"Nov 14, 2024","updatedAt":"Nov 14, 2024"},"slug":"Responsive","content":"$1c"},{"metadata":{"title":"The Impact of AI in Formula 1","description":"A deep analysis of how artificial intelligence powers strategy, engineering, performance optimisation, and competitive advantage in modern Formula 1.","image":"https://i.postimg.cc/9XDsD5p1/1733653498230.png","pinned":false,"createdAt":"Aug 27, 2024","updatedAt":"Aug 27, 2024"},"slug":"F1","content":"$1d"}]}]],"$L1e","$L1f","$L20","$L21"]}]]}]}],"$L22","$L23","$L24"]]}]
a:["$","$1","c",{"children":[null,["$","div",null,{"className":"mx-auto border-x border-edge md:max-w-3xl","children":[["$","div",null,{"className":"h-8 px-2 screen-line-after before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"}],["$","$L12",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L13",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]]}]
b:["$","$1","c",{"children":[null,["$","$L12",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L13",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center","children":[["$","svg",null,{"className":"h-28 w-full text-border","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 514 258","fill":"none","children":["$","path",null,{"d":"M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z","stroke":"currentColor","strokeWidth":"1","vectorEffect":"non-scaling-stroke"}]}],["$","h1",null,{"className":"mt-8 mb-6 font-mono text-8xl font-medium","children":"404"}],["$","$L14",null,{"variant":"default","asChild":true,"children":["$","$L15",null,{"href":"/","children":["Go to Home",["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]]}]}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}]
c:["$","$1","c",{"children":[null,["$","$L12",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L13",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
d:["$","$1","c",{"children":["$L25",[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/e9b84da6d07baf88.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/9fade1e48ce04b89.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/8133fe59c5784703.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/a13326acb8e33d9b.js","async":true,"nonce":"$undefined"}]],["$","$L26",null,{"children":["$","$27",null,{"name":"Next.MetadataOutlet","children":"$@28"}]}]]}]
e:["$","$1","h",{"children":[null,["$","$L29",null,{"children":"$@2a"}],["$","div",null,{"hidden":true,"children":["$","$L2b",null,{"children":["$","$27",null,{"name":"Next.Metadata","children":"$@2c"}]}]}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}]
2d:I[68923,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"ToggleTheme"]
2e:I[92553,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"MobileNav"]
2f:I[36068,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"ScrollTop"]
1f:["$","span",null,{"className":"mx-2 flex h-4 w-px bg-border"}]
20:["$","$L2d",null,{}]
21:[["$","$L19",null,{"moduleIds":["7923668823271313463"]}],["$","$L2e",null,{"className":"sm:hidden","items":"$9:props:children:1:0:props:children:props:children:2:props:items"}]]
22:["$","main",null,{"className":"max-w-screen overflow-x-hidden px-2","suppressHydrationWarning":true,"children":["$","$L12",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L13",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"flex flex-col items-center justify-center h-screen","children":[["$","svg",null,{"className":"h-28 w-full text-border","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 514 258","fill":"none","children":["$","path",null,{"d":"M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z","stroke":"currentColor","strokeWidth":"1","vectorEffect":"non-scaling-stroke"}]}],["$","h1",null,{"className":"mt-8 mb-6 font-mono text-8xl font-medium","children":"404"}],["$","$L14",null,{"variant":"default","asChild":true,"children":["$","$L15",null,{"href":"/","children":["Go to Home",["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]]}]}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]
23:["$","footer",null,{"className":"max-w-screen overflow-x-hidden px-2","children":["$","div",null,{"className":"screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl","children":["$","p",null,{"className":"mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground","children":["Built by"," ",["$","a",null,{"className":"link","href":"https://github.com/hesxo","target":"_blank","rel":"noopener","children":"Hasal Dharmagunwardana"}],"."]}]}]}]
24:[["$","$L19",null,{"moduleIds":["6277144292413625101"]}],["$","$L2f",null,{}]]
30:I[52032,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"PostKeyboardShortcuts"]
31:Tefe,
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

Mastering responsive design using core CSS is an essential step for any frontend developer who wants to build websites that provide a seamless user experience across all devices. By learning and practicing these core techniques, you'll not only enhance your projects but also strengthen your overall development skills.25:[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey\",\"description\":\"A simple reflection on my volunteer experience at TEDxColombo 2025, the ideas that shaped the day, and the moments that unfolded backstage.\",\"image\":\"https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg\",\"url\":\"https://hasal.me/blog/Tedx\",\"datePublished\":\"2025-06-01T00:00:00.000Z\",\"dateModified\":\"2025-12-02T08:06:18.611Z\",\"author\":{\"@type\":\"Person\",\"name\":\"Hasal Dharmagunawardana\",\"identifier\":\"hesxo\",\"image\":\"https://i.postimg.cc/FFC05vqp/Firefly-20250222195436.png\"}}"}}],["$","$L30",null,{"basePath":"/blog","previous":null,"next":{"metadata":"$9:props:children:1:0:props:children:props:children:3:props:children:0:1:props:posts:1:metadata","slug":"Responsive","content":"$31"}}],"$L32","$L33","$L34","$L35"]
36:I[73624,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"LLMCopyButtonWithViewOptions"]
37:I[81756,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"PostShareMenu"]
38:I[7308,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"CollapsibleWithContext"]
39:I[7308,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"CollapsibleTrigger"]
3a:I[7308,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"CollapsibleChevronsIcon"]
3b:I[7308,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js","/_next/static/chunks/9fade1e48ce04b89.js","/_next/static/chunks/8133fe59c5784703.js","/_next/static/chunks/a13326acb8e33d9b.js"],"CollapsibleContent"]
32:["$","div",null,{"className":"flex items-center justify-between p-2 pl-4","children":[["$","$L14",null,{"className":"h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground","variant":"link","asChild":true,"children":["$","$L15",null,{"href":"/blog","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-left","aria-hidden":"true","children":[["$","path","1l729n",{"d":"m12 19-7-7 7-7"}],["$","path","x3x0zl",{"d":"M19 12H5"}],"$undefined"]}],"Blog"]}]}],["$","div",null,{"className":"flex items-center gap-2","children":[["$","$L36",null,{"markdownUrl":"/blog/Tedx.mdx","isComponent":false}],["$","$L37",null,{"url":"/blog/Tedx"}],null,["$","$L14",null,{"variant":"secondary","size":"icon-sm","asChild":true,"children":["$","$L15",null,{"href":"/blog/Responsive","children":[["$","span",null,{"className":"sr-only","children":"Next"}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]]}]}]]}]]}]
33:["$","div",null,{"suppressHydrationWarning":true,"className":"screen-line-before screen-line-after","children":["$","div",null,{"className":"h-8 before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"}]}]
34:["$","div",null,{"data-slot":"prose","className":"prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge prose-blockquote:border-s-border prose-blockquote:[&_p:first-of-type]:before:content-none prose-blockquote:[&_p:last-of-type]:after:content-none px-4","children":[["$","h1",null,{"className":"screen-line-after mb-6 font-semibold","children":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey"}],["$","p",null,{"className":"lead mt-6 mb-6","children":"A simple reflection on my volunteer experience at TEDxColombo 2025, the ideas that shaped the day, and the moments that unfolded backstage."}],["$","$L38",null,{"className":"not-prose rounded-lg bg-code font-sans","children":[["$","$L39",null,{"className":"group/toc inline-flex w-full items-center gap-2 py-2.5 pr-2 pl-4 text-sm font-medium [&_svg]:size-4","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-text-align-start -translate-x-0.5","aria-hidden":"true","children":[["$","path","1fi0y6",{"d":"M21 5H3"}],["$","path","6jk70r",{"d":"M15 12H3"}],["$","path","z6ezky",{"d":"M17 19H3"}],"$undefined"]}],"On this page",["$","div",null,{"className":"ml-auto shrink-0 text-muted-foreground","aria-hidden":true,"children":["$","$L3a",null,{}]}]]}],["$","$L3b",null,{"className":"overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down","children":["$","ul",null,{"className":"flex flex-col px-4 pb-2 text-sm text-muted-foreground","children":[["$","li","#tedxcolombo-2025--where-ideas-collide-and-minds-expand",{"className":"flex py-1","style":{"paddingInlineStart":0},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#tedxcolombo-2025--where-ideas-collide-and-minds-expand","children":"TEDxColombo 2025 — Where Ideas Collide and Minds Expand"}]}],["$","li","#behind-the-scenes-volunteering-within-the-madness",{"className":"flex py-1","style":{"paddingInlineStart":0},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#behind-the-scenes-volunteering-within-the-madness","children":"Behind the Scenes: Volunteering Within the “MADness”"}]}],["$","li","#yevan-david-mindset-is-everything",{"className":"flex py-1","style":{"paddingInlineStart":32},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#yevan-david-mindset-is-everything","children":"Yevan David: Mindset Is Everything"}]}],["$","li","#jason-rajasinghe-adapting-to-chaos",{"className":"flex py-1","style":{"paddingInlineStart":32},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#jason-rajasinghe-adapting-to-chaos","children":"Jason Rajasinghe: Adapting to Chaos"}]}],["$","li","#audience-engagement--social-space",{"className":"flex py-1","style":{"paddingInlineStart":16},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#audience-engagement--social-space","children":"Audience Engagement & Social Space"}]}],"$L3c","$L3d","$L3e","$L3f","$L40","$L41","$L42","$L43"]}]}]]}],"$L44"]}]
35:["$","div",null,{"className":"screen-line-before h-4 w-full"}]
3c:["$","li","#theme-2-game-on--infinite-vs-finite-thinking",{"className":"flex py-1","style":{"paddingInlineStart":0},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#theme-2-game-on--infinite-vs-finite-thinking","children":"Theme 2: Game On — Infinite vs Finite Thinking"}]}]
3d:["$","li","#theme-3-culture-courage--compassion",{"className":"flex py-1","style":{"paddingInlineStart":0},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#theme-3-culture-courage--compassion","children":"Theme 3: Culture, Courage & Compassion"}]}]
3e:["$","li","#sonali-silva",{"className":"flex py-1","style":{"paddingInlineStart":16},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#sonali-silva","children":"Sonali Silva"}]}]
3f:["$","li","#kevin-wilson",{"className":"flex py-1","style":{"paddingInlineStart":16},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#kevin-wilson","children":"Kevin Wilson"}]}]
40:["$","li","#vikum-nawagamuwa--closing-reflection",{"className":"flex py-1","style":{"paddingInlineStart":16},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#vikum-nawagamuwa--closing-reflection","children":"Vikum Nawagamuwa — Closing Reflection"}]}]
41:["$","li","#anya-ratnayaka--colombo-wetlands",{"className":"flex py-1","style":{"paddingInlineStart":16},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#anya-ratnayaka--colombo-wetlands","children":"Anya Ratnayaka — Colombo Wetlands"}]}]
42:["$","li","#reflections-from-the-volunteer-side",{"className":"flex py-1","style":{"paddingInlineStart":0},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#reflections-from-the-volunteer-side","children":"Reflections From the Volunteer Side"}]}]
43:["$","li","#final-thought",{"className":"flex py-1","style":{"paddingInlineStart":0},"children":["$","a",null,{"className":"underline-offset-4 transition-colors hover:text-accent-foreground hover:underline","href":"#final-thought","children":"Final Thought"}]}]
44:["$","div",null,{"children":"$L45"}]
2a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, viewport-fit=cover"}],["$","meta","2",{"name":"theme-color","content":"#ffffff"}]]
46:T521,Hasal,Dharmagunawardana,Hasal Hansada Dharmagunawardana,Hansada,hesxo,thurstan,it,cricketer,Welikanna,Hasal Dharmagunawardana,Hasal Hansada Dharmagunawardana,Hasal,Hansada,hansada,hasal,hesxo,software developer,web developer,full stack developer,computer science student,university of westminster,westminster,uk,sri lanka,colombo,lk,sri lankan,sri lankan software developer,sri lankan web developer,sri lankan full stack developer,sri lankan computer science student,sri lankan university of westminster,sri lankan westminster,iit,iit university,iit university of westminster,iit university of westminster computer science student,iit university of westminster web developer,iit university of westminster full stack developer,iit university of westminster software developer,iit university of westminster computer science,iit university of westminster computer science student,iit university of westminster web developer,iit university of westminster full stack developer,iit university of westminster software developer,iit university of westminster computer science,iit university of westminster computer science student,iit university of westminster web developer,iit university of westminster full stack developer,iit university of westminster software developer,iit university of westminster computer science2c:[["$","title","0",{"children":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey – Hasal Dharmagunawardana"}],["$","meta","1",{"name":"description","content":"A simple reflection on my volunteer experience at TEDxColombo 2025, the ideas that shaped the day, and the moments that unfolded backstage."}],["$","link","2",{"rel":"author","href":"https://hasal.me"}],["$","meta","3",{"name":"author","content":"Hasal Dharmagunawardana"}],["$","link","4",{"rel":"manifest","href":"/manifest.webmanifest","crossOrigin":"$undefined"}],["$","meta","5",{"name":"keywords","content":"$46"}],["$","meta","6",{"name":"creator","content":"Hasal Dharmagunawardana"}],["$","link","7",{"rel":"canonical","href":"https://hasal.me/blog/Tedx"}],["$","meta","8",{"property":"og:title","content":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey – Hasal Dharmagunawardana"}],["$","meta","9",{"property":"og:description","content":"A simple reflection on my volunteer experience at TEDxColombo 2025, the ideas that shaped the day, and the moments that unfolded backstage."}],["$","meta","10",{"property":"og:url","content":"https://hasal.me/blog/Tedx"}],["$","meta","11",{"property":"og:image","content":"https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg"}],["$","meta","12",{"property":"og:image:width","content":"1200"}],["$","meta","13",{"property":"og:image:height","content":"630"}],["$","meta","14",{"property":"og:image:alt","content":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey"}],["$","meta","15",{"property":"og:type","content":"article"}],["$","meta","16",{"property":"article:published_time","content":"2025-06-01T00:00:00.000Z"}],["$","meta","17",{"property":"article:modified_time","content":"2025-12-02T08:06:18.650Z"}],["$","meta","18",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","19",{"name":"twitter:title","content":"Behind the Scenes at TEDxColombo 2025 — My Volunteer Journey – Hasal Dharmagunawardana"}],["$","meta","20",{"name":"twitter:description","content":"A simple reflection on my volunteer experience at TEDxColombo 2025, the ideas that shaped the day, and the moments that unfolded backstage."}],["$","meta","21",{"name":"twitter:image","content":"https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg"}],["$","link","22",{"rel":"icon","href":"/favicon.ico","sizes":"any"}],["$","link","23",{"rel":"icon","href":"/favicon.svg","type":"image/svg+xml"}],"$L47","$L48"]
28:null
49:I[27201,["/_next/static/chunks/208d109d56c94dec.js","/_next/static/chunks/18763f99e0ed0e75.js"],"IconMark"]
47:["$","link","24",{"rel":"apple-touch-icon","href":"/favicon.svg","type":"image/svg+xml","sizes":"180x180"}]
48:["$","$L49","25",{}]
:HL["https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg","image"]
:HL["https://i.postimg.cc/yxHBHcpm/Whats-App-Image-2025-06-01-at-13-27-28.jpg","image"]
:HL["https://i.postimg.cc/Df94SMHr/20250601-173913.jpg","image"]
45:[["$","h1",null,{"className":"flex flex-row items-center gap-2","id":"tedxcolombo-2025--where-ideas-collide-and-minds-expand","children":[["$","a",null,{"href":"#tedxcolombo-2025--where-ideas-collide-and-minds-expand","className":"peer not-prose","children":"TEDxColombo 2025 — Where Ideas Collide and Minds Expand"}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}],"\n",["$","p",null,{"children":["$","img",null,{"src":"https://i.postimg.cc/cLsHYymv/54562600271-44de5f8ff7-o.jpg","alt":"TEDxColombo 2025 Highlights","style":"$undefined"}]}],"\n",["$","p",null,{"children":["TEDxColombo 2025 brought together thinkers, creators, and everyday people with powerful stories.",["$","br",null,{}],"\n","I joined the event as a volunteer, and seeing everything from the inside gave me a different kind of understanding.",["$","br",null,{}],"\n","Here is my full experience, written simply, with space left for photos I took throughout the day."]}],"\n",["$","hr",null,{}],"\n",["$","h2",null,{"className":"flex flex-row items-center gap-2","id":"behind-the-scenes-volunteering-within-the-madness","children":[["$","a",null,{"href":"#behind-the-scenes-volunteering-within-the-madness","className":"peer not-prose","children":"Behind the Scenes: Volunteering Within the “MADness”"}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}],"\n",["$","p",null,{"children":["$","img",null,{"src":"https://i.postimg.cc/yxHBHcpm/Whats-App-Image-2025-06-01-at-13-27-28.jpg","alt":"Arrival & Volunteer Briefing","style":"$undefined"}]}],"\n",["$","p",null,{"children":["I arrived early at Nelum Pokuna Theatre for the volunteer briefing.",["$","br",null,{}],"\n","The theme was ",["$","strong",null,{"children":"MADness"}],"—breaking norms and stepping into uncomfortable ideas.",["$","br",null,{}],"\n","Even before the doors opened, I felt how much effort goes into making an event like this work.",["$","br",null,{}],"\n","Backstage is quiet, but everything starts there."]}],"\n",["$","hr",null,{}],"\n",["$","p",null,{"children":["$","img",null,{"src":"https://i.postimg.cc/Df94SMHr/20250601-173913.jpg","alt":"Stage & Lighting Setup","style":"$undefined"}]}],"\n",["$","p",null,{"children":"During the event, I learned valuable lessons about leadership. True leadership is not about commanding but about inspiring and enabling others to succeed. Watching the TEDxColombo team work together seamlessly, I saw how clear communication, trust, and shared purpose can turn a vision into reality."}],"\n",["$","hr",null,{}],"\n",["$","h4",null,{"className":"flex flex-row items-center gap-2","id":"yevan-david-mindset-is-everything","children":[["$","a",null,{"href":"#yevan-david-mindset-is-everything","className":"peer not-prose","children":["$","strong",null,{"children":"Yevan David: Mindset Is Everything"}]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":["$L4a","$L4b","$undefined"]}]]}],"\n","$L4c","\n","$L4d","\n","$L4e","\n","$L4f","\n","$L50","\n","$L51","\n","$L52","\n","$L53","\n","$L54","\n","$L55","\n","$L56","\n","$L57","\n","$L58","\n","$L59","\n","$L5a","\n","$L5b","\n","$L5c","\n","$L5d","\n","$L5e","\n","$L5f","\n","$L60","\n","$L61","\n","$L62","\n","$L63","\n","$L64","\n","$L65","\n","$L66","\n","$L67","\n","$L68","\n","$L69","\n","$L6a","\n","$L6b","\n","$L6c","\n","$L6d","\n","$L6e","\n","$L6f","\n","$L70","\n","$L71","\n","$L72","\n","$L73","\n","$L74","\n","$L75","\n","$L76","\n","$L77","\n","$L78","\n","$L79","\n","$L7a","\n","$L7b","\n","$L7c"]
:HL["https://i.postimg.cc/NM3TwsHp/54562930190-d1dae9f3cd-o.jpg","image"]
:HL["https://i.postimg.cc/65HTN6Rk/54562924030-b6461b405e-o.jpg","image"]
4a:["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}]
4b:["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]
4c:["$","div",null,{"style":{"position":"relative","paddingBottom":"56.25%","height":0},"children":["$","iframe",null,{"src":"https://www.youtube.com/embed/hdrKVXWoyoQ","title":"Yevan David TEDxColombo","style":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"},"frameBorder":"0","allowFullScreen":true}]}]
4d:["$","p",null,{"children":["Yevan spoke about racing at 250 mph and how presence can save your life.",["$","br",null,{}],"\n","He shared how he left home at 13 to live alone in Italy.",["$","br",null,{}],"\n","His lesson was simple: ",["$","strong",null,{"children":"resilience grows from struggle, not comfort."}]]}]
4e:["$","h4",null,{"className":"flex flex-row items-center gap-2","id":"jason-rajasinghe-adapting-to-chaos","children":[["$","a",null,{"href":"#jason-rajasinghe-adapting-to-chaos","className":"peer not-prose","children":["$","strong",null,{"children":"Jason Rajasinghe: Adapting to Chaos"}]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
4f:["$","div",null,{"style":{"position":"relative","paddingBottom":"56.25%","height":0},"children":["$","iframe",null,{"src":"https://www.youtube.com/embed/Y2064LlhKhY","title":"Jason Rajasinghe TEDxColombo","style":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"},"frameBorder":"0","allowFullScreen":true}]}]
50:["$","p",null,{"children":["Jason talked about the Sri Lankan reality—how our systems make simple things difficult.",["$","br",null,{}],"\n","He explained how we move through “15 steps when others take 2.”",["$","br",null,{}],"\n","His message: ",["$","strong",null,{"children":"adaptation is survival. Stress can push us to evolve."}],["$","br",null,{}],"\n","His reminder stayed with me:"]}]
51:["$","blockquote",null,{"children":["\n",["$","p",null,{"children":"“It’s okay—it’s just life. Don’t let the weight slow you down.”"}],"\n"]}]
52:["$","hr",null,{}]
53:["$","h3",null,{"className":"flex flex-row items-center gap-2","id":"audience-engagement--social-space","children":[["$","a",null,{"href":"#audience-engagement--social-space","className":"peer not-prose","children":["$","strong",null,{"children":"Audience Engagement & Social Space"}]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
54:["$","p",null,{"children":["$","img",null,{"src":"https://i.postimg.cc/NM3TwsHp/54562930190-d1dae9f3cd-o.jpg","alt":"Audience Engagement","style":"$undefined"}]}]
55:["$","p",null,{"children":["The audience was deeply engaged, with lively discussions in the social space.",["$","br",null,{}],"\n","This was where ideas were exchanged, connections were made, and the spirit of TEDx truly came alive."]}]
56:["$","p",null,{"children":["When the event began, the hall filled quickly.",["$","br",null,{}],"\n","From the side, I saw people reacting to every talk—nodding, thinking, leaning forward.",["$","br",null,{}],"\n","Outside, the social space was full of conversations, coffee, and new connections.",["$","br",null,{}],"\n","This showed me that ideas spread not only on stage, but in the small moments between people."]}]
57:["$","hr",null,{}]
58:["$","h2",null,{"className":"flex flex-row items-center gap-2","id":"theme-2-game-on--infinite-vs-finite-thinking","children":[["$","a",null,{"href":"#theme-2-game-on--infinite-vs-finite-thinking","className":"peer not-prose","children":["Theme 2: ",["$","strong",null,{"children":"Game On — Infinite vs Finite Thinking"}]]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
59:["$","div",null,{"style":{"position":"relative","paddingBottom":"56.25%","height":0},"children":["$","iframe",null,{"src":"https://www.youtube.com/embed/S16XUhMp-Ro","title":"Sanjiva Weerawarana TEDxColombo","style":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"},"frameBorder":"0","allowFullScreen":true}]}]
5a:["$","p",null,{"children":"Sanjiva Weerawarana used a cricket example to explain the difference between winning and truly building something meaningful."}]
5b:["$","ul",null,{"children":["\n",["$","li",null,{"children":["Sri Lanka makes ",["$","strong",null,{"children":"$$1.5B in IT exports"}],", mostly outsourcing."]}],"\n",["$","li",null,{"children":["The real potential is in ",["$","strong",null,{"children":"products"}],", not just services."]}],"\n",["$","li",null,{"children":"Deep learning matters more than scattered learning."}],"\n"]}]
5c:["$","p",null,{"children":"His advice was clear:"}]
5d:["$","blockquote",null,{"children":["\n",["$","p",null,{"children":"\"Don’t complain. Build. Be stubborn. Give a damn.\""}],"\n"]}]
5e:["$","hr",null,{}]
5f:["$","h2",null,{"className":"flex flex-row items-center gap-2","id":"theme-3-culture-courage--compassion","children":[["$","a",null,{"href":"#theme-3-culture-courage--compassion","className":"peer not-prose","children":["Theme 3: ",["$","strong",null,{"children":"Culture, Courage & Compassion"}]]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
60:["$","h3",null,{"className":"flex flex-row items-center gap-2","id":"sonali-silva","children":[["$","a",null,{"href":"#sonali-silva","className":"peer not-prose","children":["$","strong",null,{"children":"Sonali Silva"}]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
61:["$","div",null,{"style":{"position":"relative","paddingBottom":"56.25%","height":0},"children":["$","iframe",null,{"src":"https://www.youtube.com/embed/trpKyifxS1M","title":"Sonali Silva TEDxColombo","style":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"},"frameBorder":"0","allowFullScreen":true}]}]
62:["$","p",null,{"children":["Sonali spoke about abortion stigma in Sri Lanka.",["$","br",null,{}],"\n","She said something that everyone in the room felt:"]}]
63:["$","blockquote",null,{"children":["\n",["$","p",null,{"children":"“We are privately empathetic, but publicly disapproving.”"}],"\n"]}]
64:["$","p",null,{"children":["Her talk reminded me that silence can be more harmful than disagreement.",["$","br",null,{}],"\n","Change starts when we choose to speak with honesty."]}]
65:["$","h3",null,{"className":"flex flex-row items-center gap-2","id":"kevin-wilson","children":[["$","a",null,{"href":"#kevin-wilson","className":"peer not-prose","children":["$","strong",null,{"children":"Kevin Wilson"}]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
66:["$","div",null,{"style":{"position":"relative","paddingBottom":"56.25%","height":0},"children":["$","iframe",null,{"src":"https://www.youtube.com/embed/e85jWs_EzEs","title":"Kevin Wilson TEDxColombo","style":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"},"frameBorder":"0","allowFullScreen":true}]}]
67:["$","p",null,{"children":["Kevin explained that fear doesn’t have to be an enemy.",["$","br",null,{}],"\n","When we welcome it, ",["$","strong",null,{"children":"life becomes richer and more colorful."}],["$","br",null,{}],"\n","He ended by saying something very Sri Lankan:"]}]
68:["$","blockquote",null,{"children":["\n",["$","p",null,{"children":"“Enna tea ekak bomu” — Let’s sit down for tea and talk."}],"\n"]}]
69:["$","hr",null,{}]
6a:["$","h3",null,{"className":"flex flex-row items-center gap-2","id":"vikum-nawagamuwa--closing-reflection","children":[["$","a",null,{"href":"#vikum-nawagamuwa--closing-reflection","className":"peer not-prose","children":["$","strong",null,{"children":"Vikum Nawagamuwa — Closing Reflection"}]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
6b:["$","div",null,{"style":{"position":"relative","paddingBottom":"56.25%","height":0},"children":["$","iframe",null,{"src":"https://www.youtube.com/embed/L-MVnFkP1Hw","title":"Vikum Nawagamuwa TEDxColombo","style":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"},"frameBorder":"0","allowFullScreen":true}]}]
6c:["$","p",null,{"children":["He explained that > “not giving a f***” doesn’t mean not caring.",["$","br",null,{}],"\n","It means caring ",["$","strong",null,{"children":"about the right things"}],".",["$","br",null,{}],"\n","Let go of noise. Focus on what matters."]}]
6d:["$","hr",null,{}]
6e:["$","h3",null,{"className":"flex flex-row items-center gap-2","id":"anya-ratnayaka--colombo-wetlands","children":[["$","a",null,{"href":"#anya-ratnayaka--colombo-wetlands","className":"peer not-prose","children":["$","strong",null,{"children":"Anya Ratnayaka — Colombo Wetlands"}]}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
6f:["$","div",null,{"style":{"position":"relative","paddingBottom":"56.25%","height":0},"children":["$","iframe",null,{"src":"https://www.youtube.com/embed/_aiR_3LwjBo","title":"Anya Ratnayaka — Colombo Wetlands","style":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"},"frameBorder":"0","allowFullScreen":true}]}]
70:["$","p",null,{"children":"Colombo’s wetlands, once overlooked, are now recognized as vital for flood control and for shaping the city’s history. These urban ecosystems support remarkable biodiversity—including the endangered fishing cat—and thrive thanks to interconnected green spaces. Beyond wildlife, wetlands reduce urban heat, improve water quality, and provide restorative spaces that boost mental well‑being. They show that nature and urban life can coexist when planning prioritizes ecological resilience."}]
71:["$","p",null,{"children":"Watch Anya Ratnayaka’s talk for a thoughtful perspective on conserving Colombo’s wetlands and engaging communities in their stewardship."}]
72:["$","p",null,{"children":["After the event ended, we cleaned up, moved equipment, and guided people out.",["$","br",null,{}],"\n","I heard people talking about what they learned.",["$","br",null,{}],"\n","It felt good knowing we helped create that space."]}]
73:["$","hr",null,{}]
74:["$","h2",null,{"className":"flex flex-row items-center gap-2","id":"reflections-from-the-volunteer-side","children":[["$","a",null,{"href":"#reflections-from-the-volunteer-side","className":"peer not-prose","children":"Reflections From the Volunteer Side"}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
75:["$","ul",null,{"children":["\n",["$","li",null,{"children":"Backstage work matters as much as what’s on stage."}],"\n",["$","li",null,{"children":"MADness means stepping out of comfort, not losing control."}],"\n",["$","li",null,{"children":"The audience completes the story."}],"\n",["$","li",null,{"children":"Volunteers keep the message alive by keeping the event smooth."}],"\n",["$","li",null,{"children":"When the event ends, the real thinking begins."}],"\n"]}]
76:["$","hr",null,{}]
77:["$","p",null,{"children":["$","img",null,{"src":"https://i.postimg.cc/65HTN6Rk/54562924030-b6461b405e-o.jpg","alt":"Group Volunteer Photo","style":"$undefined"}]}]
78:["$","p",null,{"children":["Thank you to the organisers, speakers, technical team, and every volunteer.",["$","br",null,{}],"\n","Being part of TEDxColombo 2025 wasn’t just helping an event—it was being part of change."]}]
79:["$","hr",null,{}]
7a:["$","h2",null,{"className":"flex flex-row items-center gap-2","id":"final-thought","children":[["$","a",null,{"href":"#final-thought","className":"peer not-prose","children":"Final Thought"}],["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-link size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100","aria-label":"Link to section","children":[["$","path","1cjeqo",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["$","path","19qd67",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}],"$undefined"]}]]}]
7b:["$","p",null,{"children":["TEDxColombo 2025 didn’t give final answers.",["$","br",null,{}],"\n","It gave better questions.",["$","br",null,{}],"\n","It pushed us to build, fail, learn, adapt, and grow."]}]
7c:["$","p",null,{"children":"Let’s change the narrative—together."}]
7d:I[46798,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"Tooltip"]
7e:I[46798,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"TooltipTrigger"]
7f:I[46798,["/_next/static/chunks/569beec6ce652ca3.js","/_next/static/chunks/e8189ee112d00244.js","/_next/static/chunks/be8e01a7b92d86bd.js","/_next/static/chunks/10b9ae9ff3432632.js","/_next/static/chunks/00c2bc07373182e2.js","/_next/static/chunks/23d74ee1d8794e8e.js","/_next/static/chunks/204218aa9faacd78.js","/_next/static/chunks/a16e62cbda526a9c.js","/_next/static/chunks/97841d0b558083e9.js"],"TooltipContent"]
1e:["$","$L7d",null,{"children":[["$","$L7e",null,{"asChild":true,"children":["$","$L14",null,{"className":"gap-1.5 pr-1.5 pl-2","variant":"ghost","asChild":true,"children":["$","a",null,{"href":"https://github.com/hesxo/portfolio","target":"_blank","rel":"noopener","children":[["$","svg",null,{"viewBox":"0 0 24 24","className":"-translate-y-px","children":["$","path",null,{"d":"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12","fill":"currentColor"}]}],["$","span",null,{"className":"sr-only","children":"GitHub"}],["$","span",null,{"className":"font-mono text-[13px] text-muted-foreground","children":"0"}]]}]}]}],["$","$L7f",null,{"className":"rounded-full bg-black dark:bg-zinc-800 px-3 py-1 text-sm text-white font-mono","children":["0"," stars"]}]]}]
