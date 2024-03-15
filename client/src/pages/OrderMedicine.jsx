import React, { useState } from 'react';

const OrderMedicinePage = () => {
  const [medicine, setMedicine] = useState('');
  const [medicineList, setMedicineList] = useState([]);

  const handleChange = (e) => {
    setMedicine(e.target.value);
  };

  const handleAddMedicine = () => {
    if (medicine.trim() !== '') {
      setMedicineList([...medicineList, medicine]);
      setMedicine('');
    }
  };

  const handlePlaceOrder = () => {
    // Your logic for placing the order goes here
    alert('Order placed successfully!');
    setMedicineList([]);
  };

  const handleClearList = () => {
    setMedicineList([]);
  };

  return (
    <div id="order-medicines" className="h-screen container mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center mt-[300px]">Order Medicines</h1>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 mr-2 rounded"
          placeholder="Enter medicine name"
          value={medicine}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddMedicine}
        >
          Add
        </button>
      </div>
      <ul className="mb-4">
        {medicineList.map((item, index) => (
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

export default OrderMedicinePage;
