"use client";
import React, { useMemo } from "react";
import CartItem from "../cards/CartItem";

const Cart = ({ cartItem = [] }) => {
  const items = cartItem;
  const totalItems = useMemo(
    () => items.reduce((acm, item) => acm + item.quantity, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((acm, item) => acm + Number(item.price) * item.quantity, 0),
    [items]
  );
  const shipping = subtotal > 0 ? 5 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="space-y-4">
      <p className="py-3">
        <span className="text-primary font-semibold">{totalItems}</span> items in
        the cart
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem
              key={item?._id || item?.productId}
              item={{ ...item, _id: item._id.toString() }}
            />
          ))}

          {items.length === 0 && (
            <div className="border rounded-xl p-8 text-center text-base-content/70">
              Your cart is empty.
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-xl p-5 shadow-sm bg-base-100 lg:sticky lg:top-24 space-y-4">
            <h3 className="text-xl font-bold">Order Summary</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="divider my-1"></div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>

            <button className="btn btn-primary w-full" disabled={items.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;