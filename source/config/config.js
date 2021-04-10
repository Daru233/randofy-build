"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SERVER_HOSTNAME = process.env.HOSTNAME || "0.0.0.0"
var PORT = process.env.PORT;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: PORT
};
var config = {
    server: SERVER
};
exports.default = config;
