"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 8207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
const config = {
  content: [{
    title: 'Conheça',
    url: '/#conheca'
  }, {
    title: 'Depoimentos',
    url: '/#depoimentos'
  }, {
    title: 'Planos',
    url: '/planos'
  }, {
    title: 'Fale Conosco',
    url: '/fale-conosco'
  }]
};

/***/ }),

/***/ 6554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

function useMediaQuery(query) {
  const {
    0: matches,
    1: setMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}

/***/ }),

/***/ 4419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

function useTheme() {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return {
    theme,
    toggleTheme
  };
}

/***/ }),

/***/ 3210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID),
/* harmony export */   "LV": () => (/* binding */ pageview)
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = "G-Z5PE7J66TK"; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./src/lib/gtag.js
var gtag = __webpack_require__(3210);
// EXTERNAL MODULE: ./node_modules/next-seo/lib/next-seo.js
var next_seo = __webpack_require__(6847);
;// CONCATENATED MODULE: ./next-seo-config.ts
const title = 'ConquerPage - Crie páginas que vendam por você';
const description = 'Descubra que com alguns cliques, de forma simples, você conseguirá criar páginas irresistíveis para transformar um simples visitante em um cliente. Conheça nossos planos agora! Hora de decolar o seu negócio.';
const SEO = {
  title,
  canonical: 'https://conquerpage.com.br',
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://conquerpage.com.br',
    title,
    description,
    images: [{
      url: '/images/imageMetatag.png',
      alt: title,
      width: 1200,
      height: 628
    }]
  }
};
// EXTERNAL MODULE: ./src/hooks/useMediaQuery.ts
var useMediaQuery = __webpack_require__(6554);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Header/content.ts
var content = __webpack_require__(8207);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 164 modules
var motion = __webpack_require__(3445);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./src/styles/themes.ts
var themes = __webpack_require__(7009);
;// CONCATENATED MODULE: ./src/components/HeaderResponsive/components/MenuToggle/styles.ts



const ButtonMenuAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.button */.E.button).withConfig({
  displayName: "styles__ButtonMenuAni",
  componentId: "sc-1noyd5j-0"
})(["display:flex;justify-content:center;align-items:center;background:none;border:none;@media (min-width:768px){display:none;}> svg{> path{stroke:", ";}}"], themes/* allColors.color0 */.Qk.color0);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8521);
;// CONCATENATED MODULE: ./src/components/HeaderResponsive/components/MenuToggle/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //Styles






const Path = props => /*#__PURE__*/jsx_runtime.jsx(motion/* motion.path */.E.path, _objectSpread({
  fill: "transparent",
  strokeWidth: "3",
  stroke: themes/* allColors.color0 */.Qk.color0,
  strokeLinecap: "round"
}, props));

function MenuToggle({
  handleShowMenu,
  showMenu
}) {
  return /*#__PURE__*/jsx_runtime.jsx(ButtonMenuAni, {
    initial: "closed",
    animate: showMenu ? 'open' : 'closed',
    onClick: handleShowMenu,
    "aria-label": "menu",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
      width: "23",
      height: "23",
      viewBox: "0 0 23 23",
      children: [/*#__PURE__*/jsx_runtime.jsx(Path, {
        variants: {
          closed: {
            d: 'M 2 2.5 L 20 2.5'
          },
          open: {
            d: 'M 3 16.5 L 17 2.5'
          }
        }
      }), /*#__PURE__*/jsx_runtime.jsx(Path, {
        d: "M 2 9.423 L 20 9.423",
        variants: {
          closed: {
            opacity: 1
          },
          open: {
            opacity: 0
          }
        },
        transition: {
          duration: 0.1
        }
      }), /*#__PURE__*/jsx_runtime.jsx(Path, {
        variants: {
          closed: {
            d: 'M 2 16.346 L 20 16.346'
          },
          open: {
            d: 'M 3 2.5 L 17 16.346'
          }
        }
      })]
    })
  });
}
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__(1436);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(1559);
;// CONCATENATED MODULE: ./src/components/SwitchToggle/styles.ts


const SwitchContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__SwitchContainer",
  componentId: "sc-suzgqt-0"
})(["position:relative;width:57px;height:25px;background-color:", ";display:flex;justify-content:", ";border-radius:50px;padding:0 2px;align-items:center;cursor:pointer;", " ", ""], ({
  theme
}) => theme.switchToggle, props => props !== null && props !== void 0 && props.isDark ? 'flex-start' : 'flex-end', props => props.isDark && (0,styled_components_cjs/* css */.iv)(["&::before{font-weight:700;font-size:0.625rem;color:", ";position:absolute;content:'Dark';top:50%;right:7px;transform:translateY(-50%);}"], ({
  theme
}) => theme.body), props => !props.isDark && (0,styled_components_cjs/* css */.iv)(["&::after{font-weight:700;font-size:0.625rem;color:", ";position:absolute;content:'Light';top:50%;left:7px;transform:translateY(-50%);}"], ({
  theme
}) => theme.body));
const SwitchHandleAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.div */.E.div).withConfig({
  displayName: "styles__SwitchHandleAni",
  componentId: "sc-suzgqt-1"
})(["z-index:3;width:21px;height:21px;background-color:", ";border-radius:50%;display:flex;justify-content:center;align-items:center;> svg{color:", ";font-size:0.875rem;}"], ({
  theme
}) => theme.body, ({
  theme
}) => theme.switchToggle);
;// CONCATENATED MODULE: ./src/components/SwitchToggle/index.tsx
//Libs
 //icons





