import * as z from 'zod';

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

export default orderSchema;