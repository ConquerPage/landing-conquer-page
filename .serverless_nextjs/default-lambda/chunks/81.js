"use strict";
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 9081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Header/content.ts
var content = __webpack_require__(8207);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 164 modules
var motion = __webpack_require__(3445);
// EXTERNAL MODULE: ./src/styles/themes.ts
var themes = __webpack_require__(7009);
;// CONCATENATED MODULE: ./src/components/Footer/styles.ts



const MyFooter = styled_components_cjs/* default.footer.withConfig */.ZP.footer.withConfig({
  displayName: "styles__MyFooter",
  componentId: "sc-1alzu0q-0"
})(["overflow:hidden;background:", ";padding:2rem 1rem;@media (min-width:768px){padding:1rem 1rem;}"], ({
  theme,
  showCTA
}) => showCTA ? `linear-gradient(101.45deg, ${theme.backgroundLinear} 0%, ${theme.secondBackgroundLinear} 177.62%);` : 'transparent');
const Wrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1alzu0q-1"
})(["display:flex;flex-direction:column;width:100%;max-width:1180px;margin:0 auto;gap:3.2rem;"]);
const ContentInfo = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__ContentInfo",
  componentId: "sc-1alzu0q-2"
})(["display:flex;flex-direction:column;align-items:center;gap:1.875rem;margin-top:2rem;h2{color:", ";text-align:center;}> p{text-align:center;color:", ";}> a{text-decoration:none;display:flex;flex-direction:column;align-items:center;border:none;border-radius:10px;cursor:pointer;box-shadow:0px 4px 4px rgba(0,0,0,0.25);color:", ";padding:0.5rem 1.8125rem;background:", ";font-weight:700;#first-text-button{color:", ";font-size:var(--font-lg);}#second-text-button{color:", ";font-size:var(--font-sm);}}"], themes/* allColors.color0 */.Qk.color0, themes/* allColors.color0 */.Qk.color0, themes/* allColors.color0 */.Qk.color0, themes/* allColors.color3 */.Qk.color3, themes/* allColors.color9 */.Qk.color9, themes/* allColors.color9 */.Qk.color9);
const ContentList = (0,styled_components_cjs/* default */.ZP)(motion/* motion.nav */.E.nav).withConfig({
  displayName: "styles__ContentList",
  componentId: "sc-1alzu0q-3"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;flex-direction:column;gap:20px;@media (min-width:992px){flex-direction:row;gap:0;}> a{text-decoration:none;> span{font-size:1.5rem;text-shadow:0px 4px 4px rgba(0,0,0,0.25);color:", ";}}"], ({
  theme,
  showCTA
}) => showCTA ? themes/* allColors.color9 */.Qk.color9 : theme.text);
const NavList = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
  displayName: "styles__NavList",
  componentId: "sc-1alzu0q-4"
})(["width:100%;list-style:none;text-align:center;display:flex;align-items:center;flex-direction:column;gap:8px;@media (min-width:992px){width:80%;padding:20px;justify-content:flex-end;flex-direction:row;}"]);
const NavItemAni = (0,styled_components_cjs/* default */.ZP)(motion/* motion.li */.E.li).withConfig({
  displayName: "styles__NavItemAni",
  componentId: "sc-1alzu0q-5"
})(["width:100%;@media (min-width:992px){width:15%;}> a{position:relative;text-decoration:none;color:", ";font-size:var(--font-sm);font-weight:700;}"], ({
  theme,
  showCTA
}) => showCTA ? themes/* allColors.color9 */.Qk.color9 : theme.text);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8521);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx


//Styles



function Footer({
  ShowCTA = true
}) {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      y: 30
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
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return /*#__PURE__*/jsx_runtime.jsx(MyFooter, {
    showCTA: ShowCTA,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
      children: [ShowCTA && /*#__PURE__*/(0,jsx_runtime.jsxs)(ContentInfo, {
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          children: "Chegou at\xE9 aqui e ainda est\xE1 com d\xFAvida ?"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Com a ", /*#__PURE__*/jsx_runtime.jsx("strong", {
            children: "ConquerPage"
          }), " voc\xEA vai ter do seu lado o", ' ', /*#__PURE__*/jsx_runtime.jsx("strong", {
            children: "MELHOR"
          }), " que a tecnologia pode oferecer para voc\xEA", ' ', /*#__PURE__*/jsx_runtime.jsx("strong", {
            children: "conquistar mais clientes e alavancar as suas vendas"
          }), ", n\xE3o perca tempo!! Clica no bot\xE3o abaixo para conhecer nossos planos e come\xE7ar a", ' ', /*#__PURE__*/jsx_runtime.jsx("strong", {
            children: "transformar de vez os seus resultados"
          }), "."]
        }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/planos",
          passHref: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              id: "first-text-button",
              children: "Quero alavancar minhas vendas"
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              id: "second-text-button",
              children: "Voc\xEA pode come\xE7ar de GRA\xC7A"
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ContentList, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: false,
          amount: 0.1
        },
        variants: wrapperVariants,
        showCTA: ShowCTA,
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
          children: content/* config.content.map */.v.content.map(i => /*#__PURE__*/jsx_runtime.jsx(NavItemAni, {
            variants: liVariants,
            transition: {
              duration: 0.4
            },
            showCTA: ShowCTA,
            children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: i.url,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                children: i.title
              })
            })
          }, i.url))
        })]
      })]
    })
  });
}

/***/ })

};
;