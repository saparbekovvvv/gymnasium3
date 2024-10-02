(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
    "static/chunks/13a58_next_dist_esm_build_templates_app-page_15247b.js",
    {},
    {"otherChunks":["static/chunks/13a58_next_dist_compiled_react_fb7099._.js","static/chunks/13a58_next_dist_compiled_react-dom_cjs_react-dom_development_86b19a.js","static/chunks/13a58_next_dist_compiled_react-dom_514257._.js","static/chunks/13a58_next_dist_compiled_64dfd6._.js","static/chunks/13a58_next_dist_client_6c0734._.js","static/chunks/13a58_next_dist_b7a4cf._.js","static/chunks/90481_@swc_helpers_cjs_e55b81._.js","static/chunks/[turbopack]_dev_client_hmr-client_ts_7c76d9._.js"],"runtimeModuleIds":["[project]/node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.79.4/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js [app-client] (ecmascript)","[project]/node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.79.4/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)"]}
]);
(() => {
if (!Array.isArray(globalThis.TURBOPACK)) {
    return;
}

const CHUNK_BASE_PATH = "/_next/";
const RUNTIME_PUBLIC_PATH = "/_next/";
const OUTPUT_ROOT = "_next";
/**
 * This file contains runtime types and functions that are shared between all
 * TurboPack ECMAScript runtimes.
 *
 * It will be prepended to the runtime code of each runtime.
 */ /* eslint-disable @next/next/no-assign-module-variable */ /// <reference path="./runtime-types.d.ts" />
const REEXPORTED_OBJECTS = Symbol("reexported objects");
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag;
function defineProp(obj, name1, options) {
    if (!hasOwnProperty.call(obj, name1)) Object.defineProperty(obj, name1, options);
}
/**
 * Adds the getters to the exports object.
 */ function esm(exports, getters) {
    defineProp(exports, "__esModule", {
        value: true
    });
    if (toStringTag) defineProp(exports, toStringTag, {
        value: "Module"
    });
    for(const key in getters){
        defineProp(exports, key, {
            get: getters[key],
            enumerable: true
        });
    }
}
/**
 * Makes the module an ESM with exports
 */ function esmExport(module, exports, getters) {
    module.namespaceObject = module.exports;
    esm(exports, getters);
}
function ensureDynamicExports(module, exports) {
    let reexportedObjects = module[REEXPORTED_OBJECTS];
    if (!reexportedObjects) {
        reexportedObjects = module[REEXPORTED_OBJECTS] = [];
        module.exports = module.namespaceObject = new Proxy(exports, {
            get (target, prop) {
                if (hasOwnProperty.call(target, prop) || prop === "default" || prop === "__esModule") {
                    return Reflect.get(target, prop);
                }
                for (const obj of reexportedObjects){
                    const value = Reflect.get(obj, prop);
                    if (value !== undefined) return value;
                }
                return undefined;
            },
            ownKeys (target) {
                const keys = Reflect.ownKeys(target);
                for (const obj of reexportedObjects){
                    for (const key of Reflect.ownKeys(obj)){
                        if (key !== "default" && !keys.includes(key)) keys.push(key);
                    }
                }
                return keys;
            }
        });
    }
}
/**
 * Dynamically exports properties from an object
 */ function dynamicExport(module, exports, object) {
    ensureDynamicExports(module, exports);
    if (typeof object === "object" && object !== null) {
        module[REEXPORTED_OBJECTS].push(object);
    }
}
function exportValue(module, value) {
    module.exports = value;
}
function exportNamespace(module, namespace) {
    module.exports = module.namespaceObject = namespace;
}
function createGetter(obj, key) {
    return ()=>obj[key];
}
/**
 * @returns prototype of the object
 */ const getProto = Object.getPrototypeOf ? (obj)=>Object.getPrototypeOf(obj) : (obj)=>obj.__proto__;
/** Prototypes that are not expanded for exports */ const LEAF_PROTOTYPES = [
    null,
    getProto({}),
    getProto([]),
    getProto(getProto)
];
/**
 * @param raw
 * @param ns
 * @param allowExportDefault
 *   * `false`: will have the raw module as default export
 *   * `true`: will have the default property as default export
 */ function interopEsm(raw, ns, allowExportDefault) {
    const getters = Object.create(null);
    for(let current = raw; (typeof current === "object" || typeof current === "function") && !LEAF_PROTOTYPES.includes(current); current = getProto(current)){
        for (const key of Object.getOwnPropertyNames(current)){
            getters[key] = createGetter(raw, key);
        }
    }
    // this is not really correct
    // we should set the `default` getter if the imported module is a `.cjs file`
    if (!(allowExportDefault && "default" in getters)) {
        getters["default"] = ()=>raw;
    }
    esm(ns, getters);
    return ns;
}
function createNS(raw) {
    if (typeof raw === "function") {
        return function(...args) {
            return raw.apply(this, args);
        };
    } else {
        return Object.create(null);
    }
}
function esmImport(sourceModule, id) {
    const module = getOrInstantiateModuleFromParent(id, sourceModule);
    if (module.error) throw module.error;
    // any ES module has to have `module.namespaceObject` defined.
    if (module.namespaceObject) return module.namespaceObject;
    // only ESM can be an async module, so we don't need to worry about exports being a promise here.
    const raw = module.exports;
    return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
}
// Add a simple runtime require so that environments without one can still pass
// `typeof require` CommonJS checks so that exports are correctly registered.
const runtimeRequire = typeof require === "function" ? require : function require1() {
    throw new Error("Unexpected use of runtime require");
};
function commonJsRequire(sourceModule, id) {
    const module = getOrInstantiateModuleFromParent(id, sourceModule);
    if (module.error) throw module.error;
    return module.exports;
}
/**
 * `require.context` and require/import expression runtime.
 */ function moduleContext(map) {
    function moduleContext(id) {
        if (hasOwnProperty.call(map, id)) {
            return map[id].module();
        }
        const e = new Error(`Cannot find module '${name}'`);
        e.code = "MODULE_NOT_FOUND";
        throw e;
    }
    moduleContext.keys = ()=>{
        return Object.keys(map);
    };
    moduleContext.resolve = (id)=>{
        if (hasOwnProperty.call(map, id)) {
            return map[id].id();
        }
        const e = new Error(`Cannot find module '${name}'`);
        e.code = "MODULE_NOT_FOUND";
        throw e;
    };
    moduleContext.import = async (id)=>{
        return await moduleContext(id);
    };
    return moduleContext;
}
/**
 * Returns the path of a chunk defined by its data.
 */ function getChunkPath(chunkData) {
    return typeof chunkData === "string" ? chunkData : chunkData.path;
}
function isPromise(maybePromise) {
    return maybePromise != null && typeof maybePromise === "object" && "then" in maybePromise && typeof maybePromise.then === "function";
}
function isAsyncModuleExt(obj) {
    return turbopackQueues in obj;
}
function createPromise() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        reject = rej;
        resolve = res;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
}
// everything below is adapted from webpack
// https://github.com/webpack/webpack/blob/6be4065ade1e252c1d8dcba4af0f43e32af1bdc1/lib/runtime/AsyncModuleRuntimeModule.js#L13
const turbopackQueues = Symbol("turbopack queues");
const turbopackExports = Symbol("turbopack exports");
const turbopackError = Symbol("turbopack error");
function resolveQueue(queue) {
    if (queue && !queue.resolved) {
        queue.resolved = true;
        queue.forEach((fn)=>fn.queueCount--);
        queue.forEach((fn)=>fn.queueCount-- ? fn.queueCount++ : fn());
    }
}
function wrapDeps(deps) {
    return deps.map((dep)=>{
        if (dep !== null && typeof dep === "object") {
            if (isAsyncModuleExt(dep)) return dep;
            if (isPromise(dep)) {
                const queue = Object.assign([], {
                    resolved: false
                });
                const obj = {
                    [turbopackExports]: {},
                    [turbopackQueues]: (fn)=>fn(queue)
                };
                dep.then((res)=>{
                    obj[turbopackExports] = res;
                    resolveQueue(queue);
                }, (err)=>{
                    obj[turbopackError] = err;
                    resolveQueue(queue);
                });
                return obj;
            }
        }
        const ret = {
            [turbopackExports]: dep,
            [turbopackQueues]: ()=>{}
        };
        return ret;
    });
}
function asyncModule(module, body, hasAwait) {
    const queue = hasAwait ? Object.assign([], {
        resolved: true
    }) : undefined;
    const depQueues = new Set();
    ensureDynamicExports(module, module.exports);
    const exports = module.exports;
    const { resolve, reject, promise: rawPromise } = createPromise();
    const promise = Object.assign(rawPromise, {
        [turbopackExports]: exports,
        [turbopackQueues]: (fn)=>{
            queue && fn(queue);
            depQueues.forEach(fn);
            promise["catch"](()=>{});
        }
    });
    module.exports = module.namespaceObject = promise;
    function handleAsyncDependencies(deps) {
        const currentDeps = wrapDeps(deps);
        const getResult = ()=>currentDeps.map((d)=>{
                if (d[turbopackError]) throw d[turbopackError];
                return d[turbopackExports];
            });
        const { promise, resolve } = createPromise();
        const fn = Object.assign(()=>resolve(getResult), {
            queueCount: 0
        });
        function fnQueue(q) {
            if (q !== queue && !depQueues.has(q)) {
                depQueues.add(q);
                if (q && !q.resolved) {
                    fn.queueCount++;
                    q.push(fn);
                }
            }
        }
        currentDeps.map((dep)=>dep[turbopackQueues](fnQueue));
        return fn.queueCount ? promise : getResult();
    }
    function asyncResult(err) {
        if (err) {
            reject(promise[turbopackError] = err);
        } else {
            resolve(exports);
        }
        resolveQueue(queue);
    }
    body(handleAsyncDependencies, asyncResult);
    if (queue) {
        queue.resolved = false;
    }
}
/**
 * A pseudo "fake" URL object to resolve to its relative path.
 *
 * When UrlRewriteBehavior is set to relative, calls to the `new URL()` will construct url without base using this
 * runtime function to generate context-agnostic urls between different rendering context, i.e ssr / client to avoid
 * hydration mismatch.
 *
 * This is based on webpack's existing implementation:
 * https://github.com/webpack/webpack/blob/87660921808566ef3b8796f8df61bd79fc026108/lib/runtime/RelativeUrlRuntimeModule.js
 */ const relativeURL = function relativeURL(inputUrl) {
    const realUrl = new URL(inputUrl, "x:/");
    const values = {};
    for(const key in realUrl)values[key] = realUrl[key];
    values.href = inputUrl;
    values.pathname = inputUrl.replace(/[?#].*/, "");
    values.origin = values.protocol = "";
    values.toString = values.toJSON = (..._args)=>inputUrl;
    for(const key in values)Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        value: values[key]
    });
};
relativeURL.prototype = URL.prototype;
/**
 * This file contains runtime types and functions that are shared between all
 * Turbopack *development* ECMAScript runtimes.
 *
 * It will be appended to the runtime code of each runtime right after the
 * shared runtime utils.
 */ /* eslint-disable @next/next/no-assign-module-variable */ /// <reference path="../../../shared/runtime-utils.ts" />
/// <reference path="./globals.d.ts" />
/// <reference path="./protocol.d.ts" />
/// <reference path="./extensions.d.ts" />
// This file must not use `import` and `export` statements. Otherwise, it
// becomes impossible to augment interfaces declared in `<reference>`d files
// (e.g. `Module`). Hence, the need for `import()` here.
let SourceType;
(function(SourceType) {
    /**
   * The module was instantiated because it was included in an evaluated chunk's
   * runtime.
   */ SourceType[SourceType["Runtime"] = 0] = "Runtime";
    /**
   * The module was instantiated because a parent module imported it.
   */ SourceType[SourceType["Parent"] = 1] = "Parent";
    /**
   * The module was instantiated because it was included in a chunk's hot module
   * update.
   */ SourceType[SourceType["Update"] = 2] = "Update";
})(SourceType || (SourceType = {}));
class UpdateApplyError extends Error {
    name = "UpdateApplyError";
    dependencyChain;
    constructor(message, dependencyChain){
        super(message);
        this.dependencyChain = dependencyChain;
    }
}
const moduleFactories = Object.create(null);
const moduleCache = Object.create(null);
/**
 * Maps module IDs to persisted data between executions of their hot module
 * implementation (`hot.data`).
 */ const moduleHotData = new Map();
/**
 * Maps module instances to their hot module state.
 */ const moduleHotState = new Map();
/**
 * Modules that call `module.hot.invalidate()` (while being updated).
 */ const queuedInvalidatedModules = new Set();
/**
 * Module IDs that are instantiated as part of the runtime of a chunk.
 */ const runtimeModules = new Set();
/**
 * Map from module ID to the chunks that contain this module.
 *
 * In HMR, we need to keep track of which modules are contained in which so
 * chunks. This is so we don't eagerly dispose of a module when it is removed
 * from chunk A, but still exists in chunk B.
 */ const moduleChunksMap = new Map();
/**
 * Map from a chunk path to all modules it contains.
 */ const chunkModulesMap = new Map();
/**
 * Chunk lists that contain a runtime. When these chunk lists receive an update
 * that can't be reconciled with the current state of the page, we need to
 * reload the runtime entirely.
 */ const runtimeChunkLists = new Set();
/**
 * Map from a chunk list to the chunk paths it contains.
 */ const chunkListChunksMap = new Map();
/**
 * Map from a chunk path to the chunk lists it belongs to.
 */ const chunkChunkListsMap = new Map();
const availableModules = new Map();
const availableModuleChunks = new Map();
async function loadChunk(source, chunkData) {
    if (typeof chunkData === "string") {
        return loadChunkPath(source, chunkData);
    }
    const includedList = chunkData.included || [];
    const modulesPromises = includedList.map((included)=>{
        if (moduleFactories[included]) return true;
        return availableModules.get(included);
    });
    if (modulesPromises.length > 0 && modulesPromises.every((p)=>p)) {
        // When all included items are already loaded or loading, we can skip loading ourselves
        return Promise.all(modulesPromises);
    }
    const includedModuleChunksList = chunkData.moduleChunks || [];
    const moduleChunksPromises = includedModuleChunksList.map((included)=>{
        // TODO(alexkirsz) Do we need this check?
        // if (moduleFactories[included]) return true;
        return availableModuleChunks.get(included);
    }).filter((p)=>p);
    let promise;
    if (moduleChunksPromises.length > 0) {
        // Some module chunks are already loaded or loading.
        if (moduleChunksPromises.length == includedModuleChunksList.length) {
            // When all included module chunks are already loaded or loading, we can skip loading ourselves
            return Promise.all(moduleChunksPromises);
        }
        const moduleChunksToLoad = new Set();
        for (const moduleChunk of includedModuleChunksList){
            if (!availableModuleChunks.has(moduleChunk)) {
                moduleChunksToLoad.add(moduleChunk);
            }
        }
        for (const moduleChunkToLoad of moduleChunksToLoad){
            const promise = loadChunkPath(source, moduleChunkToLoad);
            availableModuleChunks.set(moduleChunkToLoad, promise);
            moduleChunksPromises.push(promise);
        }
        promise = Promise.all(moduleChunksPromises);
    } else {
        promise = loadChunkPath(source, chunkData.path);
        // Mark all included module chunks as loading if they are not already loaded or loading.
        for (const includedModuleChunk of includedModuleChunksList){
            if (!availableModuleChunks.has(includedModuleChunk)) {
                availableModuleChunks.set(includedModuleChunk, promise);
            }
        }
    }
    for (const included of includedList){
        if (!availableModules.has(included)) {
            // It might be better to race old and new promises, but it's rare that the new promise will be faster than a request started earlier.
            // In production it's even more rare, because the chunk optimization tries to deduplicate modules anyway.
            availableModules.set(included, promise);
        }
    }
    return promise;
}
async function loadChunkPath(source, chunkPath) {
    try {
        await BACKEND.loadChunk(chunkPath, source);
    } catch (error) {
        let loadReason;
        switch(source.type){
            case 0:
                loadReason = `as a runtime dependency of chunk ${source.chunkPath}`;
                break;
            case 1:
                loadReason = `from module ${source.parentId}`;
                break;
            case 2:
                loadReason = "from an HMR update";
                break;
        }
        throw new Error(`Failed to load chunk ${chunkPath} ${loadReason}${error ? `: ${error}` : ""}`, error ? {
            cause: error
        } : undefined);
    }
}
/**
 * Returns an absolute url to an asset.
 */ function createResolvePathFromModule(resolver) {
    return function resolvePathFromModule(moduleId) {
        const exported = resolver(moduleId);
        return exported?.default ?? exported;
    };
}
function instantiateModule(id, source) {
    const moduleFactory = moduleFactories[id];
    if (typeof moduleFactory !== "function") {
        // This can happen if modules incorrectly handle HMR disposes/updates,
        // e.g. when they keep a `setTimeout` around which still executes old code
        // and contains e.g. a `require("something")` call.
        let instantiationReason;
        switch(source.type){
            case 0:
                instantiationReason = `as a runtime entry of chunk ${source.chunkPath}`;
                break;
            case 1:
                instantiationReason = `because it was required from module ${source.parentId}`;
                break;
            case 2:
                instantiationReason = "because of an HMR update";
                break;
        }
        throw new Error(`Module ${id} was instantiated ${instantiationReason}, but the module factory is not available. It might have been deleted in an HMR update.`);
    }
    const hotData = moduleHotData.get(id);
    const { hot, hotState } = createModuleHot(id, hotData);
    let parents;
    switch(source.type){
        case 0:
            runtimeModules.add(id);
            parents = [];
            break;
        case 1:
            // No need to add this module as a child of the parent module here, this
            // has already been taken care of in `getOrInstantiateModuleFromParent`.
            parents = [
                source.parentId
            ];
            break;
        case 2:
            parents = source.parents || [];
            break;
    }
    const module = {
        exports: {},
        error: undefined,
        loaded: false,
        id,
        parents,
        children: [],
        namespaceObject: undefined,
        hot
    };
    moduleCache[id] = module;
    moduleHotState.set(module, hotState);
    // NOTE(alexkirsz) This can fail when the module encounters a runtime error.
    try {
        const sourceInfo = {
            type: 1,
            parentId: id
        };
        runModuleExecutionHooks(module, (refresh)=>{
            const r = commonJsRequire.bind(null, module);
            moduleFactory.call(module.exports, augmentContext({
                a: asyncModule.bind(null, module),
                e: module.exports,
                r: commonJsRequire.bind(null, module),
                t: runtimeRequire,
                f: moduleContext,
                i: esmImport.bind(null, module),
                s: esmExport.bind(null, module, module.exports),
                j: dynamicExport.bind(null, module, module.exports),
                v: exportValue.bind(null, module),
                n: exportNamespace.bind(null, module),
                m: module,
                c: moduleCache,
                M: moduleFactories,
                l: loadChunk.bind(null, sourceInfo),
                w: loadWebAssembly.bind(null, sourceInfo),
                u: loadWebAssemblyModule.bind(null, sourceInfo),
                g: globalThis,
                U: relativeURL,
                k: refresh,
                R: createResolvePathFromModule(r),
                __dirname: module.id.replace(/(^|\/)\/+$/, "")
            }));
        });
    } catch (error) {
        module.error = error;
        throw error;
    }
    module.loaded = true;
    if (module.namespaceObject && module.exports !== module.namespaceObject) {
        // in case of a circular dependency: cjs1 -> esm2 -> cjs1
        interopEsm(module.exports, module.namespaceObject);
    }
    return module;
}
/**
 * NOTE(alexkirsz) Webpack has a "module execution" interception hook that
 * Next.js' React Refresh runtime hooks into to add module context to the
 * refresh registry.
 */ function runModuleExecutionHooks(module, executeModule) {
    const cleanupReactRefreshIntercept = typeof globalThis.$RefreshInterceptModuleExecution$ === "function" ? globalThis.$RefreshInterceptModuleExecution$(module.id) : ()=>{};
    try {
        executeModule({
            register: globalThis.$RefreshReg$,
            signature: globalThis.$RefreshSig$
        });
        if ("$RefreshHelpers$" in globalThis) {
            // This pattern can also be used to register the exports of
            // a module with the React Refresh runtime.
            registerExportsAndSetupBoundaryForReactRefresh(module, globalThis.$RefreshHelpers$);
        }
    } catch (e) {
        throw e;
    } finally{
        // Always cleanup the intercept, even if module execution failed.
        cleanupReactRefreshIntercept();
    }
}
/**
 * Retrieves a module from the cache, or instantiate it if it is not cached.
 */ const getOrInstantiateModuleFromParent = (id, sourceModule)=>{
    if (!sourceModule.hot.active) {
        console.warn(`Unexpected import of module ${id} from module ${sourceModule.id}, which was deleted by an HMR update`);
    }
    const module = moduleCache[id];
    if (sourceModule.children.indexOf(id) === -1) {
        sourceModule.children.push(id);
    }
    if (module) {
        if (module.parents.indexOf(sourceModule.id) === -1) {
            module.parents.push(sourceModule.id);
        }
        return module;
    }
    return instantiateModule(id, {
        type: 1,
        parentId: sourceModule.id
    });
};
/**
 * This is adapted from https://github.com/vercel/next.js/blob/3466862d9dc9c8bb3131712134d38757b918d1c0/packages/react-refresh-utils/internal/ReactRefreshModule.runtime.ts
 */ function registerExportsAndSetupBoundaryForReactRefresh(module, helpers) {
    const currentExports = module.exports;
    const prevExports = module.hot.data.prevExports ?? null;
    helpers.registerExportsForReactRefresh(currentExports, module.id);
    // A module can be accepted automatically based on its exports, e.g. when
    // it is a Refresh Boundary.
    if (helpers.isReactRefreshBoundary(currentExports)) {
        // Save the previous exports on update, so we can compare the boundary
        // signatures.
        module.hot.dispose((data)=>{
            data.prevExports = currentExports;
        });
        // Unconditionally accept an update to this module, we'll check if it's
        // still a Refresh Boundary later.
        module.hot.accept();
        // This field is set when the previous version of this module was a
        // Refresh Boundary, letting us know we need to check for invalidation or
        // enqueue an update.
        if (prevExports !== null) {
            // A boundary can become ineligible if its exports are incompatible
            // with the previous exports.
            //
            // For example, if you add/remove/change exports, we'll want to
            // re-execute the importing modules, and force those components to
            // re-render. Similarly, if you convert a class component to a
            // function, we want to invalidate the boundary.
            if (helpers.shouldInvalidateReactRefreshBoundary(helpers.getRefreshBoundarySignature(prevExports), helpers.getRefreshBoundarySignature(currentExports))) {
                module.hot.invalidate();
            } else {
                helpers.scheduleUpdate();
            }
        }
    } else {
        // Since we just executed the code for the module, it's possible that the
        // new exports made it ineligible for being a boundary.
        // We only care about the case when we were _previously_ a boundary,
        // because we already accepted this update (accidental side effect).
        const isNoLongerABoundary = prevExports !== null;
        if (isNoLongerABoundary) {
            module.hot.invalidate();
        }
    }
}
function formatDependencyChain(dependencyChain) {
    return `Dependency chain: ${dependencyChain.join(" -> ")}`;
}
function computeOutdatedModules(added, modified) {
    const newModuleFactories = new Map();
    for (const [moduleId, entry] of added){
        if (entry != null) {
            newModuleFactories.set(moduleId, _eval(entry));
        }
    }
    const outdatedModules = computedInvalidatedModules(modified.keys());
    for (const [moduleId, entry] of modified){
        newModuleFactories.set(moduleId, _eval(entry));
    }
    return {
        outdatedModules,
        newModuleFactories
    };
}
function computedInvalidatedModules(invalidated) {
    const outdatedModules = new Set();
    for (const moduleId of invalidated){
        const effect = getAffectedModuleEffects(moduleId);
        switch(effect.type){
            case "unaccepted":
                throw new UpdateApplyError(`cannot apply update: unaccepted module. ${formatDependencyChain(effect.dependencyChain)}.`, effect.dependencyChain);
            case "self-declined":
                throw new UpdateApplyError(`cannot apply update: self-declined module. ${formatDependencyChain(effect.dependencyChain)}.`, effect.dependencyChain);
            case "accepted":
                for (const outdatedModuleId of effect.outdatedModules){
                    outdatedModules.add(outdatedModuleId);
                }
                break;
        }
    }
    return outdatedModules;
}
function computeOutdatedSelfAcceptedModules(outdatedModules) {
    const outdatedSelfAcceptedModules = [];
    for (const moduleId of outdatedModules){
        const module = moduleCache[moduleId];
        const hotState = moduleHotState.get(module);
        if (module && hotState.selfAccepted && !hotState.selfInvalidated) {
            outdatedSelfAcceptedModules.push({
                moduleId,
                errorHandler: hotState.selfAccepted
            });
        }
    }
    return outdatedSelfAcceptedModules;
}
/**
 * Adds, deletes, and moves modules between chunks. This must happen before the
 * dispose phase as it needs to know which modules were removed from all chunks,
 * which we can only compute *after* taking care of added and moved modules.
 */ function updateChunksPhase(chunksAddedModules, chunksDeletedModules) {
    for (const [chunkPath, addedModuleIds] of chunksAddedModules){
        for (const moduleId of addedModuleIds){
            addModuleToChunk(moduleId, chunkPath);
        }
    }
    const disposedModules = new Set();
    for (const [chunkPath, addedModuleIds] of chunksDeletedModules){
        for (const moduleId of addedModuleIds){
            if (removeModuleFromChunk(moduleId, chunkPath)) {
                disposedModules.add(moduleId);
            }
        }
    }
    return {
        disposedModules
    };
}
function disposePhase(outdatedModules, disposedModules) {
    for (const moduleId of outdatedModules){
        disposeModule(moduleId, "replace");
    }
    for (const moduleId of disposedModules){
        disposeModule(moduleId, "clear");
    }
    // Removing modules from the module cache is a separate step.
    // We also want to keep track of previous parents of the outdated modules.
    const outdatedModuleParents = new Map();
    for (const moduleId of outdatedModules){
        const oldModule = moduleCache[moduleId];
        outdatedModuleParents.set(moduleId, oldModule?.parents);
        delete moduleCache[moduleId];
    }
    // TODO(alexkirsz) Dependencies: remove outdated dependency from module
    // children.
    return {
        outdatedModuleParents
    };
}
/**
 * Disposes of an instance of a module.
 *
 * Returns the persistent hot data that should be kept for the next module
 * instance.
 *
 * NOTE: mode = "replace" will not remove modules from the moduleCache.
 * This must be done in a separate step afterwards.
 * This is important because all modules need to be disposed to update the
 * parent/child relationships before they are actually removed from the moduleCache.
 * If this was done in this method, the following disposeModule calls won't find
 * the module from the module id in the cache.
 */ function disposeModule(moduleId, mode) {
    const module = moduleCache[moduleId];
    if (!module) {
        return;
    }
    const hotState = moduleHotState.get(module);
    const data = {};
    // Run the `hot.dispose` handler, if any, passing in the persistent
    // `hot.data` object.
    for (const disposeHandler of hotState.disposeHandlers){
        disposeHandler(data);
    }
    // This used to warn in `getOrInstantiateModuleFromParent` when a disposed
    // module is still importing other modules.
    module.hot.active = false;
    moduleHotState.delete(module);
    // TODO(alexkirsz) Dependencies: delete the module from outdated deps.
    // Remove the disposed module from its children's parent list.
    // It will be added back once the module re-instantiates and imports its
    // children again.
    for (const childId of module.children){
        const child = moduleCache[childId];
        if (!child) {
            continue;
        }
        const idx = child.parents.indexOf(module.id);
        if (idx >= 0) {
            child.parents.splice(idx, 1);
        }
    }
    switch(mode){
        case "clear":
            delete moduleCache[module.id];
            moduleHotData.delete(module.id);
            break;
        case "replace":
            moduleHotData.set(module.id, data);
            break;
        default:
            invariant(mode, (mode)=>`invalid mode: ${mode}`);
    }
}
function applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, reportError) {
    // Update module factories.
    for (const [moduleId, factory] of newModuleFactories.entries()){
        moduleFactories[moduleId] = factory;
    }
    // TODO(alexkirsz) Run new runtime entries here.
    // TODO(alexkirsz) Dependencies: call accept handlers for outdated deps.
    // Re-instantiate all outdated self-accepted modules.
    for (const { moduleId, errorHandler } of outdatedSelfAcceptedModules){
        try {
            instantiateModule(moduleId, {
                type: 2,
                parents: outdatedModuleParents.get(moduleId)
            });
        } catch (err) {
            if (typeof errorHandler === "function") {
                try {
                    errorHandler(err, {
                        moduleId,
                        module: moduleCache[moduleId]
                    });
                } catch (err2) {
                    reportError(err2);
                    reportError(err);
                }
            } else {
                reportError(err);
            }
        }
    }
}
/**
 * Utility function to ensure all variants of an enum are handled.
 */ function invariant(never, computeMessage) {
    throw new Error(`Invariant: ${computeMessage(never)}`);
}
function applyUpdate(update) {
    switch(update.type){
        case "ChunkListUpdate":
            applyChunkListUpdate(update);
            break;
        default:
            invariant(update, (update)=>`Unknown update type: ${update.type}`);
    }
}
function applyChunkListUpdate(update) {
    if (update.merged != null) {
        for (const merged of update.merged){
            switch(merged.type){
                case "EcmascriptMergedUpdate":
                    applyEcmascriptMergedUpdate(merged);
                    break;
                default:
                    invariant(merged, (merged)=>`Unknown merged type: ${merged.type}`);
            }
        }
    }
    if (update.chunks != null) {
        for (const [chunkPath, chunkUpdate] of Object.entries(update.chunks)){
            switch(chunkUpdate.type){
                case "added":
                    BACKEND.loadChunk(chunkPath, {
                        type: 2
                    });
                    break;
                case "total":
                    BACKEND.reloadChunk?.(chunkPath);
                    break;
                case "deleted":
                    BACKEND.unloadChunk?.(chunkPath);
                    break;
                case "partial":
                    invariant(chunkUpdate.instruction, (instruction)=>`Unknown partial instruction: ${JSON.stringify(instruction)}.`);
                default:
                    invariant(chunkUpdate, (chunkUpdate)=>`Unknown chunk update type: ${chunkUpdate.type}`);
            }
        }
    }
}
function applyEcmascriptMergedUpdate(update) {
    const { entries = {}, chunks = {} } = update;
    const { added, modified, chunksAdded, chunksDeleted } = computeChangedModules(entries, chunks);
    const { outdatedModules, newModuleFactories } = computeOutdatedModules(added, modified);
    const { disposedModules } = updateChunksPhase(chunksAdded, chunksDeleted);
    applyInternal(outdatedModules, disposedModules, newModuleFactories);
}
function applyInvalidatedModules(outdatedModules) {
    if (queuedInvalidatedModules.size > 0) {
        computedInvalidatedModules(queuedInvalidatedModules).forEach((moduleId)=>{
            outdatedModules.add(moduleId);
        });
        queuedInvalidatedModules.clear();
    }
    return outdatedModules;
}
function applyInternal(outdatedModules, disposedModules, newModuleFactories) {
    outdatedModules = applyInvalidatedModules(outdatedModules);
    const outdatedSelfAcceptedModules = computeOutdatedSelfAcceptedModules(outdatedModules);
    const { outdatedModuleParents } = disposePhase(outdatedModules, disposedModules);
    // we want to continue on error and only throw the error after we tried applying all updates
    let error;
    function reportError(err) {
        if (!error) error = err;
    }
    applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, reportError);
    if (error) {
        throw error;
    }
    if (queuedInvalidatedModules.size > 0) {
        applyInternal(new Set(), [], new Map());
    }
}
function computeChangedModules(entries, updates) {
    const chunksAdded = new Map();
    const chunksDeleted = new Map();
    const added = new Map();
    const modified = new Map();
    const deleted = new Set();
    for (const [chunkPath, mergedChunkUpdate] of Object.entries(updates)){
        switch(mergedChunkUpdate.type){
            case "added":
                {
                    const updateAdded = new Set(mergedChunkUpdate.modules);
                    for (const moduleId of updateAdded){
                        added.set(moduleId, entries[moduleId]);
                    }
                    chunksAdded.set(chunkPath, updateAdded);
                    break;
                }
            case "deleted":
                {
                    // We could also use `mergedChunkUpdate.modules` here.
                    const updateDeleted = new Set(chunkModulesMap.get(chunkPath));
                    for (const moduleId of updateDeleted){
                        deleted.add(moduleId);
                    }
                    chunksDeleted.set(chunkPath, updateDeleted);
                    break;
                }
            case "partial":
                {
                    const updateAdded = new Set(mergedChunkUpdate.added);
                    const updateDeleted = new Set(mergedChunkUpdate.deleted);
                    for (const moduleId of updateAdded){
                        added.set(moduleId, entries[moduleId]);
                    }
                    for (const moduleId of updateDeleted){
                        deleted.add(moduleId);
                    }
                    chunksAdded.set(chunkPath, updateAdded);
                    chunksDeleted.set(chunkPath, updateDeleted);
                    break;
                }
            default:
                invariant(mergedChunkUpdate, (mergedChunkUpdate)=>`Unknown merged chunk update type: ${mergedChunkUpdate.type}`);
        }
    }
    // If a module was added from one chunk and deleted from another in the same update,
    // consider it to be modified, as it means the module was moved from one chunk to another
    // AND has new code in a single update.
    for (const moduleId of added.keys()){
        if (deleted.has(moduleId)) {
            added.delete(moduleId);
            deleted.delete(moduleId);
        }
    }
    for (const [moduleId, entry] of Object.entries(entries)){
        // Modules that haven't been added to any chunk but have new code are considered
        // to be modified.
        // This needs to be under the previous loop, as we need it to get rid of modules
        // that were added and deleted in the same update.
        if (!added.has(moduleId)) {
            modified.set(moduleId, entry);
        }
    }
    return {
        added,
        deleted,
        modified,
        chunksAdded,
        chunksDeleted
    };
}
function getAffectedModuleEffects(moduleId) {
    const outdatedModules = new Set();
    const queue = [
        {
            moduleId,
            dependencyChain: []
        }
    ];
    let nextItem;
    while(nextItem = queue.shift()){
        const { moduleId, dependencyChain } = nextItem;
        if (moduleId != null) {
            outdatedModules.add(moduleId);
        }
        // We've arrived at the runtime of the chunk, which means that nothing
        // else above can accept this update.
        if (moduleId === undefined) {
            return {
                type: "unaccepted",
                dependencyChain
            };
        }
        const module = moduleCache[moduleId];
        const hotState = moduleHotState.get(module);
        if (// The module is not in the cache. Since this is a "modified" update,
        // it means that the module was never instantiated before.
        !module || hotState.selfAccepted && !hotState.selfInvalidated) {
            continue;
        }
        if (hotState.selfDeclined) {
            return {
                type: "self-declined",
                dependencyChain,
                moduleId
            };
        }
        if (runtimeModules.has(moduleId)) {
            queue.push({
                moduleId: undefined,
                dependencyChain: [
                    ...dependencyChain,
                    moduleId
                ]
            });
            continue;
        }
        for (const parentId of module.parents){
            const parent = moduleCache[parentId];
            if (!parent) {
                continue;
            }
            // TODO(alexkirsz) Dependencies: check accepted and declined
            // dependencies here.
            queue.push({
                moduleId: parentId,
                dependencyChain: [
                    ...dependencyChain,
                    moduleId
                ]
            });
        }
    }
    return {
        type: "accepted",
        moduleId,
        outdatedModules
    };
}
function handleApply(chunkListPath, update) {
    switch(update.type){
        case "partial":
            {
                // This indicates that the update is can be applied to the current state of the application.
                applyUpdate(update.instruction);
                break;
            }
        case "restart":
            {
                // This indicates that there is no way to apply the update to the
                // current state of the application, and that the application must be
                // restarted.
                BACKEND.restart();
                break;
            }
        case "notFound":
            {
                // This indicates that the chunk list no longer exists: either the dynamic import which created it was removed,
                // or the page itself was deleted.
                // If it is a dynamic import, we simply discard all modules that the chunk has exclusive access to.
                // If it is a runtime chunk list, we restart the application.
                if (runtimeChunkLists.has(chunkListPath)) {
                    BACKEND.restart();
                } else {
                    disposeChunkList(chunkListPath);
                }
                break;
            }
        default:
            throw new Error(`Unknown update type: ${update.type}`);
    }
}
function createModuleHot(moduleId, hotData) {
    const hotState = {
        selfAccepted: false,
        selfDeclined: false,
        selfInvalidated: false,
        disposeHandlers: []
    };
    const hot = {
        // TODO(alexkirsz) This is not defined in the HMR API. It was used to
        // decide whether to warn whenever an HMR-disposed module required other
        // modules. We might want to remove it.
        active: true,
        data: hotData ?? {},
        // TODO(alexkirsz) Support full (dep, callback, errorHandler) form.
        accept: (modules, _callback, _errorHandler)=>{
            if (modules === undefined) {
                hotState.selfAccepted = true;
            } else if (typeof modules === "function") {
                hotState.selfAccepted = modules;
            } else {
                throw new Error("unsupported `accept` signature");
            }
        },
        decline: (dep)=>{
            if (dep === undefined) {
                hotState.selfDeclined = true;
            } else {
                throw new Error("unsupported `decline` signature");
            }
        },
        dispose: (callback)=>{
            hotState.disposeHandlers.push(callback);
        },
        addDisposeHandler: (callback)=>{
            hotState.disposeHandlers.push(callback);
        },
        removeDisposeHandler: (callback)=>{
            const idx = hotState.disposeHandlers.indexOf(callback);
            if (idx >= 0) {
                hotState.disposeHandlers.splice(idx, 1);
            }
        },
        invalidate: ()=>{
            hotState.selfInvalidated = true;
            queuedInvalidatedModules.add(moduleId);
        },
        // NOTE(alexkirsz) This is part of the management API, which we don't
        // implement, but the Next.js React Refresh runtime uses this to decide
        // whether to schedule an update.
        status: ()=>"idle",
        // NOTE(alexkirsz) Since we always return "idle" for now, these are no-ops.
        addStatusHandler: (_handler)=>{},
        removeStatusHandler: (_handler)=>{},
        // NOTE(jridgewell) Check returns the list of updated modules, but we don't
        // want the webpack code paths to ever update (the turbopack paths handle
        // this already).
        check: ()=>Promise.resolve(null)
    };
    return {
        hot,
        hotState
    };
}
/**
 * Adds a module to a chunk.
 */ function addModuleToChunk(moduleId, chunkPath) {
    let moduleChunks = moduleChunksMap.get(moduleId);
    if (!moduleChunks) {
        moduleChunks = new Set([
            chunkPath
        ]);
        moduleChunksMap.set(moduleId, moduleChunks);
    } else {
        moduleChunks.add(chunkPath);
    }
    let chunkModules = chunkModulesMap.get(chunkPath);
    if (!chunkModules) {
        chunkModules = new Set([
            moduleId
        ]);
        chunkModulesMap.set(chunkPath, chunkModules);
    } else {
        chunkModules.add(moduleId);
    }
}
/**
 * Returns the first chunk that included a module.
 * This is used by the Node.js backend, hence why it's marked as unused in this
 * file.
 */ function getFirstModuleChunk(moduleId) {
    const moduleChunkPaths = moduleChunksMap.get(moduleId);
    if (moduleChunkPaths == null) {
        return null;
    }
    return moduleChunkPaths.values().next().value;
}
/**
 * Removes a module from a chunk.
 * Returns `true` if there are no remaining chunks including this module.
 */ function removeModuleFromChunk(moduleId, chunkPath) {
    const moduleChunks = moduleChunksMap.get(moduleId);
    moduleChunks.delete(chunkPath);
    const chunkModules = chunkModulesMap.get(chunkPath);
    chunkModules.delete(moduleId);
    const noRemainingModules = chunkModules.size === 0;
    if (noRemainingModules) {
        chunkModulesMap.delete(chunkPath);
    }
    const noRemainingChunks = moduleChunks.size === 0;
    if (noRemainingChunks) {
        moduleChunksMap.delete(moduleId);
    }
    return noRemainingChunks;
}
/**
 * Disposes of a chunk list and its corresponding exclusive chunks.
 */ function disposeChunkList(chunkListPath) {
    const chunkPaths = chunkListChunksMap.get(chunkListPath);
    if (chunkPaths == null) {
        return false;
    }
    chunkListChunksMap.delete(chunkListPath);
    for (const chunkPath of chunkPaths){
        const chunkChunkLists = chunkChunkListsMap.get(chunkPath);
        chunkChunkLists.delete(chunkListPath);
        if (chunkChunkLists.size === 0) {
            chunkChunkListsMap.delete(chunkPath);
            disposeChunk(chunkPath);
        }
    }
    // We must also dispose of the chunk list's chunk itself to ensure it may
    // be reloaded properly in the future.
    BACKEND.unloadChunk?.(chunkListPath);
    return true;
}
/**
 * Disposes of a chunk and its corresponding exclusive modules.
 *
 * @returns Whether the chunk was disposed of.
 */ function disposeChunk(chunkPath) {
    // This should happen whether the chunk has any modules in it or not.
    // For instance, CSS chunks have no modules in them, but they still need to be unloaded.
    BACKEND.unloadChunk?.(chunkPath);
    const chunkModules = chunkModulesMap.get(chunkPath);
    if (chunkModules == null) {
        return false;
    }
    chunkModules.delete(chunkPath);
    for (const moduleId of chunkModules){
        const moduleChunks = moduleChunksMap.get(moduleId);
        moduleChunks.delete(chunkPath);
        const noRemainingChunks = moduleChunks.size === 0;
        if (noRemainingChunks) {
            moduleChunksMap.delete(moduleId);
            disposeModule(moduleId, "clear");
            availableModules.delete(moduleId);
        }
    }
    return true;
}
/**
 * Instantiates a runtime module.
 */ function instantiateRuntimeModule(moduleId, chunkPath) {
    return instantiateModule(moduleId, {
        type: 0,
        chunkPath
    });
}
/**
 * Gets or instantiates a runtime module.
 */ function getOrInstantiateRuntimeModule(moduleId, chunkPath) {
    const module = moduleCache[moduleId];
    if (module) {
        if (module.error) {
            throw module.error;
        }
        return module;
    }
    return instantiateModule(moduleId, {
        type: 0,
        chunkPath
    });
}
/**
 * Returns the URL relative to the origin where a chunk can be fetched from.
 */ function getChunkRelativeUrl(chunkPath) {
    return `${CHUNK_BASE_PATH}${chunkPath.split("/").map((p)=>encodeURIComponent(p)).join("/")}`;
}
/**
 * Subscribes to chunk list updates from the update server and applies them.
 */ function registerChunkList(chunkUpdateProvider, chunkList) {
    chunkUpdateProvider.push([
        chunkList.path,
        handleApply.bind(null, chunkList.path)
    ]);
    // Adding chunks to chunk lists and vice versa.
    const chunks = new Set(chunkList.chunks.map(getChunkPath));
    chunkListChunksMap.set(chunkList.path, chunks);
    for (const chunkPath of chunks){
        let chunkChunkLists = chunkChunkListsMap.get(chunkPath);
        if (!chunkChunkLists) {
            chunkChunkLists = new Set([
                chunkList.path
            ]);
            chunkChunkListsMap.set(chunkPath, chunkChunkLists);
        } else {
            chunkChunkLists.add(chunkList.path);
        }
    }
    if (chunkList.source === "entry") {
        markChunkListAsRuntime(chunkList.path);
    }
}
/**
 * Marks a chunk list as a runtime chunk list. There can be more than one
 * runtime chunk list. For instance, integration tests can have multiple chunk
 * groups loaded at runtime, each with its own chunk list.
 */ function markChunkListAsRuntime(chunkListPath) {
    runtimeChunkLists.add(chunkListPath);
}
function registerChunk([chunkPath, chunkModules, runtimeParams]) {
    for (const [moduleId, moduleFactory] of Object.entries(chunkModules)){
        if (!moduleFactories[moduleId]) {
            moduleFactories[moduleId] = moduleFactory;
        }
        addModuleToChunk(moduleId, chunkPath);
    }
    return BACKEND.registerChunk(chunkPath, runtimeParams);
}
globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS ??= [];
const chunkListsToRegister = globalThis.TURBOPACK_CHUNK_LISTS;
if (Array.isArray(chunkListsToRegister)) {
    for (const chunkList of chunkListsToRegister){
        registerChunkList(globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS, chunkList);
    }
}
globalThis.TURBOPACK_CHUNK_LISTS = {
    push: (chunkList)=>{
        registerChunkList(globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS, chunkList);
    }
};
/**
 * This file contains the runtime code specific to the Turbopack development
 * ECMAScript DOM runtime.
 *
 * It will be appended to the base development runtime code.
 */ /// <reference path="../base/runtime-base.ts" />
