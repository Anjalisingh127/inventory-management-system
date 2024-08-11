# inventory-management-system

Welcome to the **Inventory Management System** repository! This JavaScript program is designed to manage an inventory where each item is represented as an object. The system provides functionalities to add, update, and delete items from the inventory, along with utility functions to retrieve and print inventory details.

## Features

- **Add Item**: Add a new item to the inventory.
- **Update Item**: Update the details of an existing item.
- **Delete Item**: Remove an item from the inventory.
- **Get Item**: Retrieve the details of a specific item by its ID.
- **Print Inventory**: Display all items in the inventory in a readable format.

## Item Object

Each item in the inventory is represented as an object with the following properties:

- **ID**: A unique identifier for the item.
- **name**: The name of the item.
- **quantity**: The quantity of the item in stock.
- **price**: The price of the item.

### Example Item Object

```javascript
const item = {
  ID: '001',
  name: 'Widget',
  quantity: 100,
  price: 19.99
};
