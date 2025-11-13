module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/features/blog/data/posts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findNeighbour",
    ()=>findNeighbour,
    "getAllPosts",
    ()=>getAllPosts,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPostsByCategory",
    ()=>getPostsByCategory
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gray-matter/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
function parseFrontmatter(fileContent) {
    const file = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(fileContent);
    return {
        metadata: file.data,
        content: file.content
    };
}
function getMDXFiles(dir) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(dir).filter((file)=>__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(file) === ".mdx");
}
function readMDXFile(filePath) {
    const rawContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}
function getMDXData(dir) {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file)=>{
        const { metadata, content } = readMDXFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, file));
        const slug = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(file, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(file));
        return {
            metadata,
            slug,
            content
        };
    });
}
function getAllPosts() {
    return getMDXData(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "src/features/blog/content")).sort((a, b)=>{
        if (a.metadata.pinned && !b.metadata.pinned) return -1;
        if (!a.metadata.pinned && b.metadata.pinned) return 1;
        return new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime();
    });
}
function getPostBySlug(slug) {
    return getAllPosts().find((post)=>post.slug === slug);
}
function getPostsByCategory(category) {
    return getAllPosts().filter((post)=>post.metadata?.category === category);
}
function findNeighbour(posts, slug) {
    const len = posts.length;
    for(let i = 0; i < len; ++i){
        if (posts[i].slug === slug) {
            return {
                previous: i > 0 ? posts[i - 1] : null,
                next: i < len - 1 ? posts[i + 1] : null
            };
        }
    }
    return {
        previous: null,
        next: null
    };
}
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[project]/src/__registry__/index.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/ban-ts-comment */ /* eslint-disable @typescript-eslint/no-explicit-any */ // @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
__turbopack_context__.s([
    "Index",
    ()=>Index
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
;
const Index = {
    "utils": {
        name: "utils",
        description: "",
        type: "registry:lib",
        files: [
            {
                path: "src/registry/src/lib/utils.ts",
                type: "registry:lib"
            }
        ]
    },
    "use-controllable-state": {
        name: "use-controllable-state",
        description: "",
        type: "registry:hook",
        files: [
            {
                path: "src/registry/src/hooks/use-layout-effect.tsx",
                type: "registry:hook"
            },
            {
                path: "src/registry/src/hooks/use-controllable-state.ts",
                type: "registry:hook"
            }
        ]
    },
    "use-sound": {
        name: "use-sound",
        description: "Custom React hook to load and play a sound from a given URL using the Web Audio API.",
        type: "registry:hook",
        files: [
            {
                path: "src/registry/src/hooks/use-sound.ts",
                type: "registry:hook"
            }
        ]
    },
    "theme-switcher": {
        name: "theme-switcher",
        description: "A theme switcher component for Next.js apps with next-themes and Tailwind CSS, supporting system, light, and dark modes.",
        type: "registry:component",
        files: [
            {
                path: "src/registry/theme-switcher/theme-switcher.tsx",
                type: "registry:component"
            }
        ]
    },
    "flip-sentences": {
        name: "flip-sentences",
        description: "",
        type: "registry:component",
        files: [
            {
                path: "src/registry/flip-sentences/flip-sentences.tsx",
                type: "registry:component"
            }
        ]
    },
    "apple-hello-effect": {
        name: "apple-hello-effect",
        description: "Create a Xin chào and Hello writing effect inspired by Apple using Motion for React.",
        type: "registry:component",
        files: [
            {
                path: "src/registry/apple-hello-effect/apple-hello-effect.tsx",
                type: "registry:component"
            }
        ]
    },
    "wheel-picker": {
        name: "wheel-picker",
        description: "iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.",
        type: "registry:component",
        files: [
            {
                path: "src/registry/wheel-picker/wheel-picker.tsx",
                type: "registry:component"
            }
        ]
    },
    "work-experience": {
        name: "work-experience",
        description: "Displays a list of work experiences with role details and durations.",
        type: "registry:component",
        files: [
            {
                path: "src/registry/work-experience/work-experience.tsx",
                type: "registry:component"
            }
        ]
    },
    "shimmering-text": {
        name: "shimmering-text",
        description: "Smooth shimmering text animation built with Motion.",
        type: "registry:component",
        files: [
            {
                path: "src/registry/shimmering-text/shimmering-text.tsx",
                type: "registry:component"
            }
        ]
    },
    "slide-to-unlock": {
        name: "slide-to-unlock",
        description: "A sleek, interactive slider inspired by the classic iPhone OS 'slide to unlock' gesture.",
        type: "registry:component",
        files: [
            {
                path: "src/registry/slide-to-unlock/slide-to-unlock.tsx",
                type: "registry:component"
            }
        ]
    },
    "testimonials-marquee": {
        name: "testimonials-marquee",
        description: "A testimonials marquee component for showcasing user feedback in a scrolling format.",
        type: "registry:component",
        files: [
            {
                path: "src/registry/testimonials-marquee/testimonials-marquee.tsx",
                type: "registry:component"
            }
        ]
    },
    "wheel-picker-block-01": {
        name: "wheel-picker-block-01",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/wheel-picker-demo.tsx",
                type: "registry:component"
            }
        ]
    },
    "wheel-picker-block-02": {
        name: "wheel-picker-block-02",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/wheel-picker-form-demo.tsx",
                type: "registry:component"
            }
        ]
    },
    "work-experience-block-01": {
        name: "work-experience-block-01",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/work-experience-demo.tsx",
                type: "registry:component"
            }
        ]
    },
    "slide-to-unlock-block-01": {
        name: "slide-to-unlock-block-01",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/slide-to-unlock-demo-01.tsx",
                type: "registry:component"
            }
        ]
    },
    "slide-to-unlock-block-02": {
        name: "slide-to-unlock-block-02",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/slide-to-unlock-demo-02.tsx",
                type: "registry:component"
            }
        ]
    },
    "slide-to-unlock-block-03": {
        name: "slide-to-unlock-block-03",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/slide-to-unlock-demo-03.tsx",
                type: "registry:component"
            }
        ]
    },
    "testimonials-marquee-block-01": {
        name: "testimonials-marquee-block-01",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/testimonials-marquee-demo-01.tsx",
                type: "registry:component"
            }
        ]
    },
    "testimonials-marquee-block-02": {
        name: "testimonials-marquee-block-02",
        description: "",
        type: "registry:block",
        files: [
            {
                path: "src/registry/examples/testimonials-marquee-demo-02.tsx",
                type: "registry:component"
            }
        ]
    },
    "apple-hello-effect-vi-demo": {
        name: "apple-hello-effect-vi-demo",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/apple-hello-effect-vi-demo.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/apple-hello-effect-vi-demo.tsx [app-route] (ecmascript, async loader)"))
    },
    "apple-hello-effect-en-demo": {
        name: "apple-hello-effect-en-demo",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/apple-hello-effect-en-demo.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/apple-hello-effect-en-demo.tsx [app-route] (ecmascript, async loader)"))
    },
    "theme-switcher-demo": {
        name: "theme-switcher-demo",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/theme-switcher-demo.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/theme-switcher-demo.tsx [app-route] (ecmascript, async loader)"))
    },
    "wheel-picker-demo": {
        name: "wheel-picker-demo",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/wheel-picker-demo.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/wheel-picker-demo.tsx [app-route] (ecmascript, async loader)"))
    },
    "wheel-picker-form-demo": {
        name: "wheel-picker-form-demo",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/wheel-picker-form-demo.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/wheel-picker-form-demo.tsx [app-route] (ecmascript, async loader)"))
    },
    "work-experience-demo": {
        name: "work-experience-demo",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/work-experience-demo.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/work-experience-demo.tsx [app-route] (ecmascript, async loader)"))
    },
    "shimmering-text-demo": {
        name: "shimmering-text-demo",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/shimmering-text-demo.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/shimmering-text-demo.tsx [app-route] (ecmascript, async loader)"))
    },
    "slide-to-unlock-demo-01": {
        name: "slide-to-unlock-demo-01",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/slide-to-unlock-demo-01.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/slide-to-unlock-demo-01.tsx [app-route] (ecmascript, async loader)"))
    },
    "slide-to-unlock-demo-02": {
        name: "slide-to-unlock-demo-02",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/slide-to-unlock-demo-02.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/slide-to-unlock-demo-02.tsx [app-route] (ecmascript, async loader)"))
    },
    "slide-to-unlock-demo-03": {
        name: "slide-to-unlock-demo-03",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/slide-to-unlock-demo-03.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/slide-to-unlock-demo-03.tsx [app-route] (ecmascript, async loader)"))
    },
    "testimonials-marquee-demo-01": {
        name: "testimonials-marquee-demo-01",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/testimonials-marquee-demo-01.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/testimonials-marquee-demo-01.tsx [app-route] (ecmascript, async loader)"))
    },
    "testimonials-marquee-demo-02": {
        name: "testimonials-marquee-demo-02",
        description: "",
        type: "registry:example",
        files: [
            {
                path: "src/registry/examples/testimonials-marquee-demo-02.tsx",
                type: "registry:example"
            }
        ],
        component: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/registry/examples/testimonials-marquee-demo-02.tsx [app-route] (ecmascript, async loader)"))
    }
};
}),
"[project]/src/lib/remark-component.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "remarkComponent",
    ()=>remarkComponent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$registry_$5f2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/__registry__/index.tsx [app-route] (ecmascript)");
