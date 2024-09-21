(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_34b9c8._.js", {

"[project]/src/redux/api/olympians/index.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useGetOlympiansQuery": ()=>useGetOlympiansQuery,
    "useGetOlympiansSelectionQuery": ()=>useGetOlympiansSelectionQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ENDPOINTS = ("TURBOPACK compile-time value", "api");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].injectEndpoints({
    endpoints: (build)=>({
            getOlympians: build.query({
                query: ()=>({
                        url: `${ENDPOINTS}/students/olympians/`,
                        method: "GET"
                    }),
                providesTags: [
                    "olympians"
                ]
            }),
            getOlympiansSelection: build.query({
                query: (id)=>({
                        url: `${ENDPOINTS}/olymp_categories/${id}`,
                        method: "GET"
                    })
            })
        })
});
const { useGetOlympiansQuery, useGetOlympiansSelectionQuery } = api;

})()),
"[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$olympians$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/api/olympians/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const OlympaidTable = ()=>{
    _s();
    const { category_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { data, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$olympians$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetOlympiansQuery"])(String(category_id));
    console.log(data);
    // if (isLoading) return <div className={scss.loading}>Загрузка...</div>;
    // if (isError || !data) {
    //     return <div className={scss.error}>Ошибка при загрузке данных.</div>;
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].StudentsParliamentTable,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Школьный парламент"
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableTitle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleText,
                                        children: "No."
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleText,
                                        children: "Имя ученика"
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                        lineNumber: 33,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleText,
                                        children: "Должность"
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                        lineNumber: 34,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hr
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this),
                                    data?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].studentInfo} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animateFromLeft}`,
                                            style: {
                                                animationDelay: `${index * 0.1}s`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableTextNumber,
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableName,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].studentIcon,
                                                            src: avatar,
                                                            alt: `Аватар студента ${item.student[0].name} ${item.student[0].surname}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameContent,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableText,
                                                                    children: item.student[0].surname
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                                                    lineNumber: 56,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableText,
                                                                    children: item.student[0].name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                                                    lineNumber: 59,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$students$2f$OlympaidTable$2f$OlympaidTable$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableTextNumber,
                                                    children: item.type_of_administrator.choosing
                                                }, void 0, false, {
                                                    fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                            lineNumber: 39,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/appPages/site/components/pages/students/OlympaidTable/OlympaidTable.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
};
_s(OlympaidTable, "/fFfXrodA97SBKP3syQnewIAv+g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$olympians$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetOlympiansQuery"]
    ];
});
_c = OlympaidTable;
const __TURBOPACK__default__export__ = OlympaidTable;
var _c;
__turbopack_refresh__.register(_c, "OlympaidTable");

})()),
"[project]/src/app/(site)/olymp_categories/[category_id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_34b9c8._.js.map