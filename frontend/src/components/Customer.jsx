import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Customer() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch orders data from API
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders'); // Replace with your actual API endpoint
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    // Filter and sort orders based on search term and status
    let filtered = orders.filter(order => 
      order.order_description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    filtered.sort((a, b) => a.order_status.localeCompare(b.order_status));
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-white font-bold">Customer Details</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search orders..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full md:w-80"
          />
          <span className="absolute right-2 top-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.415 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-2">
        <div className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-4xl font-bold">{orders.length}</p>
        </div>
        {/* Add more summary cards here if needed */}
      </div>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b px-4 py-2 text-left">Order ID</th>
            <th className="border-b px-4 py-2 text-left">Description</th>
            <th className="border-b px-4 py-2 text-left">Status</th>
            <th className="border-b px-4 py-2 text-left">Created At</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-100">
                <td className="border-b px-4 py-2">{order.order_id}</td>
                <td className="border-b px-4 py-2">{order.order_description}</td>
                <td className={`border-b px-4 py-2 text-${getStatusColor(order.order_status)}-600`}>
                  {order.order_status.charAt(0).toUpperCase() + order.order_status.slice(1)}
                </td>
                <td className="border-b px-4 py-2">{new Date(order.order_createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
            <div className="text-gray-600">Page {currentPage} of {totalPages}</div>
            <div className="flex space-x-2">
            {[...Array(totalPages).keys()].map((pageNumber) => (
                <button
                key={pageNumber + 1}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`px-4 py-2 border rounded-lg ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                >
                {pageNumber + 1}
                </button>
            ))}
            </div>
      </div>
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case 'pending':
      return 'yellow';
    case 'started':
      return 'blue';
    case 'completed':
      return 'green';
    case 'rejected':
      return 'red';
    default:
      return 'gray';
  }
}

export default Customer;
