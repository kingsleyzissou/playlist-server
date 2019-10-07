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

/***/ "./src/api/routes/index.js":
/*!*********************************!*\
  !*** ./src/api/routes/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((app, passport) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Hello world'
    });
  });
  app.get('/login', (req, res) => {
    res.send({
      message: 'Cool beans'
    });
  });
  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) return next(err);
      if (!user) res.send({
        message: 'Failed to sign in'
      });
      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(user.toJSON(), _config__WEBPACK_IMPORTED_MODULE_1__["default"].jwtSecret);
      return res.status(201).send({
        message: 'Success',
        user,
        token
      });
    })(req, res, next);
  });
  app.get('/paywall', (req, res, next) => {
    passport.authenticate('jwt', {
      session: false
    }, (err, user) => {
      if (err) return next(err);
      return res.status(201).send({
        message: 'Success',
        user
      });
    })(req, res, next);
  });
});

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);


dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();
/* harmony default export */ __webpack_exports__["default"] = ({
  port: process.env.PORT || 4000,
  root: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../', '../'),
  dbHost: process.env.DB_HOST,
  jwtSecret: process.env.JWT_SECRET,
  mongo: {
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "src/config"))

/***/ }),

/***/ "./src/config/passport/jwt.js":
/*!************************************!*\
  !*** ./src/config/passport/jwt.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "./src/models/user.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/config/index.js");
/* harmony import */ var _utilities_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/logger */ "./src/utilities/logger.js");




const options = {
  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_0__["ExtractJwt"].fromAuthHeaderAsBearerToken(),
  secretOrKey: _index__WEBPACK_IMPORTED_MODULE_2__["default"].jwtSecret
};
const strategy = new passport_jwt__WEBPACK_IMPORTED_MODULE_0__["Strategy"](options, async (payload, done) => {
  const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__["default"].findById(payload._id).catch(err => _utilities_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error(err));
  if (!user) return done(null, false);
  return done(null, user);
});
/* harmony default export */ __webpack_exports__["default"] = (strategy);

/***/ }),

/***/ "./src/config/passport/local.js":
/*!**************************************!*\
  !*** ./src/config/passport/local.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "./src/models/user.js");


const login = new passport_local__WEBPACK_IMPORTED_MODULE_0___default.a({
  usernameField: 'username',
  passwordField: 'password',
  session: false
}, async (username, password, done) => {
  const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    username
  }).catch(err => done(err));
  if (!user) return done(null, false);
  const verified = user.verifyPassword(password, user.password);
  if (!verified) return done(null, false);
  return done(null, user);
});
/* harmony default export */ __webpack_exports__["default"] = (login);

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
    artists: async () => _models_artist__WEBPACK_IMPORTED_MODULE_0__["default"].find({}),
    artist: async (_, {
      _id
    }) => _models_artist__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
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
    }) => _models_playlist__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
      _id
    }),
    playlists: async () => _models_playlist__WEBPACK_IMPORTED_MODULE_0__["default"].find({})
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
    songs: async () => _models_song__WEBPACK_IMPORTED_MODULE_0__["default"].find({}).populate(),
    song: async (_, {
      _id
    }) => _models_song__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
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
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/logger */ "./src/utilities/logger.js");
/* harmony import */ var _servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servers */ "./src/servers/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/config/index.js");





const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const server = {
  start: async () => {
    Object(_servers__WEBPACK_IMPORTED_MODULE_3__["default"])(app, passport__WEBPACK_IMPORTED_MODULE_1___default.a, _config__WEBPACK_IMPORTED_MODULE_4__["default"]);
    app.listen(_config__WEBPACK_IMPORTED_MODULE_4__["default"].port, () => {
      _utilities_logger__WEBPACK_IMPORTED_MODULE_2__["default"].info(`App started on http://localhost:${_config__WEBPACK_IMPORTED_MODULE_4__["default"].port}`);
    });
  }
};
server.start();

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
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Artist', artistSchema));

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
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Playlist', playlistSchema));

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
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Song', songSchema));

/***/ }),

/***/ "./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/logger */ "./src/utilities/logger.js");



const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  created_at: Date,
  updated_at: Date
});
userSchema.pre('save', next => {
  if (!undefined.isModified('password')) return next();
  undefined.password = bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(undefined.password, 10);
  return next();
});

userSchema.methods.verifyPassword = async (plain, cipher) => {
  const comparison = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(plain, cipher).catch(err => _utilities_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error(err));
  return comparison;
};

/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema));

/***/ }),

/***/ "./src/servers/apollo.js":
/*!*******************************!*\
  !*** ./src/servers/apollo.js ***!
  \*******************************/
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

/***/ "./src/servers/database.js":
/*!*********************************!*\
  !*** ./src/servers/database.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connect = async ({
  config
}) => {
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(config.dbHost, options);
};

/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ }),

/***/ "./src/servers/express.js":
/*!********************************!*\
  !*** ./src/servers/express.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_passport_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/passport/local */ "./src/config/passport/local.js");
/* harmony import */ var _config_passport_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/passport/jwt */ "./src/config/passport/jwt.js");
/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/routes */ "./src/api/routes/index.js");






/* harmony default export */ __webpack_exports__["default"] = (async (app, passport) => {
  passport.use(_config_passport_local__WEBPACK_IMPORTED_MODULE_3__["default"]);
  passport.use(_config_passport_jwt__WEBPACK_IMPORTED_MODULE_4__["default"]);
  app.use(helmet__WEBPACK_IMPORTED_MODULE_1___default()());
  app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
    extended: true
  }));
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());
  Object(_api_routes__WEBPACK_IMPORTED_MODULE_5__["default"])(app, passport);
});

/***/ }),

/***/ "./src/servers/index.js":
/*!******************************!*\
  !*** ./src/servers/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ "./src/servers/express.js");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apollo */ "./src/servers/apollo.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ "./src/servers/database.js");




const loader = async (app, passport, config) => {
  await Object(_database__WEBPACK_IMPORTED_MODULE_2__["default"])({
    config
  });
  await Object(_express__WEBPACK_IMPORTED_MODULE_0__["default"])(app, passport);
  _apollo__WEBPACK_IMPORTED_MODULE_1__["default"].applyMiddleware({
    app,
    path: '/graphql'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (loader);

/***/ }),

/***/ "./src/utilities/logger.js":
/*!*********************************!*\
  !*** ./src/utilities/logger.js ***!
  \*********************************/
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
  level: 'silly',
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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

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

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

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