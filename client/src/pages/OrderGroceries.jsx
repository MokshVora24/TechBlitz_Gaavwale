import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const OrderGroceriesPage = () => {
  const [groceryItem, setGroceryItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'groceryItem') {
      setGroceryItem(value);
    } else if (name === 'quantity') {
      setQuantity(value);
    }
  };

  const handleAddGrocery = () => {
    if (groceryItem.trim() !== '') {
      const newItem = `${quantity} ${groceryItem}`;
      setGroceryList([...groceryList, newItem]);
      setGroceryItem('');
      setQuantity('');
    }
  };

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully!');
    setGroceryList([]);
  };

  const handleClearList = () => {
    setGroceryList([]);
  };

  return (
    <div id='order-groceries' className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Order Groceries</h1>
        <div className="mb-6">
          <label htmlFor="groceryItem" className="block text-gray-700 mb-2">Item:</label>
          <input
            type="text"
            id="groceryItem"
            name="groceryItem"
            className="border border-gray-300 px-4 py-2 mb-2 rounded w-full"
            placeholder="Enter grocery item"
            value={groceryItem}
            onChange={handleChange}
          />
          <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="border border-gray-300 px-4 py-2 mb-2 rounded w-full"
            placeholder="Enter quantity"
            value={quantity}
            onChange={handleChange}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
            onClick={handleAddGrocery}
          >
            Add
          </button>
        </div>
        <ul className="mb-6">
          {groceryList.map((item, index) => (
            <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{item}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2 w-1/2"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ml-2 w-1/2"
            onClick={handleClearList}
          >
            Clear List
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderGroceriesPage;
