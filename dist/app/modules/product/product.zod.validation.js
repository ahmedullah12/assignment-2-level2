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
// Define the variants schema
const variantsSchema = z.object({
    type: z
        .string({
        required_error: 'Variant type is required',
        invalid_type_error: 'Variant type must be a string',
    })
        .min(1, { message: 'Variant type must not be empty' }),
    value: z
        .string({
        required_error: 'Variant value is required',
        invalid_type_error: 'Variant value must be a string',
    })
        .min(1, { message: 'Variant value must not be empty' }),
});
// Define the inventory schema
const inventorySchema = z.object({
    quantity: z
        .number({
        required_error: 'Quantity is required',
        invalid_type_error: 'Quantity must be a number',
    })
        .positive({ message: 'Quantity must be a positive number' }),
    inStock: z.boolean({
        required_error: 'InStock status is required',
        invalid_type_error: 'InStock must be a boolean',
    }),
});
// Define the product schema
const productSchema = z.object({
    name: z
        .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    })
        .min(1, { message: 'Name must not be empty' }),
    description: z
        .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
    })
        .min(1, { message: 'Description must not be empty' }),
    price: z
        .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a number',
    })
        .positive({ message: 'Price must be a positive number' }),
    category: z
        .string({
        required_error: 'Category is required',
        invalid_type_error: 'Category must be a string',
    })
        .min(1, { message: 'Category must not be empty' }),
    tags: z.array(z
        .string({
        required_error: 'Tag is required',
        invalid_type_error: 'Tag must be a string',
    })
        .min(1, { message: 'Tag must not be empty' }), {
        required_error: 'Tags are required',
        invalid_type_error: 'Tags must be an array of strings',
    }),
    variants: z.array(variantsSchema, {
        required_error: 'Variants are required',
        invalid_type_error: 'Variants must be an array of objects',
    }),
    inventory: inventorySchema,
});
exports.default = productSchema;
