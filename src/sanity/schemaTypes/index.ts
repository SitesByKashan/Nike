import { type SchemaTypeDefinition } from 'sanity';
import { productSchema } from './products';
import { userSchema } from './user';
import { orderSchema } from './orders';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, userSchema, orderSchema],
};
