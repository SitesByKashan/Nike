export const orderSchema = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'orderId',
      type: 'string',
      title: 'Order ID',
    },
    {
      name: 'customer',
      type: 'object',
      title: 'Customer',
      fields: [
        { name: 'firstName', type: 'string', title: 'First Name' },
        { name: 'lastName', type: 'string', title: 'Last Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'address', type: 'string', title: 'Address' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          type: 'object',
          name: 'orderItem',
          title: 'Order Item',
          fields: [
            { name: 'name', type: 'string', title: 'Item Name' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
            { name: 'price', type: 'number', title: 'Price' },
          ],
        },
      ],
    },
    {
      name: 'totalAmount',
      type: 'string',
      title: 'Total Amount',
    },
  ],
};
