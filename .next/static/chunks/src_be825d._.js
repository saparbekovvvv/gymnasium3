(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_be825d._.js", {

"[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _s = __turbopack_refresh__.signature();
"use client";
import { useGetFondQuery } from "@/redux/api/fond";
import scss from "./FondContent.module.scss";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";
const FondContent = ()=>{
    _s();
    const { data, isLoading, isError } = useGetFondQuery();
    const { isKyrgyz, t } = useLanguageStore();
    const totalPrice = data ? data.reduce((total, item)=>{
        return item.is_verified ? total + Math.floor(+item.amount) : total;
    }, 0) : 0;
    return /*#__PURE__*/ _jsxDEV("div", {
        className: scss.fondContent,
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: scss.container,
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: scss.content,
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        className: scss.title,
                        children: "Фонд"
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("hr", {
                        className: scss.divider
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    isLoading && /*#__PURE__*/ _jsxDEV("p", {
                        className: scss.message,
                        children: "Загрузка пожертвований..."
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this),
                    isError && /*#__PURE__*/ _jsxDEV("p", {
                        className: scss.message,
                        children: "Ошибка при загрузке пожертвований. Пожалуйста, попробуйте позже."
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: scss.totalPrice,
                        children: /*#__PURE__*/ _jsxDEV("h3", {
                            children: [
                                t("Жалпы сумма", "Общая сумма"),
                                " ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: [
                                        totalPrice,
                                        " Сом"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                                    lineNumber: 36,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    data && data.length > 0 ? /*#__PURE__*/ _jsxDEV("div", {
                        className: scss.donationsList,
                        children: data.map((item)=>item.is_verified ? /*#__PURE__*/ _jsxDEV("div", {
                                className: scss.donationItem,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        className: scss.donor,
                                        children: [
                                            " ",
                                            t("Жөнөтүүчү", "Отправитель"),
                                            ": ",
                                            item.user
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: scss.amount,
                                        children: [
                                            Math.floor(+item.amount),
                                            " Сом"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                                        lineNumber: 49,
                                        columnNumber: 21
                                    }, this),
                                    item.comment && /*#__PURE__*/ _jsxDEV("p", {
                                        className: scss.comment,
                                        children: item.comment
                                    }, void 0, false, {
                                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                                        lineNumber: 53,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                                lineNumber: 44,
                                columnNumber: 19
                            }, this) : null)
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ _jsxDEV("p", {
                        className: scss.message,
                        children: " не найдено."
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ _jsxDEV(Link, {
                        href: "/fond/donation",
                        className: scss.donateLink,
                        children: /*#__PURE__*/ _jsxDEV("button", {
                            className: scss.donateButton,
                            children: t("Акча салуу", "Внести деньги")
                        }, void 0, false, {
                            fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/appPages/site/components/pages/fond/FondContent/FondContent.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_s(FondContent, "nESufbXrNs5Uu7AtXqkxsifaM4c=", false, function() {
    return [
        useGetFondQuery,
        useLanguageStore
    ];
});
_c = FondContent;
export default FondContent;
var _c;
__turbopack_refresh__.register(_c, "FondContent");

})()),
"[project]/src/app/(site)/fond/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_be825d._.js.map