function SwitchToggleTheme({
  handleToogleTheme
}) {
  const {
    0: isDark,
    1: setisDark
  } = (0,react.useState)(false);

  const toggleSwitch = () => {
    setisDark(!isDark);
    handleToogleTheme();
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };
  return /*#__PURE__*/jsx_runtime.jsx(SwitchContainer, {
    className: "switch",
    isDark: isDark,
    onClick: toggleSwitch,
    children: /*#__PURE__*/jsx_runtime.jsx(SwitchHandleAni, {
      className: "handle",
      transition: spring,
      children: isDark ? /*#__PURE__*/jsx_runtime.jsx(react_fontawesome.FontAwesomeIcon, {
        icon: index_es/* faMoon */.DBF
      }) : /*#__PURE__*/jsx_runtime.jsx(react_fontawesome.FontAwesomeIcon, {
        icon: index_es/* faSun */.enB
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/HeaderResponsive/styles.ts



const MyHeader = styled_components_cjs/* default.header.withConfig */.ZP.header.withConfig({
  displayName: "styles__MyHeader",
  componentId: "sc-xg49aa-0"
})(["position:absolute;width:100%;height:5rem;z-index:1;"]);
const HeaderContentAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.nav */.E.nav).withConfig({
  displayName: "styles__HeaderContentAni",
  componentId: "sc-xg49aa-1"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;margin:0 auto;padding:0 1rem;> a{text-decoration:none;> span{color:", ";font-size:1.5rem;text-shadow:0px 4px 4px rgba(0,0,0,0.25);}}"], themes/* allColors.color0 */.Qk.color0);
const NavListAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.ul */.E.ul).withConfig({
  displayName: "styles__NavListAni",
  componentId: "sc-xg49aa-2"
})(["min-width:304px;width:90%;position:fixed;left:50%;top:5rem;list-style:none;padding:20px;background-color:", ";box-shadow:0px 4px 4px 3000px rgba(0,0,0,0.25);border-radius:30px;text-align:center;"], themes/* allColors.color4 */.Qk.color4);
const NavItemAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.li */.E.li).withConfig({
  displayName: "styles__NavItemAni",
  componentId: "sc-xg49aa-3"
})(["> a{position:relative;text-decoration:none;color:", ";font-size:var(--font-sm);font-weight:700;}& + li{margin:1.625rem;}"], themes/* allColors.color0 */.Qk.color0);
const SwitchContainerAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.div */.E.div).withConfig({
  displayName: "styles__SwitchContainerAni",
  componentId: "sc-xg49aa-4"
})(["position:absolute;top:15px;right:15px;"]);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-cycle.mjs + 1 modules
var use_cycle = __webpack_require__(2933);
;// CONCATENATED MODULE: ./src/components/HeaderResponsive/index.tsx
//Libs
 //Content

 //Components


 //Styles





function HeaderResponsive({
  handleToogleTheme
}) {
  const [showMenuResponsive, setShowMenuResponsive] = (0,use_cycle/* useCycle */.n)(false, true);
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.6,
        bounce: 0.3
      }
    }
  };
  const ulVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        type: 'linear',
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: '-50%',
      transition: {
        duration: 0.4,
        type: 'spring',
        bounce: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };
  const liVariants = {
    closed: {
      opacity: 0
    },
    open: {
      opacity: 1
    }
  };
  return /*#__PURE__*/jsx_runtime.jsx(MyHeader, {
    showMenuResponsive: showMenuResponsive,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderContentAni, {
      initial: "hidden",
      whileInView: "visible",
      viewport: {
        once: false,
        amount: 0.1
      },
      variants: headerVariants,
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          "aria-label": "retornar",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: ["Conquer", /*#__PURE__*/jsx_runtime.jsx("strong", {
              children: "Page"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx(MenuToggle, {
        handleShowMenu: () => setShowMenuResponsive(),
        showMenu: showMenuResponsive
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(NavListAni, {
        initial: "closed",
        animate: showMenuResponsive ? 'open' : 'closed',
        variants: ulVariants,
        children: [content/* config.content.map */.v.content.map(i => /*#__PURE__*/jsx_runtime.jsx(NavItemAni, {
          variants: liVariants,
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: i.url,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              children: i.title
            })
          })
        }, i.url)), /*#__PURE__*/jsx_runtime.jsx(SwitchContainerAni, {
          variants: liVariants,
          children: /*#__PURE__*/jsx_runtime.jsx(SwitchToggleTheme, {
            handleToogleTheme: handleToogleTheme
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Header/styles.ts



const styles_MyHeader = styled_components_cjs/* default.header.withConfig */.ZP.header.withConfig({
  displayName: "styles__MyHeader",
  componentId: "sc-1w51fa4-0"
})(["position:absolute;width:100%;height:5rem;z-index:1;"]);
const styles_HeaderContentAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.nav */.E.nav).withConfig({
  displayName: "styles__HeaderContentAni",
  componentId: "sc-1w51fa4-1"
})(["position:relative;max-width:1180px;height:100%;display:flex;align-items:center;justify-content:space-between;margin:0 auto;padding:0 1rem;> a{text-decoration:none;> span{color:", ";font-size:1.5rem;text-shadow:0px 4px 4px rgba(0,0,0,0.25);}}"], themes/* allColors.color0 */.Qk.color0);
const NavList = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
  displayName: "styles__NavList",
  componentId: "sc-1w51fa4-2"
})(["width:80%;list-style:none;padding:20px;text-align:center;display:flex;justify-content:flex-end;align-items:center;gap:8px;"]);
const styles_NavItemAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.li */.E.li).withConfig({
  displayName: "styles__NavItemAni",
  componentId: "sc-1w51fa4-3"
})(["width:15%;> a{position:relative;text-decoration:none;color:", ";font-size:var(--font-sm);font-weight:700;}"], themes/* allColors.color0 */.Qk.color0);
const styles_SwitchContainerAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.div */.E.div).withConfig({
  displayName: "styles__SwitchContainerAni",
  componentId: "sc-1w51fa4-4"
})([""]);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx
//Content
 //Components

 //Styles





function Header({
  handleToogleTheme
}) {
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.6,
        bounce: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };
  const liVariants = {
    hidden: {
      y: -30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return /*#__PURE__*/jsx_runtime.jsx(styles_MyHeader, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(styles_HeaderContentAni, {
      initial: "hidden",
      whileInView: "visible",
      viewport: {
        once: false,
        amount: 0.1
      },
      variants: headerVariants,
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          "aria-label": "retornar",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: ["Conquer", /*#__PURE__*/jsx_runtime.jsx("strong", {
              children: "Page"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx(NavList, {
        children: content/* config.content.map */.v.content.map(i => /*#__PURE__*/jsx_runtime.jsx(styles_NavItemAni, {
          variants: liVariants,
          transition: {
            duration: 0.4
          },
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: i.url,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              children: i.title
            })
          })
        }, i.url))
      }), /*#__PURE__*/jsx_runtime.jsx(styles_SwitchContainerAni, {
        variants: liVariants,
        children: /*#__PURE__*/jsx_runtime.jsx(SwitchToggleTheme, {
          handleToogleTheme: handleToogleTheme
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/styles/global.ts

const GlobalStyle = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["*{margin:0;padding:0;box-sizing:border-box;}html{width:100%;height:100%;@media (max-width:1080px){font-size:93.75%;}@media (max-width:720px){font-size:87.5%;}}:root{scroll-behavior:smooth !important;}body{width:100%;height:100%;background:", ";color:", ";-webkit-font-smoothing:antialiased;}body,input,textarea,select,button{font:400 1rem \"Poppins\",sans-serif;}button{cursor:pointer;}[disabled]{cursor:not-allowed;}:root{--font-xxs:max(0.875rem,0.6vw);--font-xs:max(0.875rem,0.8vw);--font-sm:max(1rem,0.9vw);--font-md:clamp(1rem,0.9vw,1.125rem);--font-lg:clamp(1.125rem,1.5vw,1.25rem);--font-xl:clamp(1.5rem,2vw,1.75rem);--font-xxl:clamp(1.8rem,3vw,3rem);}"], ({
  theme
}) => theme.body, ({
  theme
}) => theme.text);
// EXTERNAL MODULE: ./src/hooks/useThemes.ts
var useThemes = __webpack_require__(4419);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //SEO


 //Hooks

 //Components


 // import Analytics from '../components/Analytics';
//Global styles

 //Themes









function MyApp({
  Component,
  pageProps
}) {
  const {
    theme,
    toggleTheme
  } = (0,useThemes/* useTheme */.F)();
  const isDesktop = (0,useMediaQuery/* useMediaQuery */.a)('(min-width: 768px)');
  const router = (0,next_router.useRouter)();
  (0,react.useEffect)(() => {
    const handleRouteChange = url => {
      gtag/* pageview */.LV(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const hiddenHeaderIn = (0,react.useMemo)(() => ['/fale-conosco'], []);
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_components_cjs/* ThemeProvider */.f6, {
      theme: theme == 'light' ? themes/* lightTheme */.Wb : themes/* darkTheme */.$_,
      children: [/*#__PURE__*/jsx_runtime.jsx(next_seo/* DefaultSeo */.lX, _app_objectSpread({}, SEO)), /*#__PURE__*/jsx_runtime.jsx(GlobalStyle, {}), !hiddenHeaderIn.includes(router.pathname) && (isDesktop ? /*#__PURE__*/jsx_runtime.jsx(Header, {
        handleToogleTheme: toggleTheme
      }) : /*#__PURE__*/jsx_runtime.jsx(HeaderResponsive, {
        handleToogleTheme: toggleTheme
      })), /*#__PURE__*/jsx_runtime.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime.jsx(script["default"], {
        strategy: "afterInteractive",
        src: `https://www.googletagmanager.com/gtag/js?id=${gtag/* GA_TRACKING_ID */.vt}`
      }), /*#__PURE__*/jsx_runtime.jsx(script["default"], {
        id: "gtag-init",
        strategy: "afterInteractive",
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag/* GA_TRACKING_ID */.vt}', {
              page_path: window.location.pathname,
            });
          `
        }
      })]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3210);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8521);




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__["default"] {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      lang: "pt-BR",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@400;600&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("script", {
          dangerouslySetInnerHTML: {
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MPP5PRH');`
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_2__/* .GA_TRACKING_ID */ .vt}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("script", {
          id: "script-analytics",
          dangerouslySetInnerHTML: {
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_2__/* .GA_TRACKING_ID */ .vt}');
              `
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
          httpEquiv: "Content-Type",
          content: "text/html; charset=utf-8"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("noscript", {
          dangerouslySetInnerHTML: {
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPP5PRH"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 7009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qk": () => (/* binding */ allColors),
/* harmony export */   "Wb": () => (/* binding */ lightTheme),
/* harmony export */   "$_": () => (/* binding */ darkTheme)
/* harmony export */ });
const allColors = {
  color0: '#ECECED',
  color1: '#F5F5F5',
  color2: '#006DBA',
  color3: '#C34F16',
  color4: '#43464B',
  color5: '#33363B',
  color6: '#282A2F',
  color7: '#212227',
  color8: '#00BDC2',
  color9: '#fff',
  color10: '#000',
  color11: '#EC773D'
};
const lightTheme = {
  value: 'light',
  body: allColors.color9,
  text: allColors.color7,
  switchToggle: allColors.color5,
  backgroundLinear: allColors.color2,
  secondBackgroundLinear: allColors.color8,
  backgroundButton: allColors.color5,
  borderBottom: allColors.color2,
  backgroundWhyConquerPage: allColors.color1,
  borderLine: allColors.color2,
  cardColor: allColors.color9,
  cardTextColor: allColors.color4,
  cardButtonColor: allColors.color3,
  cardButtonTextColor: allColors.color9,
  pagePlansBackgroundLinear: allColors.color2,
  pagePlansSecondBackgroundLinear: allColors.color8,
  backgroundCardDepositions: allColors.color9,
  backgroundArrowButton: allColors.color7
};
const darkTheme = {
  value: 'dark',
  body: allColors.color4,
  text: allColors.color0,
  switchToggle: allColors.color0,
  backgroundLinear: allColors.color4,
  secondBackgroundLinear: allColors.color10,
  backgroundButton: allColors.color3,
  borderBottom: allColors.color3,
  backgroundWhyConquerPage: allColors.color5,
  borderLine: allColors.color3,
  cardColor: allColors.color7,
  cardTextColor: allColors.color0,
  cardButtonColor: allColors.color0,
  cardButtonTextColor: allColors.color4,
  pagePlansBackgroundLinear: allColors.color4,
  pagePlansSecondBackgroundLinear: allColors.color6,
  backgroundCardDepositions: allColors.color7,
  backgroundArrowButton: allColors.color0
};

/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/fJLbuyqCd7k7Bxx7JwvPF/_buildManifest.js","static/fJLbuyqCd7k7Bxx7JwvPF/_ssgManifest.js","static/fJLbuyqCd7k7Bxx7JwvPF/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-a4b351ddbd3f414f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-729834b6bca1a2f5.js","static/chunks/675-497edbe69254295d.js","static/chunks/pages/index-322e7708a8452507.js"],"/_app":["static/chunks/webpack-a4b351ddbd3f414f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-729834b6bca1a2f5.js","static/chunks/pages/_app-43e098579f0c6226.js"],"/_error":["static/chunks/webpack-a4b351ddbd3f414f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-729834b6bca1a2f5.js","static/chunks/pages/_error-1f95674706ce531a.js"],"/fale-conosco":["static/chunks/webpack-a4b351ddbd3f414f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-729834b6bca1a2f5.js","static/chunks/675-497edbe69254295d.js","static/chunks/pages/fale-conosco-ef33861f17e327be.js"],"/planos":["static/chunks/webpack-a4b351ddbd3f414f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-729834b6bca1a2f5.js","static/chunks/675-497edbe69254295d.js","static/chunks/pages/planos-fad010bfcfe8b522.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = JSON.parse('{"../../node_modules/next/dist/client/index.js -> ../pages/_error":{"id":9651,"files":["static/chunks/651.e7ad805f32a091cd.js"]}}');

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;