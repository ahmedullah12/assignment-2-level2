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
Object.defineProperty(exports, "__esModule", { value: true });
const z = __importStar(require("zod"));
const orderSchema = z.object({
    email: z
        .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
    })
        .email({ message: 'Invalid email address' }),
    productId: z.string({
        required_error: 'Product ID is required',
        invalid_type_error: 'Product ID must be a string',
    }),
    price: z
        .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a number',
    })
        .positive({ message: 'Price must be a positive number' }),
    quantity: z
        .number({
        required_error: 'Quantity is required',
        invalid_type_error: 'Quantity must be a number',
    })
        .positive({ message: 'Quantity must be a positive number' })
        .int({ message: 'Quantity must be an integer' }),
});
exports.default = orderSchema;
