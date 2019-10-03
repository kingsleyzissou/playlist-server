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

/***/ "./src/config/apollo.js":
/*!******************************!*\
  !*** ./src/config/apollo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/schema */ "./src/graphql/schema/index.js");
/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/resolvers */ "./src/graphql/resolvers/index.js");



/* harmony default export */ __webpack_exports__["default"] = (new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  introspection: true,
  typeDefs: _graphql_schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
  formatError: error => {
    const message = error.message.replace('SequelizeValidationError: ', '').replace('Validation error: ', '');
    return { ...error,
      message
    };
  }
}));

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var envy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! envy */ "envy");
/* harmony import */ var envy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(envy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const root = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '../', '../');
const options = {
  root,
  public: path__WEBPACK_IMPORTED_MODULE_1___default.a.join(root, '/public'),
  mongo: {
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};
const config = { ...options,
  ...envy__WEBPACK_IMPORTED_MODULE_0___default()()
};
/* harmony default export */ __webpack_exports__["default"] = (config);
/* WEBPACK VAR INJECTION */}.call(this, "src/config"))

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config/config.js");




/* harmony default export */ __webpack_exports__["default"] = (app => {
  app.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()());
  app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(_config__WEBPACK_IMPORTED_MODULE_3__["default"].public));
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({
    extended: true
  }));
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());
});

/***/ }),

/***/ "./src/config/logger.js":
/*!******************************!*\
  !*** ./src/config/logger.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);

const {
  combine,
  colorize,
  simple,
  json
} = winston__WEBPACK_IMPORTED_MODULE_0__["format"];
const logger = Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
  level: 'debug',
  format: json(),
  transports: [new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].File({
    filename: 'error.log',
    level: 'error'
  }), new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].File({
    filename: 'combined.log'
  })]
});

if (true) {
  logger.add(new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console({
    format: combine(colorize(), simple())
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./src/graphql/resolvers/artist.js":
/*!*****************************************!*\
  !*** ./src/graphql/resolvers/artist.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./src/models/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    artists: async () => _models__WEBPACK_IMPORTED_MODULE_0__["artist"].find({}),
    artist: async (_, {
      _id
    }) => _models__WEBPACK_IMPORTED_MODULE_0__["artist"].findById({
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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./src/models/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    playlist: async (_, {
      _id
    }) => _models__WEBPACK_IMPORTED_MODULE_0__["playlist"].findById({
      _id
    }),
    playlists: async () => _models__WEBPACK_IMPORTED_MODULE_0__["playlist"].find({})
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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./src/models/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    songs: async () => _models__WEBPACK_IMPORTED_MODULE_0__["song"].find({}).populate(),
    song: async (_, {
      _id
    }) => _models__WEBPACK_IMPORTED_MODULE_0__["song"].findById({
      _id
    }).populate()
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
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/apollo */ "./src/config/apollo.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/config */ "./src/config/config.js");
/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/logger */ "./src/config/logger.js");
/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/express */ "./src/config/express.js");


 // import connect from './config/connection';




const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].port || 4000;

const connect = () => {
  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].dbHost, _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].mongo.options);
  return mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection;
};

const listen = () => {
  if (app.get('env') === 'test') return;
  app.listen(port);
  _config_logger__WEBPACK_IMPORTED_MODULE_4__["default"].info(`App started on http://localhost:${port}`);
};

const connection = connect();
Object(_config_express__WEBPACK_IMPORTED_MODULE_5__["default"])(app);
_config_apollo__WEBPACK_IMPORTED_MODULE_2__["default"].applyMiddleware({
  app,
  path: '/graphql'
});
connection.on('error', err => _config_logger__WEBPACK_IMPORTED_MODULE_4__["default"].error(err)).on('disconnected', connect).on('open', listen);

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


const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
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

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: song, playlist, artist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist */ "./src/models/playlist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playlist", function() { return _playlist__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist */ "./src/models/artist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "artist", function() { return _artist__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song */ "./src/models/song.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "song", function() { return _song__WEBPACK_IMPORTED_MODULE_2__["default"]; });






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


const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
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


const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
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

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

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

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=main.map