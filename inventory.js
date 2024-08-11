// Inventory Management System

// Initialize an empty inventory
const inventory = [];

// Function to add an item to the inventory
function addItem(inventory, item) {
  inventory.push(item);
}

// Function to update an existing item's details
function updateItem(inventory, id, newDetails) {
  const item = inventory.find(i => i.ID === id);
  if (item) {
    Object.assign(item, newDetails);
  }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
  const index = inventory.findIndex(i => i.ID === id);
  if (index !== -1) {
    inventory.splice(index, 1);
  }
}

// Function to get an item by its ID
function getItem(inventory, id) {
  return inventory.find(i => i.ID === id);
}

// Function to print the inventory in a readable format
function printInventory(inventory) {
  console.log('Inventory:');
  inventory.forEach(item => {
    console.log(`ID: ${item.ID}, Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}`);
  });
}

// Example Usage

// Define a new item
const newItem = {
  ID: '001',
  name: 'Widget',
  quantity: 100,
  price: 19.99
};

// Add the new item to the inventory
addItem(inventory, newItem);

// Print the inventory
printInventory(inventory);

// Update the item
const updatedDetails = {
  quantity: 150
};
updateItem(inventory, '001', updatedDetails);

// Print the updated inventory
printInventory(inventory);

// Delete the item
deleteItem(inventory, '001');

// Print the inventory after deletion
printInventory(inventory);