;
;
;
;
function remarkComponent() {
    return async (tree)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, (node, index, parent)=>{
            // src prop overrides both name and fileName.
            const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
            if (node.name === "ComponentSource") {
                const name = getNodeAttributeByName(node, "name")?.value;
                const fileName = getNodeAttributeByName(node, "fileName")?.value;
                if (!name && !srcPath) {
                    return null;
                }
                try {
                    let src;
                    if (srcPath) {
                        src = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), srcPath);
                    } else {
                        const component = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$registry_$5f2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Index"][name];
                        src = fileName ? component.files.find((file)=>{
                            if (typeof file === "string") {
                                return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
                            }
                            return false;
                        }) || component.files[0]?.path : component.files[0]?.path;
                    }
                    // Read the source file.
                    const filePath = src;
                    let source = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
                    // Replace imports.
                    // TODO: Use @swc/core and a visitor to replace this.
                    // For now a simple regex should do.
                    source = source.replaceAll(`@/registry/`, "@/components/");
                    source = source.replaceAll("export default", "export");
                    const title = getNodeAttributeByName(node, "title");
                    const showLineNumbers = getNodeAttributeByName(node, "showLineNumbers");
                    const codeBlock = {
                        type: "code",
                        meta: [
                            title ? `title="${title.value}"` : "",
                            showLineNumbers ? "showLineNumbers" : ""
                        ].join(" "),
                        lang: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].extname(filePath).slice(1),
                        value: source
                    };
                    if (parent && typeof index === "number") {
                        parent.children.splice(index, 1, codeBlock);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            if (node.name === "ComponentPreview") {
                const name = getNodeAttributeByName(node, "name")?.value;
                if (!name) {
                    return null;
                }
                try {
                    const component = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$registry_$5f2f$index$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Index"][name];
                    const src = component.files[0]?.path;
                    // Read the source file.
                    const filePath = src;
                    let source = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
                    // Replace imports.
                    // TODO: Use @swc/core and a visitor to replace this.
                    // For now a simple regex should do.
                    source = source.replaceAll(`@/registry/`, "@/components/");
                    source = source.replaceAll("export default", "export");
                    const codeBlock = {
                        type: "code",
                        lang: "tsx",
                        value: source
                    };
                    if (parent && typeof index === "number") {
                        parent.children.splice(index, 1, codeBlock);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });
    };
}
function getNodeAttributeByName(node, name) {
    return node.attributes?.find((attribute)=>attribute.name === name);
}
}),
"[project]/src/features/blog/lib/get-llm-text.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLLMText",
    ()=>getLLMText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/dayjs.min.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$mdx$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-mdx/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$remark$2d$component$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/remark-component.ts [app-route] (ecmascript)");
;
;
;
;
;
const processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["remark"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$mdx$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$remark$2d$component$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["remarkComponent"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
async function getLLMText(post) {
    const processed = await processor.process({
        value: post.content
    });
    return `# ${post.metadata.title}

${post.metadata.description}

${processed.value}

Last updated on ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(post.metadata.updatedAt).format("MMMM D, YYYY")}`;
}
}),
"[project]/src/app/(llms)/blog.mdx/[slug]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$blog$2f$data$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/blog/data/posts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$blog$2f$lib$2f$get$2d$llm$2d$text$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/blog/lib/get-llm-text.ts [app-route] (ecmascript)");
;
;
;
async function generateStaticParams() {
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$blog$2f$data$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllPosts"])();
    return posts.map((post)=>({
            slug: post.slug
        }));
}
async function GET(_request, { params }) {
    const { slug } = await params;
    const allPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$blog$2f$data$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const post = allPosts.find((post)=>post.slug === slug);
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return new Response(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$blog$2f$lib$2f$get$2d$llm$2d$text$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLLMText"])(post), {
        headers: {
            "Content-Type": "text/markdown;charset=utf-8"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d6f1d9dd._.js.map