import React, { useState, useEffect } from 'react';

const order = () => {
  const [orders, setOrders] = useState([]);  // State for orders
  const [newOrder, setNewOrder] = useState({ pickup: '', destination: '', weight: '' });
  const [error, setError] = useState('');

  // Fetch orders from backend
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/orders');
      const data = await response.json();
      console.log('Fetched Orders:', data); // Debug: See if orders are being fetched
      setOrders(data);  // Update the state with fetched orders
    } catch (error) {
      setError('Error fetching orders.');
      console.error('Error fetching orders:', error);
    }
  };

  // Place a new order
  const placeOrder = async () => {
    if (!newOrder.pickup || !newOrder.destination || !newOrder.weight) {
      setError('Please fill out all fields.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder),
      });
      if (response.ok) {
        console.log('Order placed successfully!');
        fetchOrders();  // Refetch orders after placing
        setNewOrder({ pickup: '', destination: '', weight: '' });  // Reset the form
      } else {
        setError('Failed to place the order.');
      }
    } catch (error) {
      setError('Failed to connect to the server.');
      console.error('Error placing order:', error);
    }
  };

  // Delete an order
  const handleDeleteOrder = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${id}`, { method: 'DELETE' });
      if (response.ok) {
        console.log('Order deleted successfully!');
        fetchOrders();  // Refresh the orders after deletion
      } else {
        setError('Failed to delete order.');
      }
    } catch (error) {
      setError('Failed to connect to the server.');
      console.error('Error deleting order:', error);
    }
  };

  // Fetch orders when the component mounts
  useEffect(() => {
    fetchOrders();
  }, []);  // Empty dependency array means it will only run on component mount

  return (
    <div>
      <h2>Manage Orders</h2>

      {/* Create Order Form */}
      <div>
        <h3>Place Order</h3>
        <input
          type="text"
          placeholder="Pickup Location"
          value={newOrder.pickup}
          onChange={(e) => setNewOrder({ ...newOrder, pickup: e.target.value })}
        />
        <input
          type="text"
          placeholder="Destination"
          value={newOrder.destination}
          onChange={(e) => setNewOrder({ ...newOrder, destination: e.target.value })}
        />
        <input
          type="number"
          placeholder="Package Weight (kg)"
          value={newOrder.weight}
          onChange={(e) => setNewOrder({ ...newOrder, weight: e.target.value })}
        />
        <button onClick={placeOrder}>Place Order</button>
      </div>

      {/* Order List */}
      <div>
        <h3>Order List</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id}>
              <p>Pickup: {order.pickup}</p>
              <p>Destination: {order.destination}</p>
              <p>Weight: {order.weight} kg</p>
              <p>Status: {order.status}</p>
              <button onClick={() => handleDeleteOrder(order._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No orders placed yet.</p>
        )}
      </div>
    </div>
  );
};

export default order;
