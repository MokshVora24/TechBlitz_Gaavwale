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
    <div id="order-groceries" className="h-1/2 container mx-auto p-8 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center mt-[300px]">Order Groceries</h1>
      <div className="flex flex-col items-center justify-center mb-4">
        <label htmlFor="groceryItem" className="mb-2">Item:</label>
        <input
          type="text"
          id="groceryItem"
          name="groceryItem"
          className="border border-gray-300 px-4 py-2 mb-2 rounded"
          placeholder="Enter grocery item"
          value={groceryItem}
          onChange={handleChange}
        />
        <label htmlFor="quantity" className="mb-2">Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          className="border border-gray-300 px-4 py-2 mb-2 rounded"
          placeholder="Enter quantity"
          value={quantity}
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
