"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 1190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ AnimatePresence)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(655);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/framesync/dist/es/index.mjs + 2 modules
var es = __webpack_require__(4735);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(7207);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs



function useIsMounted() {
    var isMounted = (0,react.useRef)(false);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-force-update.mjs





function useForceUpdate() {
    var isMounted = useIsMounted();
    var _a = (0,tslib_es6/* __read */.CR)((0,react.useState)(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    var forceRender = (0,react.useCallback)(function () {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    var deferredForceRender = (0,react.useCallback)(function () { return es/* default.postRender */.ZP.postRender(forceRender); }, [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(240);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(6681);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-id.mjs
var use_id = __webpack_require__(6316);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs







var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
    var presenceChildren = (0,use_constant/* useConstant */.h)(newChildrenMap);
    var id = (0,use_id/* useId */.M)();
    var context = (0,react.useMemo)(function () { return ({
        id: id,
        initial: initial,
        isPresent: isPresent,
        custom: custom,
        onExitComplete: function (childId) {
            var e_1, _a;
            presenceChildren.set(childId, true);
            try {
                for (var _b = (0,tslib_es6/* __values */.XA)(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var isComplete = _c.value;
                    if (!isComplete)
                        return; // can stop searching when any is incomplete
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
        },
        register: function (childId) {
            presenceChildren.set(childId, false);
            return function () { return presenceChildren.delete(childId); };
        },
    }); }, 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react.useMemo)(function () {
        presenceChildren.forEach(function (_, key) { return presenceChildren.set(key, false); });
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react.useEffect(function () {
        !isPresent && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
    }, [isPresent]);
    return (react.createElement(PresenceContext/* PresenceContext.Provider */.O.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(5364);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var use_unmount_effect = __webpack_require__(5411);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs










var getChildKey = function (child) { return child.key || ""; };
var isDev = "production" !== "production";
function updateChildLookup(children, allChildren) {
    var seenChildren = isDev ? new Set() : null;
    children.forEach(function (child) {
        var key = getChildKey(child);
        if (isDev && seenChildren && seenChildren.has(key)) {
            console.warn("Children of AnimatePresence require unique keys. \"".concat(key, "\" is a duplicate."));
            seenChildren.add(key);
        }
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react.Children.forEach(children, function (child) {
        if ((0,react.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    var _d = (0,tslib_es6/* __read */.CR)(useForceUpdate(), 1), forceRender = _d[0];
    var forceRenderLayoutGroup = (0,react.useContext)(LayoutGroupContext/* LayoutGroupContext */.p).forceRender;
    if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
    var isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    var childrenToRender = filteredChildren;
    var exiting = new Set();
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = (0,react.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    var allChildren = (0,react.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    var isInitialRender = (0,react.useRef)(true);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(function () {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    (0,use_unmount_effect/* useUnmountEffect */.z)(function () {
        isInitialRender.current = true;
        allChildren.clear();
        exiting.clear();
    });
    if (isInitialRender.current) {
        return (react.createElement(react.Fragment, null, childrenToRender.map(function (child) { return (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = (0,tslib_es6/* __spreadArray */.ev)([], (0,tslib_es6/* __read */.CR)(childrenToRender), false);
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (presentChild) { return presentChild.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                    return;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, react.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    if (false) {}
    return (react.createElement(react.Fragment, null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return (0,react.cloneElement)(child); })));
};




/***/ })

};
;