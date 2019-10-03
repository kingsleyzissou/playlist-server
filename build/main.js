require('source-map-support/register');
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apollo/server.js":
/*!******************************!*\
  !*** ./src/apollo/server.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/schema */ "./src/graphql/schema/index.js");
/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/resolvers */ "./src/graphql/resolvers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  introspection: true,
  typeDefs: _graphql_schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
  formatError: error => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message.replace('SequelizeValidationError: ', '').replace('Validation error: ', '');
    return _objectSpread({}, error, {
      message
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var envy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! envy */ "envy");
/* harmony import */ var envy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(envy__WEBPACK_IMPORTED_MODULE_0__);

const config = envy__WEBPACK_IMPORTED_MODULE_0___default()();
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/database/connect.js":
/*!*********************************!*\
  !*** ./src/database/connect.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  let options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_1__["default"].dbHost, options);
});

/***/ }),

/***/ "./src/graphql/resolvers/artist.js":
/*!*****************************************!*\
  !*** ./src/graphql/resolvers/artist.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_artist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/artist */ "./src/models/artist.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    artists: async () => await _models_artist__WEBPACK_IMPORTED_MODULE_0__["default"].find({}),
    artist: async (_, {
      _id
    }) => await _models_artist__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
      _id
    })
  },
  Artist: {
    songs: ({
      songs
    }) => songs
  }
});

/***/ }),

/***/ "./src/graphql/resolvers/index.js":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist */ "./src/graphql/resolvers/playlist.js");
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist */ "./src/graphql/resolvers/artist.js");
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song */ "./src/graphql/resolvers/song.js");



/* harmony default export */ __webpack_exports__["default"] = ([_playlist__WEBPACK_IMPORTED_MODULE_0__["default"], _artist__WEBPACK_IMPORTED_MODULE_1__["default"], _song__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ }),

/***/ "./src/graphql/resolvers/playlist.js":
/*!*******************************************!*\
  !*** ./src/graphql/resolvers/playlist.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_playlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/playlist */ "./src/models/playlist.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    playlist: async (_, {
      _id
    }) => await _models_playlist__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
      _id
    }),
    playlists: async () => await _models_playlist__WEBPACK_IMPORTED_MODULE_0__["default"].find({})
  },
  Playlist: {
    songs: ({
      songs
    }) => songs
  }
});

/***/ }),

/***/ "./src/graphql/resolvers/song.js":
/*!***************************************!*\
  !*** ./src/graphql/resolvers/song.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/song */ "./src/models/song.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    songs: async () => await _models_song__WEBPACK_IMPORTED_MODULE_0__["default"].find({}),
    song: async (_, {
      _id
    }) => await _models_song__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
      _id
    })
  },
  Song: {
    artist: ({
      artist
    }) => artist
  }
});

/***/ }),

/***/ "./src/graphql/schema/artist.js":
/*!**************************************!*\
  !*** ./src/graphql/schema/artist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`

    extend type Query {
        artists: [Artist]
        artist(_id: String): Artist
    }

    type Artist {
        _id: String,
        name: String,
        songs: [Song]
    }

`);

/***/ }),

/***/ "./src/graphql/schema/index.js":
/*!*************************************!*\
  !*** ./src/graphql/schema/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist */ "./src/graphql/schema/playlist.js");
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist */ "./src/graphql/schema/artist.js");
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song */ "./src/graphql/schema/song.js");




const schema = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`

    type Query {
        hello: String
    }

`;
/* harmony default export */ __webpack_exports__["default"] = ([schema, _song__WEBPACK_IMPORTED_MODULE_3__["default"], _artist__WEBPACK_IMPORTED_MODULE_2__["default"], _playlist__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/***/ }),

/***/ "./src/graphql/schema/playlist.js":
/*!****************************************!*\
  !*** ./src/graphql/schema/playlist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`

    extend type Query {
        playlists: [Playlist]
        playlist(_id: String): Playlist
    }

    type Playlist {
        _id: String,
        name: String,
        songs: [Song]
    }

`);

/***/ }),

/***/ "./src/graphql/schema/song.js":
/*!************************************!*\
  !*** ./src/graphql/schema/song.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`

    extend type Query {
        songs: [Song],
        song(_id: String): Song,
    }

    type Song {
        _id: String,
        title: String,
        artist: Artist,
        genre: String,
        playcount: Int,
        favourite: Boolean
    }

`);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apollo/server */ "./src/apollo/server.js");
/* harmony import */ var _database_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/connect */ "./src/database/connect.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config/index.js");




const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
Object(_database_connect__WEBPACK_IMPORTED_MODULE_2__["default"])();
_apollo_server__WEBPACK_IMPORTED_MODULE_1__["default"].applyMiddleware({
  app
});
const port = _config__WEBPACK_IMPORTED_MODULE_3__["default"].port || 4000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}${_apollo_server__WEBPACK_IMPORTED_MODULE_1__["default"].graphqlPath}`);
});

/***/ }),

/***/ "./src/models/artist.js":
/*!******************************!*\
  !*** ./src/models/artist.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-autopopulate */ "mongoose-autopopulate");
/* harmony import */ var mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1__);


const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const artistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'Song',
    autopopulate: true
  }]
});
artistSchema.plugin(mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1___default.a);
const Artist = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Artist', artistSchema);
/* harmony default export */ __webpack_exports__["default"] = (Artist);

/***/ }),

/***/ "./src/models/playlist.js":
/*!********************************!*\
  !*** ./src/models/playlist.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-autopopulate */ "mongoose-autopopulate");
/* harmony import */ var mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1__);


const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const playlistSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'Song',
    autopopulate: true
  }]
});
playlistSchema.plugin(mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1___default.a);
const Playlist = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Playlist', playlistSchema);
/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ }),

/***/ "./src/models/song.js":
/*!****************************!*\
  !*** ./src/models/song.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-autopopulate */ "mongoose-autopopulate");
/* harmony import */ var mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1__);


const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const songSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    autopopulate: true
  },
  genre: String,
  playcount: Number,
  favourite: Boolean
});
songSchema.plugin(mongoose_autopopulate__WEBPACK_IMPORTED_MODULE_1___default.a);
const Song = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Song', songSchema);
/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zissou/Sites/node/playlist/server/src/index.js */"./src/index.js");


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "envy":
/*!***********************!*\
  !*** external "envy" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("envy");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-autopopulate":
/*!****************************************!*\
  !*** external "mongoose-autopopulate" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-autopopulate");

/***/ })

/******/ });
//# sourceMappingURL=main.map