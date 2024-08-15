"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="px-2 sm:px-10 mt-5 mb-12">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left side - Cart Items */}
        <div className="w-full lg:w-2/3 pr-4">
          <h1 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-4">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex justify-between items-center rounded-md shadow-lg mb-4 p-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-[100px] sm:w-[150px] h-[150px] object-cover rounded-lg"
                    />
                    <div>
                      <div>
                        <p className="font-bold text-lg sm:text-3xl">
                          {item.name}
                        </p>
                        <p className="text-xs text-green-500">In stock</p>
                        <p className="text-xs text-gray-500">
                          {item.price > 100
                            ? "Eligible for FREE shipping"
                            : "Not eligible for FREE shipping"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-5 ">
                    <div>
                      <label className="text-sm mr-2">Qty:</label>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="border p-1 text-sm"
                      >
                        {[...Array(10).keys()].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm rounded-lg"
                    >
                      <RiDeleteBin6Fill size={30} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Subtotal and Proceed to Buy */}
        <div className="w-full lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
          <div className="border p-4 rounded-lg shadow-lg bg-white sticky top-10">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="w-full h-4 bg-green-600 rounded-full"></div>
                <p className="">$100</p>
              </div>
              <p className="text-sm">
                Your order is eligible for FREE Delivery.
              </p>
              <p className="text-sm text-green-600">
                Choose FREE Delivery option at checkout.
              </p>
            </div>
            <div className="mb-4 border-b pb-4">
              <p className="text-lg font-semibold">
                Subtotal ({cartItems.length} items):
              </p>
              <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
              <label className="flex items-center mt-2 text-sm">
                <input type="checkbox" className="mr-2" />
                This order contains a gift
              </label>
            </div>
            <Link href={"/checkout"}>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg">
                Proceed to Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
