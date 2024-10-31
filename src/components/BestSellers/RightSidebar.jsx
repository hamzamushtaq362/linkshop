import React from "react";

function RightSidebar() {
  return (
    <div className="bg-white p-4 rounded shadow">
      {/* Best Deals Section */}
      <h3 className="font-bold mb-4">BEST DEALS</h3>
      <ul className="space-y-4">
        <li className="text-sm">
          <strong>Dale Carnegie 6 Urdu...</strong> -{" "}
          <span className="text-red-600">Rs. 2,350</span>{" "}
          <span className="line-through text-gray-500">Rs. 2,900</span>
        </li>
        <li className="text-sm">
          <strong>Nazia Kamran Kashif...</strong> -{" "}
          <span className="text-red-600">Rs. 7,750</span>{" "}
          <span className="line-through text-gray-500">Rs. 11,100</span>
        </li>
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
}

export default RightSidebar;
