/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMAGE_DEFAULT = exports.ICONS = exports.COLORS = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.COLORS = {
    black: 'black',
    orange: 'orange',
    green: 'green',
    white: 'white',
    greyF4: 'greyF4',
    greyF3: 'greyF3',
    greyD9: 'greyD9',
    greyC4: 'greyC4',
    grey99: 'grey99',
    grey66: 'grey66',
};
exports.ICONS = {
    block: react_1.default.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" }),
    warning: react_1.default.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" }),
    comment: react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" }),
    save: react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" }),
    share: react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" }),
    menu: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "15.5", cy: "7.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "15.5", cy: "15", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "15.5", cy: "22.5", r: "2.5", fill: "#D9D9D9" })),
    anon: react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })
};
exports.IMAGE_DEFAULT = 'https://cdn.dribbble.com/userupload/4693931/file/original-cd1b6b898dca6b75ef03bc726c626256.png?compress=1&resize=752x';


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(37);
exports.userContext = react_1.default.createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var data = (0, useUserData_1.useUserData)()[0];
    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST,
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error,
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch((0, exports.meRequest)());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization: "bearer ".concat(getState().token) }
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.meRequestError)(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.updateComment = exports.setToken = void 0;
var reducer_1 = __webpack_require__(71);
var SET_TOKEN = 'SET_TOKEN';
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var initialState = {
    comment: 'Привет from matve!!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {},
    },
};
var setToken = function (token) { return ({
    type: SET_TOKEN,
    token: token,
}); };
exports.setToken = setToken;
var updateComment = function (text) { return ({
    type: UPDATE_COMMENT,
    text: text,
}); };
exports.updateComment = updateComment;
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'UPDATE_COMMENT':
            return __assign(__assign({}, state), { comment: action.text });
        case 'SET_TOKEN':
            return __assign(__assign({}, state), { token: action.token });
        case 'ME_REQUEST':
        case 'ME_REQUEST_SUCCESS':
        case 'ME_REQUEST_ERROR':
            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(110);