/// <reference path="../../../shared/require-type.d.ts" />
let BACKEND;
function augmentContext(context) {
    return context;
}
function fetchWebAssembly(wasmChunkPath) {
    return fetch(getChunkRelativeUrl(wasmChunkPath));
}
async function loadWebAssembly(_source, wasmChunkPath, importsObj) {
    const req = fetchWebAssembly(wasmChunkPath);
    const { instance } = await WebAssembly.instantiateStreaming(req, importsObj);
    return instance.exports;
}
async function loadWebAssemblyModule(_source, wasmChunkPath) {
    const req = fetchWebAssembly(wasmChunkPath);
    return await WebAssembly.compileStreaming(req);
}
(()=>{
    BACKEND = {
        async registerChunk (chunkPath, params) {
            const resolver = getOrCreateResolver(chunkPath);
            resolver.resolve();
            if (params == null) {
                return;
            }
            for (const otherChunkData of params.otherChunks){
                const otherChunkPath = getChunkPath(otherChunkData);
                // Chunk might have started loading, so we want to avoid triggering another load.
                getOrCreateResolver(otherChunkPath);
            }
            // This waits for chunks to be loaded, but also marks included items as available.
            await Promise.all(params.otherChunks.map((otherChunkData)=>loadChunk({
                    type: SourceType.Runtime,
                    chunkPath
                }, otherChunkData)));
            if (params.runtimeModuleIds.length > 0) {
                for (const moduleId of params.runtimeModuleIds){
                    getOrInstantiateRuntimeModule(moduleId, chunkPath);
                }
            }
        },
        loadChunk (chunkPath, source) {
            return doLoadChunk(chunkPath, source);
        },
        unloadChunk (chunkPath) {
            deleteResolver(chunkPath);
            const chunkUrl = getChunkRelativeUrl(chunkPath);
            // TODO(PACK-2140): remove this once all filenames are guaranteed to be escaped.
            const decodedChunkUrl = decodeURI(chunkUrl);
            if (chunkPath.endsWith(".css")) {
                const links = document.querySelectorAll(`link[href="${chunkUrl}"],link[href^="${chunkUrl}?"],link[href="${decodedChunkUrl}"],link[href^="${decodedChunkUrl}?"]`);
                for (const link of Array.from(links)){
                    link.remove();
                }
            } else if (chunkPath.endsWith(".js")) {
                // Unloading a JS chunk would have no effect, as it lives in the JS
                // runtime once evaluated.
                // However, we still want to remove the script tag from the DOM to keep
                // the HTML somewhat consistent from the user's perspective.
                const scripts = document.querySelectorAll(`script[src="${chunkUrl}"],script[src^="${chunkUrl}?"],script[src="${decodedChunkUrl}"],script[src^="${decodedChunkUrl}?"]`);
                for (const script of Array.from(scripts)){
                    script.remove();
                }
            } else {
                throw new Error(`can't infer type of chunk from path ${chunkPath}`);
            }
        },
        reloadChunk (chunkPath) {
            return new Promise((resolve, reject)=>{
                if (!chunkPath.endsWith(".css")) {
                    reject(new Error("The DOM backend can only reload CSS chunks"));
                    return;
                }
                const chunkUrl = getChunkRelativeUrl(chunkPath);
                const decodedChunkUrl = decodeURI(chunkUrl);
                const previousLinks = document.querySelectorAll(`link[rel=stylesheet][href="${chunkUrl}"],link[rel=stylesheet][href^="${chunkUrl}?"],link[rel=stylesheet][href="${decodedChunkUrl}"],link[rel=stylesheet][href^="${decodedChunkUrl}?"]`);
                if (previousLinks.length == 0) {
                    reject(new Error(`No link element found for chunk ${chunkPath}`));
                    return;
                }
                const link = document.createElement("link");
                link.rel = "stylesheet";
                if (navigator.userAgent.includes("Firefox")) {
                    // Firefox won't reload CSS files that were previously loaded on the current page,
                    // we need to add a query param to make sure CSS is actually reloaded from the server.
                    //
                    // I believe this is this issue: https://bugzilla.mozilla.org/show_bug.cgi?id=1037506
                    //
                    // Safari has a similar issue, but only if you have a `<link rel=preload ... />` tag
                    // pointing to the same URL as the stylesheet: https://bugs.webkit.org/show_bug.cgi?id=187726
                    link.href = `${chunkUrl}?ts=${Date.now()}`;
                } else {
                    link.href = chunkUrl;
                }
                link.onerror = ()=>{
                    reject();
                };
                link.onload = ()=>{
                    // First load the new CSS, then remove the old ones. This prevents visible
                    // flickering that would happen in-between removing the previous CSS and
                    // loading the new one.
                    for (const previousLink of Array.from(previousLinks))previousLink.remove();
                    // CSS chunks do not register themselves, and as such must be marked as
                    // loaded instantly.
                    resolve();
                };
                // Make sure to insert the new CSS right after the previous one, so that
                // its precedence is higher.
                previousLinks[0].parentElement.insertBefore(link, previousLinks[0].nextSibling);
            });
        },
        restart: ()=>self.location.reload()
    };
    /**
   * Maps chunk paths to the corresponding resolver.
   */ const chunkResolvers = new Map();
    function getOrCreateResolver(chunkPath) {
        let resolver = chunkResolvers.get(chunkPath);
        if (!resolver) {
            let resolve;
            let reject;
            const promise = new Promise((innerResolve, innerReject)=>{
                resolve = innerResolve;
                reject = innerReject;
            });
            resolver = {
                resolved: false,
                promise,
                resolve: ()=>{
                    resolver.resolved = true;
                    resolve();
                },
                reject: reject
            };
            chunkResolvers.set(chunkPath, resolver);
        }
        return resolver;
    }
    function deleteResolver(chunkPath) {
        chunkResolvers.delete(chunkPath);
    }
    /**
   * Loads the given chunk, and returns a promise that resolves once the chunk
   * has been loaded.
   */ async function doLoadChunk(chunkPath, source) {
        const resolver = getOrCreateResolver(chunkPath);
        if (resolver.resolved) {
            return resolver.promise;
        }
        if (source.type === SourceType.Runtime) {
            // We don't need to load chunks references from runtime code, as they're already
            // present in the DOM.
            if (chunkPath.endsWith(".css")) {
                // CSS chunks do not register themselves, and as such must be marked as
                // loaded instantly.
                resolver.resolve();
            }
            // We need to wait for JS chunks to register themselves within `registerChunk`
            // before we can start instantiating runtime modules, hence the absence of
            // `resolver.resolve()` in this branch.
            return resolver.promise;
        }
        const chunkUrl = getChunkRelativeUrl(chunkPath);
        const decodedChunkUrl = decodeURI(chunkUrl);
        if (chunkPath.endsWith(".css")) {
            const previousLinks = document.querySelectorAll(`link[rel=stylesheet][href="${chunkUrl}"],link[rel=stylesheet][href^="${chunkUrl}?"],link[rel=stylesheet][href="${decodedChunkUrl}"],link[rel=stylesheet][href^="${decodedChunkUrl}?"]`);
            if (previousLinks.length > 0) {
                // CSS chunks do not register themselves, and as such must be marked as
                // loaded instantly.
                resolver.resolve();
            } else {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = chunkUrl;
                link.onerror = ()=>{
                    resolver.reject();
                };
                link.onload = ()=>{
                    // CSS chunks do not register themselves, and as such must be marked as
                    // loaded instantly.
                    resolver.resolve();
                };
                document.body.appendChild(link);
            }
        } else if (chunkPath.endsWith(".js")) {
            const previousScripts = document.querySelectorAll(`script[src="${chunkUrl}"],script[src^="${chunkUrl}?"],script[src="${decodedChunkUrl}"],script[src^="${decodedChunkUrl}?"]`);
            if (previousScripts.length > 0) {
                // There is this edge where the script already failed loading, but we
                // can't detect that. The Promise will never resolve in this case.
                for (const script of Array.from(previousScripts)){
                    script.addEventListener("error", ()=>{
                        resolver.reject();
                    });
                }
            } else {
                const script = document.createElement("script");
                script.src = chunkUrl;
                // We'll only mark the chunk as loaded once the script has been executed,
                // which happens in `registerChunk`. Hence the absence of `resolve()` in
                // this branch.
                script.onerror = ()=>{
                    resolver.reject();
                };
                document.body.appendChild(script);
            }
        } else {
            throw new Error(`can't infer type of chunk from path ${chunkPath}`);
        }
        return resolver.promise;
    }
})();
function _eval({ code, url, map }) {
    code += `\n\n//# sourceURL=${encodeURI(location.origin + CHUNK_BASE_PATH + url)}`;
    if (map) code += `\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(map)}`;
    return eval(code);
}
const chunksToRegister = globalThis.TURBOPACK;
globalThis.TURBOPACK = { push: registerChunk };
chunksToRegister.forEach(registerChunk);
})();


//# sourceMappingURL=13a58_next_dist_esm_build_templates_app-page_15247b.js.map