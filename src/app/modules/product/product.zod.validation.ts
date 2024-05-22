import * as z from 'zod';

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
  tags: z.array(
    z
      .string({
        required_error: 'Tag is required',
        invalid_type_error: 'Tag must be a string',
      })
      .min(1, { message: 'Tag must not be empty' }),
    {
      required_error: 'Tags are required',
      invalid_type_error: 'Tags must be an array of strings',
    },
  ),
  variants: z.array(variantsSchema, {
    required_error: 'Variants are required',
    invalid_type_error: 'Variants must be an array of objects',
  }),
  inventory: inventorySchema,
});

export default productSchema;
