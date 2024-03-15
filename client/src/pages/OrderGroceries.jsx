import React, { useState } from 'react';

const OrderGroceriesPage = () => {
  const [groceryItem, setGroceryItem] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  const handleChange = (e) => {
    setGroceryItem(e.target.value);
  };

  const handleAddGrocery = () => {
    if (groceryItem.trim() !== '') {
      setGroceryList([...groceryList, groceryItem]);
      setGroceryItem('');
    }
  };

  const handlePlaceOrder = () => {
    // Your logic for placing the order goes here
    alert('Order placed successfully!');
    setGroceryList([]);
  };

  const handleClearList = () => {
    setGroceryList([]);
  };

  return (
    <div id="order-groceries" className="h-screen container mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center mt-[300px]">Order Groceries</h1>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 mr-2 rounded"
          placeholder="Enter grocery item"
          value={groceryItem}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddGrocery}
        >
          Add
        </button>
      </div>
      <ul className="mb-4">
        {groceryList.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default OrderGroceriesPage;
