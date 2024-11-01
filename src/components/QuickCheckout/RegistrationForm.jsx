import React from "react";

const RegistrationForm = () => {
  return (
    <div className="w-[30%] space-y-8 p-4 bg-gray-50 rounded-lg">
      {/* Login or Register Section */}
      <div className="p-4 bg-white border border-gray-300 rounded-md">
        <h3 className="text-md font-semibold mb-2">LOGIN OR REGISTER</h3>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="auth" className="form-radio" />
            <span>Login</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="auth" className="form-radio" />
            <span>Register</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="auth" className="form-radio" />
            <span>Guest</span>
          </label>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="p-4 bg-white border border-gray-300 rounded-md">
        <h3 className="text-md font-semibold mb-2">YOUR PERSONAL DETAILS</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name *
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-Mail"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium">
              Telephone *
            </label>
            <input
              type="tel"
              id="telephone"
              placeholder="Telephone"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="p-4 bg-white border border-gray-300 rounded-md">
        <h3 className="text-md font-semibold mb-2">BILLING ADDRESS</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Complete Address *
            </label>
            <input
              type="text"
              id="address"
              placeholder="Complete Address"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              City *
            </label>
            <input
              type="text"
              id="city"
              placeholder="City"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium">
              Post Code / Zip Code *
              <span className="text-xs block text-gray-500">
                If you are not from Pakistan
              </span>
            </label>
            <input
              type="text"
              id="postcode"
              placeholder="Post Code"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Country *
            </label>
            <select
              id="country"
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option>Pakistan</option>
              <option>India</option>
              <option>United States</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium">
              Region / State *
            </label>
            <select
              id="region"
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option>Punjab</option>
              <option>Sindh</option>
              <option>Khyber Pakhtunkhwa</option>
              {/* Add more regions/states as needed */}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="sameAddress" className="form-checkbox" />
            <label htmlFor="sameAddress" className="text-sm">
              My delivery and billing addresses are the same.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
