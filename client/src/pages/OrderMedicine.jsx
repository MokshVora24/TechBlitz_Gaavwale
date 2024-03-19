import React, { useState } from 'react';
import toast from 'react-hot-toast';

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
    toast.success('Order placed successfully!');
    setMedicineList([]);
  };

  const handleClearList = () => {
    setMedicineList([]);
  };

  return (
    <div id='order-medicines' className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Order Medicines</h1>
        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 mr-2 rounded w-3/4"
            placeholder="Enter medicine name"
            value={medicine}
            onChange={handleChange}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAddMedicine}
          >
            Add
          </button>
        </div>
        <ul className="mb-4">
          {medicineList.map((item, index) => (
            <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{item}</li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2 w-full md:w-1/2"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ml-2 w-full md:w-1/2"
            onClick={handleClearList}
          >
            Clear List
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderMedicinePage;
