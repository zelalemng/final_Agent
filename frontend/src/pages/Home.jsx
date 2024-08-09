import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [orderCount, setOrderCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    // Fetch order data
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrderCount(response.data.length); // Assuming response.data is an array of orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    // Fetch category data
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategoryCount(response.data.length); // Assuming response.data is an array of categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchOrders();
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Card */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-4xl font-bold">{orderCount}</p>
        </div>

        {/* Category Card */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Categories</h2>
          <p className="text-4xl font-bold">{categoryCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
