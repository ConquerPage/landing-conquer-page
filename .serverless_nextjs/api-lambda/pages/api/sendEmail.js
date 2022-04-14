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

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

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

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

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

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

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
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9276);

function sendEmail(req, res) {
  const {
    nome,
    email,
    telefone,
    idade,
    profissao
  } = req.body;
  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    secure: true
  });
  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `conquerpage@gmail.com`,
    subject: `New mail from ${email}`,
    text: `
    Nome: ${nome},
    Email: ${email},
    Telefone: ${telefone}
    Idade: ${idade}
    Profissão: ${profissao}
    `
  };
  transporter.sendMail(mailOption, err => {
    if (err) {
      res.send('error' + JSON.stringify(err));
    } else {
      res.send('success');
    }
  });
}

/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderpage_2Fapi_2FsendEmail_absolutePagePath_private_next_pages_2Fapi_2FsendEmail_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_ziAr8kfkAclTR3LhRUPLQ_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_222ac9dfb2c098c5da68d035c67cc096c3_22_2C_22previewModeSigningKey_22_3A_22b979a503f36756e40d9389d36f7d8b153af5bf87c1f3907da95f078e32879fbe_22_2C_22previewModeEncryptionKey_22_3A_22a1a41167d6249e66f89089bce61993a2faa8294bc90f0b0d323687204f01c3a5_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctWjVQRTdKNjZUS1xuXG5FTUFJTD1tdnBzdGVzdGVzQGdtYWlsLmNvbVxuUEFTU1dPUkQ9QnJvdGhlcnMyMDE4In0seyJwYXRoIjoiLmVudi5wcm9kdWN0aW9uIiwiY29udGVudHMiOiJORVhUX1BVQkxJQ19HQV9JRD1HLUZCTTJaOTdCWlZcblxuRU1BSUw9bXZwc3Rlc3Rlc0BnbWFpbC5jb21cblBBU1NXT1JEPUJyb3RoZXJzMjAxOCJ9XQ_3D_3D_i18n_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2FsendEmail&absolutePagePath=private-next-pages%2Fapi%2FsendEmail.ts&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=ziAr8kfkAclTR3LhRUPLQ&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%222ac9dfb2c098c5da68d035c67cc096c3%22%2C%22previewModeSigningKey%22%3A%22b979a503f36756e40d9389d36f7d8b153af5bf87c1f3907da95f078e32879fbe%22%2C%22previewModeEncryptionKey%22%3A%22a1a41167d6249e66f89089bce61993a2faa8294bc90f0b0d323687204f01c3a5%22%7D&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctWjVQRTdKNjZUS1xuXG5FTUFJTD1tdnBzdGVzdGVzQGdtYWlsLmNvbVxuUEFTU1dPUkQ9QnJvdGhlcnMyMDE4In0seyJwYXRoIjoiLmVudi5wcm9kdWN0aW9uIiwiY29udGVudHMiOiJORVhUX1BVQkxJQ19HQV9JRD1HLUZCTTJaOTdCWlZcblxuRU1BSUw9bXZwc3Rlc3Rlc0BnbWFpbC5jb21cblBBU1NXT1JEPUJyb3RoZXJzMjAxOCJ9XQ%3D%3D&i18n=!

        
      const { processEnv } = __webpack_require__(9936)
      processEnv([{"path":".env.local","contents":"NEXT_PUBLIC_GA_ID=G-Z5PE7J66TK\n\nEMAIL=mvpstestes@gmail.com\nPASSWORD=Brothers2018"},{"path":".env.production","contents":"NEXT_PUBLIC_GA_ID=G-FBM2Z97BZV\n\nEMAIL=mvpstestes@gmail.com\nPASSWORD=Brothers2018"}])
    
        
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
          encodedPreviewProps: {previewModeId:"2ac9dfb2c098c5da68d035c67cc096c3",previewModeSigningKey:"b979a503f36756e40d9389d36f7d8b153af5bf87c1f3907da95f078e32879fbe",previewModeEncryptionKey:"a1a41167d6249e66f89089bce61993a2faa8294bc90f0b0d323687204f01c3a5"}
        })
        /* harmony default export */ const next_serverless_loaderpage_2Fapi_2FsendEmail_absolutePagePath_private_next_pages_2Fapi_2FsendEmail_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_ziAr8kfkAclTR3LhRUPLQ_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_222ac9dfb2c098c5da68d035c67cc096c3_22_2C_22previewModeSigningKey_22_3A_22b979a503f36756e40d9389d36f7d8b153af5bf87c1f3907da95f078e32879fbe_22_2C_22previewModeEncryptionKey_22_3A_22a1a41167d6249e66f89089bce61993a2faa8294bc90f0b0d323687204f01c3a5_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6Ik5FWFRfUFVCTElDX0dBX0lEPUctWjVQRTdKNjZUS1xuXG5FTUFJTD1tdnBzdGVzdGVzQGdtYWlsLmNvbVxuUEFTU1dPUkQ9QnJvdGhlcnMyMDE4In0seyJwYXRoIjoiLmVudi5wcm9kdWN0aW9uIiwiY29udGVudHMiOiJORVhUX1BVQkxJQ19HQV9JRD1HLUZCTTJaOTdCWlZcblxuRU1BSUw9bXZwc3Rlc3Rlc0BnbWFpbC5jb21cblBBU1NXT1JEPUJyb3RoZXJzMjAxOCJ9XQ_3D_3D_i18n_ = (apiHandler);
      

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1], () => (__webpack_exec__(644)));
module.exports = __webpack_exports__;

})();