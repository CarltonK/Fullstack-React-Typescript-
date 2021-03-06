exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\n// import mongoose from 'mongoose'\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar productCRUD = __importStar(__webpack_require__(/*! ./product-crud-router */ \"./src/product-crud-router.ts\"));\r\ndotenv.config();\r\nif (!process.env.PORT) {\r\n    console.log(\"Error to get ports\");\r\n    process.exit(1);\r\n}\r\nvar PORT = parseInt(process.env.PORT, 10);\r\nvar app = express_1.default();\r\napp.use(helmet_1.default());\r\napp.use(cors_1.default());\r\napp.use(express_1.default.json());\r\nvar server = app.listen(PORT, function () {\r\n    console.log(\"Listening on port \" + PORT);\r\n});\r\n// Send message for default URL\r\napp.get('/', function (req, res) { return res.send('Welcome to NodeJs App using TypeScript'); });\r\napp.get('/products', productCRUD.getProductList);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/product-crud-router.ts":
/*!************************************!*\
  !*** ./src/product-crud-router.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.deleteproduct = exports.updateroduct = exports.createProduct = exports.getProductList = void 0;\r\nvar ProductService = __importStar(__webpack_require__(/*! ./product-crud.service */ \"./src/product-crud.service.ts\"));\r\nexports.getProductList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var productList;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, ProductService.getAllProducts()];\r\n            case 1:\r\n                productList = _a.sent();\r\n                console.log(\"\" + JSON.stringify(productList));\r\n                try {\r\n                    res.status(200).send(productList);\r\n                }\r\n                catch (e) {\r\n                    res.status(404).send(e.message);\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var product;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                product = req.body;\r\n                return [4 /*yield*/, ProductService.createProduct(product)];\r\n            case 1:\r\n                _a.sent();\r\n                try {\r\n                    res.status(200).send({\r\n                        message: \"Successfully added\",\r\n                        IsSuccess: true,\r\n                        result: \"\"\r\n                    });\r\n                }\r\n                catch (e) {\r\n                    res.status(404).send(e.message);\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.updateroduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var product;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                product = req.body;\r\n                return [4 /*yield*/, ProductService.updateProducts(product)];\r\n            case 1:\r\n                _a.sent();\r\n                try {\r\n                    res.status(200).send({\r\n                        message: \"Successfully updated\",\r\n                        IsSuccess: true,\r\n                        result: \"\"\r\n                    });\r\n                }\r\n                catch (e) {\r\n                    res.status(404).send(e.message);\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.deleteproduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var productID;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                productID = req.body['id'];\r\n                return [4 /*yield*/, ProductService.deleteProducts(productID)];\r\n            case 1:\r\n                _a.sent();\r\n                try {\r\n                    res.status(200).send({\r\n                        message: \"Successfully deleted\",\r\n                        IsSuccess: true,\r\n                        result: \"\"\r\n                    });\r\n                }\r\n                catch (e) {\r\n                    res.status(404).send(e.message);\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/product-crud-router.ts?");

/***/ }),

/***/ "./src/product-crud.service.ts":
/*!*************************************!*\
  !*** ./src/product-crud.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.deleteProducts = exports.updateProducts = exports.getAllProducts = exports.createProduct = void 0;\r\nvar product_1 = __webpack_require__(/*! ./product */ \"./src/product.ts\");\r\n// CREATE\r\nexports.createProduct = function (product) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        product_1.products.push(product);\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\n// READ\r\nexports.getAllProducts = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, product_1.products];\r\n    });\r\n}); };\r\n// UPDATE\r\nexports.updateProducts = function (product) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var index;\r\n    return __generator(this, function (_a) {\r\n        index = product_1.products.findIndex(function (i) { return i.id === product['id']; });\r\n        if (index > 0 || index == 0) {\r\n            product_1.products[index]['productName'] = product['productName'];\r\n            product_1.products[index]['productPrice'] = product['productPrice'];\r\n            product_1.products[index]['prodRating'] = product['prodRating'];\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\n// DELETE\r\nexports.deleteProducts = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var index;\r\n    return __generator(this, function (_a) {\r\n        index = product_1.products.findIndex(function (d) { return d.id === id; });\r\n        if (index > 0 || index == 0)\r\n            product_1.products.splice(index, 1);\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/product-crud.service.ts?");

/***/ }),

/***/ "./src/product.ts":
/*!************************!*\
  !*** ./src/product.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.products = void 0;\r\n// List of products\r\nexports.products = [\r\n    {\r\n        id: 1,\r\n        productName: 'Samsung Galaxy A50',\r\n        productCode: 'SMA50',\r\n        productPrice: 23000,\r\n        proddescription: 'Phone',\r\n        prodRating: 4.0\r\n    },\r\n    {\r\n        id: 2,\r\n        productName: 'Samsung Galaxy A51',\r\n        productCode: 'SMA51',\r\n        productPrice: 30000,\r\n        proddescription: 'Phone',\r\n        prodRating: 4.5\r\n    },\r\n    {\r\n        id: 3,\r\n        productName: 'Samsung Galaxy A70',\r\n        productCode: 'SMA70',\r\n        productPrice: 25000,\r\n        proddescription: 'Phone',\r\n        prodRating: 4.2\r\n    },\r\n    {\r\n        id: 4,\r\n        productName: 'Samsung Galaxy A71',\r\n        productCode: 'SMA71',\r\n        productPrice: 35000,\r\n        proddescription: 'Phone',\r\n        prodRating: 4.7\r\n    },\r\n    {\r\n        id: 5,\r\n        productName: 'Samsung Galaxy Note 10',\r\n        productCode: 'SMN10',\r\n        productPrice: 100000,\r\n        proddescription: 'Phone',\r\n        prodRating: 4.7\r\n    },\r\n    {\r\n        id: 6,\r\n        productName: 'Samsung Galaxy Note 20',\r\n        productCode: 'SMN20',\r\n        productPrice: 120000,\r\n        proddescription: 'Phone',\r\n        prodRating: 4.9\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/product.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ })

};