(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_5d8299._.js", {

"[project]/src/assets/tableAvatar.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/tableAvatar.14adaed7.png");
})()),
"[project]/src/assets/tableAvatar.png.mjs { IMAGE => \"[project]/src/assets/tableAvatar.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tableAvatar$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/tableAvatar.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tableAvatar$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 56,
    height: 55,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAICAQIsLClBd3aEv3+DofaLeYX2c3BLvycqFUACAgECACQnGkFzdHDah4WX/3l4kP+OaYn/iX1//2lxQdkmKhdAAFhcRb56eHr/bVxg/4NfVv98WE//al9f/3d+TP9pcTu/AG9uS/ZgT0L/Zj8y/3FEM/9vQjD/Y0s8/5OOV/+fm1n2AJWHXPZ9XUf/l2FL/5VeS/+NV0X/iGNN/7use//Ov472AId8X79vX1L/Zj0w/3lOQ/9zS0L/Yk5O/3yBlf94e4i+ACcnJkA+O0PZOCYk/1w/Of9XPTn/My85/zxEadoVGyxBAAICAwIWFRlBGBIVvyMYGvYkGhz2HR0nvxUXIkEAAQICc/NxMlgC2/0AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/src/redux/api/students/index.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useGetStudentsQuery": ()=>useGetStudentsQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ENDPOINTS = ("TURBOPACK compile-time value", "api");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].injectEndpoints({
    endpoints: (build)=>({
            getStudents: build.query({
                query: ()=>({
                        url: `${ENDPOINTS}/students/`,
                        method: "GET"
                    }),
                providesTags: [
                    "students"
                ]
            })
        })
});
const { useGetStudentsQuery } = api;

})()),
"[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './StudentsClassTable.module.scss'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tableAvatar$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tableAvatar$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/assets/tableAvatar.png.mjs { IMAGE => "[project]/src/assets/tableAvatar.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$students$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/api/students/index.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const StudentClassTable = ()=>{
    _s();
    const { data, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$students$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetStudentsQuery"])();
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Загрузка..."
    }, void 0, false, {
        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
        lineNumber: 28,
        columnNumber: 27
    }, this);
    if (isError || !data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Ошибка при загрузке данных."
    }, void 0, false, {
        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
        lineNumber: 29,
        columnNumber: 34
    }, this);
    console.log(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: scss.StudentClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: scss.content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: scss.title,
                        children: "Класс"
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: scss.table,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: scss.tableTitle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: scss.titleText,
                                        children: "No."
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: scss.titleText,
                                        children: "Имя ученика"
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: scss.titleText,
                                        children: "Класс"
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                        lineNumber: 42,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: scss.titleText,
                                        children: "Кл. руководитель"
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: scss.tableContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: scss.hr
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this),
                                    data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: scss.studentInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: scss.tableTextNumber,
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: scss.tableName,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: scss.studentIcon,
                                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tableAvatar$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tableAvatar$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                            alt: "Аватар студента"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 41
                                                        }, this),
                                                        item.surname,
                                                        " ",
                                                        item.name,
                                                        " ",
                                                        item.last_name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: scss.tableText,
                                                    children: [
                                                        item.school_class.grade,
                                                        "-",
                                                        item.school_class.parallel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: scss.tableText,
                                                    children: item.classroom_teacher.map((teacher)=>teacher.name).join(", ")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, `${item.surname}-${item.name}-${item.last_name}-${index}`, true, {
                                            fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/appPages/site/components/pages/students/StudentsClassTable/StudentsClassTable.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
};
_s(StudentClassTable, "KYnaOCEDypka6bzuj+jUrfrh/rM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$students$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetStudentsQuery"]
    ];
});
_c = StudentClassTable;
const __TURBOPACK__default__export__ = StudentClassTable;
var _c;
__turbopack_refresh__.register(_c, "StudentClassTable");

})()),
"[project]/src/app/(site)/students/[studentsClass]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_5d8299._.js.map