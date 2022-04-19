"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 2836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendEmail)
/* harmony export */ });
async function sendEmail(req, res) {
  const {
    nome,
    email,
    telefone,
    idade,
    profissao
  } = req.body;

  try {
    await fetch('https://8oljthnp6k.execute-api.us-east-1.amazonaws.com/dev/api/sendMessageTelegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        email,
        telefone,
        profissao,
        idade
      })
    });
    res.status(200).json({
      success: 'Email enviado com sucesso !'
    });
  } catch (error) {
    res.status(400).json({
      success: 'Falha ao enviar o email'
    });
  }
}

/***/ }),

/***/ 2991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderpage_2Fapi_2FsendEmail_absolutePagePath_private_next_pages_2Fapi_2FsendEmail_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_fJLbuyqCd7k7Bxx7JwvPF_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22226b7152ddf482b1eaf9ce95c288ad39_22_2C_22previewModeSigningKey_22_3A_22f7950979915bd6c0ca3ad44ce2067ab8892442f1b57dd6f476f039d09824d0dc_22_2C_22previewModeEncryptionKey_22_3A_221eb596be28e8d683a1002a6027e937fe9d7db5ab161bdb457db15cea56567d43_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctWjVQRTdKNjZUS1xuXG4ifSx7InBhdGgiOiIuZW52LnByb2R1Y3Rpb24iLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctRkJNMlo5N0JaVlxuIn1d_i18n_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2FsendEmail&absolutePagePath=private-next-pages%2Fapi%2FsendEmail.ts&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=fJLbuyqCd7k7Bxx7JwvPF&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%22226b7152ddf482b1eaf9ce95c288ad39%22%2C%22previewModeSigningKey%22%3A%22f7950979915bd6c0ca3ad44ce2067ab8892442f1b57dd6f476f039d09824d0dc%22%2C%22previewModeEncryptionKey%22%3A%221eb596be28e8d683a1002a6027e937fe9d7db5ab161bdb457db15cea56567d43%22%7D&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctWjVQRTdKNjZUS1xuXG4ifSx7InBhdGgiOiIuZW52LnByb2R1Y3Rpb24iLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctRkJNMlo5N0JaVlxuIn1d&i18n=!

        
      const { processEnv } = __webpack_require__(9936)
      processEnv([{"path":".env.local","contents":"NEXT_PUBLIC_GA_ID=G-Z5PE7J66TK\n\n"},{"path":".env.production","contents":"NEXT_PUBLIC_GA_ID=G-FBM2Z97BZV\n"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(2836),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/sendEmail",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"226b7152ddf482b1eaf9ce95c288ad39",previewModeSigningKey:"f7950979915bd6c0ca3ad44ce2067ab8892442f1b57dd6f476f039d09824d0dc",previewModeEncryptionKey:"1eb596be28e8d683a1002a6027e937fe9d7db5ab161bdb457db15cea56567d43"}
        })
        /* harmony default export */ const next_serverless_loaderpage_2Fapi_2FsendEmail_absolutePagePath_private_next_pages_2Fapi_2FsendEmail_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_fJLbuyqCd7k7Bxx7JwvPF_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22226b7152ddf482b1eaf9ce95c288ad39_22_2C_22previewModeSigningKey_22_3A_22f7950979915bd6c0ca3ad44ce2067ab8892442f1b57dd6f476f039d09824d0dc_22_2C_22previewModeEncryptionKey_22_3A_221eb596be28e8d683a1002a6027e937fe9d7db5ab161bdb457db15cea56567d43_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctWjVQRTdKNjZUS1xuXG4ifSx7InBhdGgiOiIuZW52LnByb2R1Y3Rpb24iLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctRkJNMlo5N0JaVlxuIn1d_i18n_ = (apiHandler);
      

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458], () => (__webpack_exec__(2991)));
module.exports = __webpack_exports__;

})();