"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var extension_1 = require("@prisma/client/extension");
exports.prisma = global.prisma ||
    new extension_1.PrismaClientExtends();
if (process.env.NODE_ENV !== 'production')
    global.prisma = exports.prisma;
