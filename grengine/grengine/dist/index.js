"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFbx = exports.Mesh = exports.Camera = exports.GameObject = exports.Engine = void 0;
var engine_1 = require("./engine");
Object.defineProperty(exports, "Engine", { enumerable: true, get: function () { return engine_1.Engine; } });
var game_object_1 = require("./game_object");
Object.defineProperty(exports, "GameObject", { enumerable: true, get: function () { return game_object_1.GameObject; } });
var camera_1 = require("./camera");
Object.defineProperty(exports, "Camera", { enumerable: true, get: function () { return camera_1.Camera; } });
var mesh_1 = require("./mesh");
Object.defineProperty(exports, "Mesh", { enumerable: true, get: function () { return mesh_1.Mesh; } });
var fbx_loader_1 = require("./fbx_loader");
Object.defineProperty(exports, "loadFbx", { enumerable: true, get: function () { return fbx_loader_1.loadFbx; } });
