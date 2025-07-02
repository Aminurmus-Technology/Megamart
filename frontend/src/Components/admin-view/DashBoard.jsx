import { useState, useEffect } from "react";
import { fetchOrders } from "../../services/api";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const ordersPerPage = 20;

  // Fetch orders from the database
  useEffect(() => {
    async function getOrders() {
      try {
        const response = await fetchOrders();
        setOrders(response.data);
        setFilteredOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    getOrders();
  }, []);

  useEffect(() => {
    setFilteredOrders(
      statusFilter ? orders.filter((order) => order.status === statusFilter) : orders
    );
    setCurrentPage(1);
  }, [statusFilter, orders]);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const displayedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="mb-6 flex gap-4">
        <select
          className="p-3 border rounded w-64"
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter}
        >
          <option value="">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Date & Time</th>
              <th className="p-3 text-left">Delivery Address</th>
              <th className="p-3 text-left">Payment Method</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order) => (
              <tr
                key={order._id}
                className="border-b cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedOrder(order)}
              >
                <td className="p-3">{order._id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.deliveryAddress}</td>
                <td className="p-3">{order.paymentMethod}</td>
                <td className={`p-3 font-semibold ${getStatusColor(order.status)}`}>{order.status}</td>
                <td className="p-3">
                  <select
                    className="p-2 border rounded"
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <p><strong>Customer:</strong> {selectedOrder.customer}</p>
            <p><strong>Date:</strong> {selectedOrder.date}</p>
            <p><strong>Delivery Address:</strong> {selectedOrder.deliveryAddress}</p>
            <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
            <h3 className="font-semibold mt-4">Products:</h3>
            <ul>
              {selectedOrder.products.map((product, index) => (
                <li key={index} className="mt-2">
                  {product.name} - {product.quantity} x ₹{product.price} = ₹{product.quantity * product.price}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total Amount: ₹{selectedOrder.products.reduce((acc, p) => acc + p.quantity * p.price, 0)}</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setSelectedOrder(null)}>Close</button>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case "Pending":
      return "text-yellow-600";
    case "Shipped":
      return "text-green-600";
    case "Delivered":
      return "text-purple-600";
    default:
      return "text-gray-600";
  }
}