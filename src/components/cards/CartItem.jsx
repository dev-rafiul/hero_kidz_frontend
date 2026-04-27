"use client"

import { handleCart, deleteItemFromCart } from "@/actions/server/cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const unitPrice = Number(item?.price) || 0;
  const lineTotal = unitPrice * (item?.quantity || 0);

  const onIncrease = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to increment this product?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, increment",
      cancelButtonText: "Cancel",
    });
    if (!confirm.isConfirmed) return;

    setIsLoading(true);
    const result = await handleCart({ product: { _id: item?.productId }, inc: true });
    if (result?.success) {
      Swal.fire("Incremented", `${item?.title} quantity increased`, "success");
    } else {
      Swal.fire("Oops", "Could not increase quantity", "error");
    }
    router.refresh();
    setIsLoading(false);
  };

  const onDecrease = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to decrement this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, decrement",
      cancelButtonText: "Cancel",
    });
    if (!confirm.isConfirmed) return;

    setIsLoading(true);
    const result = await handleCart({ product: { _id: item?.productId }, inc: false });
    if (result?.success) {
      Swal.fire("Decremented", `${item?.title} quantity decreased`, "success");
    } else {
      Swal.fire("Oops", "Could not decrease quantity", "error");
    }
    router.refresh();
    setIsLoading(false);
  };

  const onRemove = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to delete this product from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove",
      cancelButtonText: "Cancel",
    });
    if (!confirm.isConfirmed) return;

    setIsLoading(true);
    const result = await deleteItemFromCart(item?.productId);
    if (!result?.success) {
      Swal.fire("Oops", "Could not remove from cart", "error");
    }
    router.refresh();
    setIsLoading(false);
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-base-200">
        <Image
          src={item?.image}
          alt={item?.title || "Cart item"}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item?.title}</h3>
        <p className="text-sm text-base-content/70">Unit: ${unitPrice.toFixed(2)}</p>
        <p className="text-primary font-bold">Subtotal: ${lineTotal.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onDecrease}
          disabled={isLoading}
          className="btn btn-sm btn-outline"
          aria-label="Decrease quantity"
        >
          <FaMinus />
        </button>
        <span className="min-w-8 text-center font-medium">{item?.quantity}</span>
        <button
          onClick={onIncrease}
          disabled={isLoading}
          className="btn btn-sm btn-outline"
          aria-label="Increase quantity"
        >
          <FaPlus />
        </button>
      </div>

      <button
        onClick={onRemove}
        disabled={isLoading}
        className="btn btn-sm btn-error text-white flex items-center gap-2"
      >
        <FaTrash />
        Remove
      </button>
    </div>
  );
};

export default CartItem;