'use client';

import { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({} as any);

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Profile</h1>
        <form className="mt-12 flex flex-col gap-4">
          <input type="text" hidden name="id" />
          <label className="text-sm text-gray-700">Full Name</label>
          <input
            type="text"
            name="username"
            placeholder="john"
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={'+1234567'}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            placeholder="1234 Main St, New York, NY 10001"
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <button className="bg-primary text-white p-2 rounded-md cursor-pointer disabled:bg-pink-200 disabled:cursor-not-allowed max-w-96">
            Update
          </button>
        </form>
      </div>
      {/* <div className="w-full md:w-1/2">
            <h1 className="text-2xl">Orders</h1>
            <div className="mt-12 flex flex-col">
              {orderRes.orders.map((order) => (
                <Link
                  href={`/orders/${order._id}`}
                  key={order._id}
                  className="flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100"
                >
                  <span className="w-1/4">{order._id?.substring(0, 10)}...</span>
                  <span className="w-1/4">
                    ${order.priceSummary?.subtotal?.amount}
                  </span>
                  {order._createdDate && (
                    <span className="w-1/4">{format(order._createdDate)}</span>
                  )}
                  <span className="w-1/4">{order.status}</span>
                </Link>
              ))}
            </div>
          </div> */}
    </div>
  );
};

export default ProfilePage;