exports.postsContext = react_1.default.createContext([]);
function PostContextProvider(_a) {
    var children = _a.children;
    var posts = (0, usePostsData_1.usePostsData)()[0];
    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));
}
exports.PostContextProvider = PostContextProvider;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(14));
var server_1 = __importDefault(__webpack_require__(15));
var indexTemplate_1 = __webpack_require__(16);
var App_1 = __webpack_require__(17);
var axios_1 = __importDefault(__webpack_require__(5));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use("/static", express_1.default.static("./dist/client"));
app.get("/", function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.get("/auth", function (req, res) {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=".concat(req.query.code, "&redirect_uri=").concat(process.env.DOMEN, "auth"), {
        auth: { username: '-sV4qsf4pTnITkGHVidpnw', password: process.env.SECRET },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }).then(function (_a) {
        var data = _a.data;
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));
    }).catch(console.log);
});
app.listen(PORT, function () {
    console.log("server started on port http://localhost:".concat(PORT));
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Reddit</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n    window.__token__ = '".concat(token, "'\n  </script>\n</head>\n\n<body>\n  <div id=\"react_root\">").concat(content, "</div>\n  <div id=\"modal_root\"></div>\n</body>\n\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(18);
var Layout_1 = __webpack_require__(19);
__webpack_require__(22);
var Header_1 = __webpack_require__(24);
var Content_1 = __webpack_require__(44);
var CardsList_1 = __webpack_require__(47);
var react_2 = __webpack_require__(0);
var userContext_1 = __webpack_require__(6);
var postsContext_1 = __webpack_require__(12);
var redux_1 = __webpack_require__(111);
var react_redux_1 = __webpack_require__(3);
var extension_1 = __webpack_require__(112);
var reducer_1 = __webpack_require__(10);
var redux_thunk_1 = __importDefault(__webpack_require__(113));
var store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    (0, react_1.useEffect)(function () {
        var token = localStorage.getItem('token') === 'undefined' ? window.__token__ : localStorage.getItem('token');
        store.dispatch((0, reducer_1.setToken)(token));
        if (token)
            localStorage.setItem('token', token);
    }, []);
    return (react_1.default.createElement(react_2.StrictMode, null,
        react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(userContext_1.UserContextProvider, null,
                react_1.default.createElement(postsContext_1.PostContextProvider, null,
                    react_1.default.createElement(Layout_1.Layout, null,
                        react_1.default.createElement(Header_1.Header, null),
                        react_1.default.createElement(Content_1.Content, null,
                            react_1.default.createElement(CardsList_1.CardsList, null))))))));
}
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(21));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(23);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\r\n    --black:          #333333;\r\n    --orange:         #CC6633;\r\n    --green:          #A4CC33;\r\n    --whiteLightness: 100%;\r\n    --white:          hsl(0, 0%, var(--whiteLightness));\r\n    --greyF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\r\n    --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\r\n    --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\r\n    --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\r\n    --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\r\n    --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\r\n    --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\r\n}\r\n\r\nbody {\r\n    min-width: 320px;\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: var(--grayF4);\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n    color: var(--black);\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 10px;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n    border-radius: 3px;\r\n    background-color: var(--white);\r\n    z-index: 1;\r\n}\r\n\r\n.closeButton {\r\n    background-color: var(--greyD9);\r\n    padding: 12px 23px;\r\n    border-radius: 0 0 3px 3px;\r\n    width: 100%;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(26));
var SearchBlock_1 = __webpack_require__(27);
var ThreadTitle_1 = __webpack_require__(38);
var SortBlock_1 = __webpack_require__(41);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(29));
var UserBlock_1 = __webpack_require__(30);
var userContext_1 = __webpack_require__(6);
function SearchBlock() {
    var _a = (0, react_1.useContext)(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3aDPv"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userblock_css_1 = __importDefault(__webpack_require__(32));
var Icon_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(1);
var Text_1 = __webpack_require__(2);
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=5SmZApmvGnNN2Q2tAgzV0Q&response_type=code&state=random_string&redirect_uri=".concat(process.env.DOMEN, "auth&duration=permanent&scope=read submit identity"), className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc
            ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_css_1.default.avatarImage })
            : react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.anon, size: 50 })),
        react_1.default.createElement("div", { className: userblock_css_1.default.username },
            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? constants_1.COLORS.black : constants_1.COLORS.grey99 }, username || "Аноним"))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--24rEF",
	"avatarBox": "userblock__avatarBox--2OTfi",
	"avatarImage": "userblock__avatarImage--2ryXC",
	"username": "userblock__username--3bLc0"
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function Icon(_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 14 : _b;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 ".concat(size, " ").concat(size), fill: "none", xmlns: "http://www.w3.org/2000/svg" }, name));
}
exports.Icon = Icon;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(35));
var classnames_1 = __importDefault(__webpack_require__(36));
var constants_1 = __webpack_require__(1);
function Text(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? constants_1.COLORS.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var classes = (0, classnames_1.default)(text_css_1.default["s".concat(size)], text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default["m".concat(mobileSize)]] = mobileSize, _b), (_c = {}, _c[text_css_1.default["m".concat(tabletSize)]] = tabletSize, _c), (_d = {}, _d[text_css_1.default["m".concat(desktopSize)]] = desktopSize, _d));
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--Puvgs",
	"s20": "text__s20--3Xq66",
	"s16": "text__s16--G_lUr",
	"s14": "text__s14--jvCoO",
	"s12": "text__s12--2S2T2",
	"s10": "text__s10--DYLfy",
	"bold": "text__bold--gb02H",
	"black": "text__black--1zchg",
	"orange": "text__orange--1RyAM",
	"green": "text__green--3mYQn",
	"greyF4": "text__greyF4--V0fR0",
	"greyF3": "text__greyF3--2Lfsi",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw"
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(3);
var actions_1 = __webpack_require__(7);
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (token === 'undefined' || token.length === 0)
            return;
        // @ts-ignore
        dispatch((0, actions_1.meRequestAsync)());
    }, [token]);
    return [data];
}
exports.useUserData = useUserData;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(40));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(43));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_css_1.default.sortBlock }, "sorted dropdown"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--141aZ"
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(46));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardslist_css_1 = __importDefault(__webpack_require__(49));
var Card_1 = __webpack_require__(50);
var postsContext_1 = __webpack_require__(12);
var Text_1 = __webpack_require__(2);
function CardsList() {
    var posts = (0, react_1.useContext)(postsContext_1.postsContext);
    var listItems = posts ? posts.map(function (post) {
        return react_1.default.createElement(Card_1.Card, { id: "", key: post.data.id, author: post.data.author, title: post.data.title, downs: post.data.downs, ups: post.data.ups, preview: post.data.preview, created_utc: post.data.created_utc, postId: post.data.id, subreddit: post.data.subreddit });
    }) : react_1.default.createElement(Text_1.Text, { size: 20 }, "no posts. error!!!!!!");
    return (react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList }, listItems));
}
exports.CardsList = CardsList;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--1DoiZ"
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(52));
var TextContent_1 = __webpack_require__(53);
var Preview_1 = __webpack_require__(83);
var Menu_1 = __webpack_require__(86);
var Controls_1 = __webpack_require__(95);
function Card(props) {
    return (react_1.default.createElement("li", { className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { title: props.title, author: props.author, created_utc: props.created_utc, postId: props.postId, subreddit: props.subreddit }),
        react_1.default.createElement(Preview_1.Preview, null),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, { downs: props.downs, ups: props.ups })));
}
exports.Card = Card;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-",
	"textContent": "card__textContent--3Ki_7"
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(55));
var MetaData_1 = __webpack_require__(56);
var Title_1 = __webpack_require__(62);
function TextContent(_a) {
    var title = _a.title, author = _a.author, created_utc = _a.created_utc, subreddit = _a.subreddit, postId = _a.postId;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement(MetaData_1.MetaData, { author: author, created_utc: created_utc }),
        react_1.default.createElement(Title_1.Title, { title: title, subreddit: subreddit, postId: postId })));
}
exports.TextContent = TextContent;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--2RuXa",
	"metaData": "textcontent__metaData--1L7oU",
	"createdAt": "textcontent__createdAt--1vECY"
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaData = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var metadata_css_1 = __importDefault(__webpack_require__(58));
var UserLink_1 = __webpack_require__(8);
var parseDateUTC_1 = __webpack_require__(61);
function MetaData(_a) {
    var created_utc = _a.created_utc, author = _a.author;
    return (react_1.default.createElement("div", { className: metadata_css_1.default.metaData },
        react_1.default.createElement(UserLink_1.UserLink, { author: author }),
        react_1.default.createElement("span", { className: metadata_css_1.default.createdAt },
            react_1.default.createElement("span", { className: metadata_css_1.default.publishedLabel }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
            (0, parseDateUTC_1.parseDateUTC)(created_utc))));
}
exports.MetaData = MetaData;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"metaData": "metadata__metaData--1IsDb",
	"publishedLabel": "metadata__publishedLabel--3EXIy",
	"createdAt": "metadata__createdAt--3NZno"
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLink = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userlink_css_1 = __importDefault(__webpack_require__(60));
function UserLink(_a) {
    var author = _a.author;
    return (react_1.default.createElement("div", { className: userlink_css_1.default.userLink },
        react_1.default.createElement("img", { className: userlink_css_1.default.avatar, src: "https://cdn.dribbble.com/userupload/3834119/file/original-c0d5ef7c1e3be81ae4797d2193a357ca.png?compress=1&resize=752x", alt: "avatar" }),
        react_1.default.createElement("a", { href: "#user-url", className: userlink_css_1.default.username }, author)));
}
exports.UserLink = UserLink;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userLink": "userlink__userLink--oyjO4",
	"avatar": "userlink__avatar--une5E",
	"username": "userlink__username--Xqfrn"
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateUTC = void 0;
function parseDateUTC(created_utc) {
    var date = new Date(created_utc);
    var month = '';
    switch (date.getMonth()) {
        case 0:
            month = 'января';
            break;
        case 1:
            month = 'февраля';
            break;
        case 2:
            month = 'марта';
            break;
        case 3:
            month = 'апреля';
            break;
        case 4:
            month = 'мая';
            break;
        case 5:
            month = 'июня';
            break;
        case 6:
            month = 'июля';
            break;
        case 7:
            month = 'августа';
            break;
        case 8:
            month = 'сентября';
            break;
        case 9:
            month = 'октября';
            break;
        case 10:
            month = 'ноября';
            break;
        case 11:
            month = 'декабря';
            break;
        default:
            month = 'чего-то';
    }
    return "".concat(date.getDate(), " ").concat(month, " ").concat(date.getFullYear());
}
exports.parseDateUTC = parseDateUTC;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importStar(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(64));
var Post_1 = __webpack_require__(65);
var offset_1 = __webpack_require__(82);
function Title(_a) {
    var title = _a.title, subreddit = _a.subreddit, postId = _a.postId;
    var _b = (0, react_1.useState)({ isModalOpen: false, target: document.body }), isModalOpened = _b[0], setIsModalOpened = _b[1];
    return (react_1.default.createElement("h2", { className: title_css_1.default.title },
        react_1.default.createElement("a", { id: "card-title", href: "#post-url", className: title_css_1.default.postLink, onClick: function (event) { return setIsModalOpened({ isModalOpen: true, target: event.target }); } }, title),
        isModalOpened.isModalOpen && (react_1.default.createElement(Post_1.Post, { onClose: function () { return setIsModalOpened({ isModalOpen: false, target: document.body }); }, height: (0, offset_1.offset)(isModalOpened.target).top - 50, subreddit: subreddit, postId: postId }))));
}
exports.Title = Title;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--3THtn",
	"postLink": "title__postLink--3ZH1E",
	"textContent": "title__textContent--1BWZQ"
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var post_css_1 = __importDefault(__webpack_require__(67));
var react_dom_1 = __importDefault(__webpack_require__(9));
var CommentForm_1 = __webpack_require__(68);
var CommentsList_1 = __webpack_require__(72);
function Post(props) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a, _b;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);
            }
        }
        document.addEventListener('click', handleClick);
        return function () { return document.removeEventListener('click', handleClick); };
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_css_1.default.modal, style: { top: props.height }, ref: ref },
        react_1.default.createElement("h2", null),
        react_1.default.createElement("div", { className: post_css_1.default.content },
            react_1.default.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."),
            react_1.default.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.")),
        react_1.default.createElement(CommentForm_1.CommentForm, null),
        react_1.default.createElement(CommentsList_1.CommentsList, { subreddit: props.subreddit, postId: props.postId }))), node);
}
exports.Post = Post;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--yRo-c"
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var commentform_css_1 = __importDefault(__webpack_require__(70));
var react_redux_1 = __webpack_require__(3);
var reducer_1 = __webpack_require__(10);
function CommentForm() {
    var value = (0, react_redux_1.useSelector)(function (state) { return state.comment; });
    var dispatch = (0, react_redux_1.useDispatch)();
    function handleChange(event) {
        dispatch((0, reducer_1.updateComment)(event.target.value));
    }
    var formRef = (0, react_1.useRef)(null);
    function handleSubmit(event) {
        var _a;
        event.preventDefault();
        console.log((_a = formRef.current) === null || _a === void 0 ? void 0 : _a.value);
    }
    return (react_1.default.createElement("form", { className: commentform_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { className: commentform_css_1.default.input, value: value, onChange: handleChange }),
        react_1.default.createElement("button", { type: "submit", className: commentform_css_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "commentform__button--2-2qT",
	"input": "commentform__input--28J_p",
	"form": "commentform__form--1oHDO"
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(7);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentslist_css_1 = __importDefault(__webpack_require__(74));
var useComments_1 = __webpack_require__(75);
var Text_1 = __webpack_require__(2);
var ReplyForm_1 = __webpack_require__(77);
var UserLink_1 = __webpack_require__(8);
var KarmaCounter_1 = __webpack_require__(11);
function CommentsList(props) {
    var comments = (0, useComments_1.useComments)(props.subreddit, props.postId);
    function recursiveComm(comm) {
        if (comm.data.body) {
            return (react_1.default.createElement("li", { className: commentslist_css_1.default.comment, key: comm.data.id },
                react_1.default.createElement("div", { className: commentslist_css_1.default.karmaCounterContainer },
                    react_1.default.createElement(KarmaCounter_1.KarmaCounter, { downs: comm.data.downs, ups: comm.data.ups })),
                react_1.default.createElement("div", { className: commentslist_css_1.default.commentMeta },
                    react_1.default.createElement(UserLink_1.UserLink, { author: comm.data.author }),
                    react_1.default.createElement("span", { className: commentslist_css_1.default.time }, "1 \u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434"),
                    react_1.default.createElement("span", { className: commentslist_css_1.default.subreddit }, comm.data.subreddit)),
                react_1.default.createElement("p", { className: commentslist_css_1.default.commentText },
                    react_1.default.createElement(Text_1.Text, { size: 14 }, comm.data.body)),
                react_1.default.createElement(ReplyForm_1.ReplyForm, { name: comm.data.author }),
                comm.data.replies !== "" && buildCommentsTree(comm.data.replies.data.children)));
        }
        else
            return;
    }
    function buildCommentsTree(comments) {
        return (react_1.default.createElement("ul", { className: commentslist_css_1.default.commentList }, comments.map(function (comm) { return recursiveComm(comm); })));
    }
    return (react_1.default.createElement("div", null, buildCommentsTree(comments)));
}
exports.CommentsList = CommentsList;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentList": "commentslist__commentList--12vMm",
	"subreddit": "commentslist__subreddit--I29Mc",
	"commentMeta": "commentslist__commentMeta--2lEFW",
	"time": "commentslist__time--3PnL-",
	"commentText": "commentslist__commentText--2enB8",
	"comment": "commentslist__comment--3ioQa",
	"karmaCounterContainer": "commentslist__karmaCounterContainer--7oNW-"
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComments = void 0;
var react_1 = __webpack_require__(0);
var index_1 = __importDefault(__webpack_require__(76));
var react_redux_1 = __webpack_require__(3);
function useComments(subreddit, postId) {
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var _a = (0, react_1.useState)([]), comments = _a[0], setComments = _a[1];
    (0, react_1.useEffect)(function () {
        if (token === 'undefined')
            return;
        index_1.default.get("https://oauth.reddit.com/r/".concat(subreddit, "/comments/").concat(postId), {
            headers: {
                Authorization: "bearer ".concat(token)
            }
        })
            .then(function (resp) {
            setComments(resp.data[1].data.children);
        })
            .catch(console.log);
    }, []);
    return comments;
}
exports.useComments = useComments;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("axios/index");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var replyform_css_1 = __importDefault(__webpack_require__(79));
var Icon_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(1);
function ReplyForm(_a) {
    var name = _a.name;
    var _b = (0, react_1.useState)("".concat(name, ", ")), inputValue = _b[0], setInputValue = _b[1];
    var _c = (0, react_1.useState)(false), isReplyFormOpened = _c[0], setIsReplyFormOpened = _c[1];
    var inputReference = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!inputReference.current)
            return;
        inputReference.current.focus();
        inputReference.current.value = inputValue;
    }, [isReplyFormOpened]);
    function handleOpenReplyForm(event) {
        event.stopPropagation();
        setIsReplyFormOpened(true);
    }
    function handleSubmitReplyForm(event) {
        event.preventDefault();
        setIsReplyFormOpened(false);
    }
    return (react_1.default.createElement("div", { className: replyform_css_1.default.replyContainer }, isReplyFormOpened
        ? react_1.default.createElement("form", { onSubmit: function (event) { return handleSubmitReplyForm(event); } },
            react_1.default.createElement("input", { onChange: function (event) { return setInputValue(event.target.value); }, ref: inputReference, type: "text" }),
            react_1.default.createElement("button", { type: "submit", className: replyform_css_1.default.replyBtn }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))
        : react_1.default.createElement("ul", { className: replyform_css_1.default.buttonList },
            react_1.default.createElement("li", { className: replyform_css_1.default.buttonListItem },
                react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.comment, size: 16 }),
                react_1.default.createElement("button", { onClick: function (event) { handleOpenReplyForm(event); }, className: replyform_css_1.default.replyBtn }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")),
            react_1.default.createElement("li", { className: replyform_css_1.default.buttonListItem },
                react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.share, size: 16 }),
                react_1.default.createElement("button", { className: replyform_css_1.default.replyBtn }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
            react_1.default.createElement("li", { className: replyform_css_1.default.buttonListItem },
                react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.warning, size: 16 }),
                react_1.default.createElement("button", { className: replyform_css_1.default.replyBtn }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
}
exports.ReplyForm = ReplyForm;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"replyBtn": "replyform__replyBtn--2kXUO",
	"replyContainer": "replyform__replyContainer--3F-ai",
	"buttonList": "replyform__buttonList--2Sd48",
	"buttonListItem": "replyform__buttonListItem--2BQBG"
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var karmacounter_css_1 = __importDefault(__webpack_require__(81));
function KarmaCounter(_a) {
    var downs = _a.downs, ups = _a.ups;
    return (react_1.default.createElement("div", { className: karmacounter_css_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_css_1.default.up },
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" }))),
        react_1.default.createElement("div", { className: karmacounter_css_1.default.carmaNumberContainer },
            react_1.default.createElement("div", { className: karmacounter_css_1.default.absNumberContainer },
                react_1.default.createElement("span", { className: karmacounter_css_1.default.karmaValue }, ups - downs))),
        react_1.default.createElement("button", { className: karmacounter_css_1.default.down },
            react_1.default.createElement("svg", { className: karmacounter_css_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaCounter": "karmacounter__karmaCounter--fMpNv",
	"karmaValue": "karmacounter__karmaValue--1Ho-U",
	"down": "karmacounter__down--1V_4R",
	"carmaNumberContainer": "karmacounter__carmaNumberContainer--8Sfpg",
	"absNumberContainer": "karmacounter__absNumberContainer--39lXW",
	"up": "karmacounter__up--1SZXL"
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.offset = void 0;
function offset(el) {
    var rect = el.getBoundingClientRect(), scrollLeft = window.scrollX || document.documentElement.scrollLeft, scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
exports.offset = offset;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(85));
var constants_1 = __webpack_require__(1);
function Preview() {
    // const img = UseImageByAI("Vladimir Putin's ruble is now worth less than a penny");
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview },
        react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: constants_1.IMAGE_DEFAULT, alt: "main card picture, wait to load" })));
}
exports.Preview = Preview;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--1Nukb",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(87), exports);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importStar(__webpack_require__(0));
var menu_css_1 = __importDefault(__webpack_require__(88));
var Dropdown_1 = __webpack_require__(89);
var MenuItemsList_1 = __webpack_require__(92);
var Text_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(1);
function Menu() {
    var dropdownRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isDropdown = _a[0], setIsDropdown = _a[1];
    (0, react_1.useEffect)(function () { setIsDropdown(true); }, [dropdownRef]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: menu_css_1.default.menu, ref: dropdownRef }),
        isDropdown && react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menu_css_1.default.menuButton },
                react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.menu, size: 31 })), destination: dropdownRef.current, onClose: function () { }, onOpen: function () { }, isOpen: false },
            react_1.default.createElement("div", { className: "dropdown" },
                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: '1234' }),
                react_1.default.createElement("button", { className: "closeButton" },
                    react_1.default.createElement(Text_1.Text, { size: 14 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))));
}
exports.Menu = Menu;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--22Yos",
	"menuButton": "menu__menuButton--2RzAb"
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var dropdown_css_1 = __importDefault(__webpack_require__(91));
var react_dom_1 = __importDefault(__webpack_require__(9));
var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, children = _a.children, destination = _a.destination, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;
    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var handleOpen = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    if (!destination) {
        return null;
    }
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))))), destination);
}
exports.Dropdown = Dropdown;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menuitemslist_css_1 = __importDefault(__webpack_require__(94));
var Text_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(1);
function MenuItemsList(_a) {
    var postId = _a.postId;
    return (react_1.default.createElement("ul", { className: menuitemslist_css_1.default.menuItemsList },
        react_1.default.createElement("li", { className: "".concat(menuitemslist_css_1.default.menuItem, " ").concat(menuitemslist_css_1.default.notMobileListItem) },
            react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.comment }),
            react_1.default.createElement(Text_1.Text, { size: 14 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        react_1.default.createElement("div", { className: "".concat(menuitemslist_css_1.default.divider, " ").concat(menuitemslist_css_1.default.notMobileListItem) }),
        react_1.default.createElement("li", { className: "".concat(menuitemslist_css_1.default.menuItem, " ").concat(menuitemslist_css_1.default.notMobileListItem) },
            react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.share }),
            react_1.default.createElement(Text_1.Text, { size: 14 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("div", { className: "".concat(menuitemslist_css_1.default.divider, " ").concat(menuitemslist_css_1.default.notMobileListItem) }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(postId); } },
            react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.block }),
            react_1.default.createElement(Text_1.Text, { size: 14 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: "".concat(menuitemslist_css_1.default.menuItem, " ").concat(menuitemslist_css_1.default.notMobileListItem) },
            react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.save }),
            react_1.default.createElement(Text_1.Text, { size: 14 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("div", { className: "".concat(menuitemslist_css_1.default.divider, " ").concat(menuitemslist_css_1.default.notMobileListItem) }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: constants_1.ICONS.warning }),
            react_1.default.createElement(Text_1.Text, { size: 14 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--3fgSr",
	"menuItem": "menuitemslist__menuItem--2CsEl",
	"divider": "menuitemslist__divider--1_GEo",
	"notMobileListItem": "menuitemslist__notMobileListItem--1-xou"
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(97));
var KarmaCounter_1 = __webpack_require__(11);
var CommentsButton_1 = __webpack_require__(98);
var Actions_1 = __webpack_require__(101);
function Controls(props) {
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { downs: props.downs, ups: props.ups }),
        react_1.default.createElement(CommentsButton_1.CommentsButton, null),
        react_1.default.createElement(Actions_1.Actions, null)));
}
exports.Controls = Controls;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI"
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsbutton_css_1 = __importDefault(__webpack_require__(100));
function CommentsButton() {
    return (react_1.default.createElement("button", { className: commentsbutton_css_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: commentsbutton_css_1.default.commentsNumber }, "13")));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--3bUHw",
	"commentsNumber": "commentsbutton__commentsNumber--3_qtU"
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actions_css_1 = __importDefault(__webpack_require__(103));
var ShareButton_1 = __webpack_require__(104);
var SaveButton_1 = __webpack_require__(107);
function Actions() {
    return (react_1.default.createElement("div", { className: actions_css_1.default.actions },
        react_1.default.createElement(ShareButton_1.ShareButton, null),
        react_1.default.createElement(SaveButton_1.SaveButton, null)));
}
exports.Actions = Actions;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actions": "actions__actions--CKLJF"
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(105), exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sharebutton_css_1 = __importDefault(__webpack_require__(106));
function ShareButton() {
    return (react_1.default.createElement("button", { className: sharebutton_css_1.default.shareButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))));
}
exports.ShareButton = ShareButton;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareButton": "sharebutton__shareButton--2q_GE"
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var savebutton_css_1 = __importDefault(__webpack_require__(109));
function SaveButton() {
    return (react_1.default.createElement("button", { className: savebutton_css_1.default.saveButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))));
}
exports.SaveButton = SaveButton;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"saveButton": "savebutton__saveButton--39UcU"
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(5));
var react_redux_1 = __webpack_require__(3);
function usePostsData() {
    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    (0, react_1.useEffect)(function () {
        if (token === 'undefined')
            return;
        axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=2', {
            headers: {
                Authorization: "bearer ".concat(token)
            }
        })
            .then(function (resp) {
            setPosts(resp.data.data.children);
        })
            .catch(console.log);
    }, []);
    return [posts];
}
exports.usePostsData = usePostsData;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("@redux-devtools/extension");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);