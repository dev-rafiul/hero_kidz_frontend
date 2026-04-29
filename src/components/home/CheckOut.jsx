"use client"
import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import Swal from "sweetalert2";

const CheckOut = ({ cartItems = [] }) => {
    const session = useSession()
    const router = useRouter()
  const [form, setForm] = useState({

  });

const totalPrice = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0), [cartItems])
const totalItems = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0), [cartItems])


//   const handleSubmit = async(e) => {
//     e.preventDefault();
   

//     const form = e.target;

//     const payload = {
//         name: form.name.value,
//         email: form.email.value, 
//         contact: form.contactNo.value, 
//         address: form.address.value, 
//         instruction: form.specialInstruction.value
//     }

//     const result = await createOrder(payload)
//     if(result.success){
//         Swal("success", "Order Added", "success")
//     }
//     else {
//         Swal("error", "Something Went Wrong", "error")
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formEl = e.target;

  const payload = {
    name: formEl.name.value,
    email: formEl.email.value,
    contact: formEl.contactNo.value,
    address: formEl.address.value,
    instruction: formEl.specialInstruction.value,
  };
  console.log(payload)

  const result = await createOrder(payload);

  if (result.success) {
    Swal.fire({
  icon: "success",
  title: "Order Added",
});
router.push("/")
  } else {
    Swal.fire({
  icon: "error",
  title: "Something Went Wrong",
});
router.push('/cart')

  }
};

  if(session.status === "loading"){
    return <h2>Loading....</h2>
  }


  return (
    <div className="flex gap-6">
      <div className="w-2/3">
        <h2 className="text-2xl font-semibold mb-4">
          Delivery Information
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-base-100 p-6 shadow-md rounded-lg"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={session?.data?.user?.name}
            //   onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              readOnly
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={session?.data?.user?.email}
            //   onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              readOnly
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              name="contactNo"
              value={form.contact}
            //   onChange={handleChange}
              placeholder="01XXXXXXXXX"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={form.address}
            //   onChange={handleChange}
              placeholder="Street address, area"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* City + Postal */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                // onChange={handleChange}
                placeholder="City"
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-1 font-medium">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={form.postalCode}
                // onChange={handleChange}
                placeholder="Postal Code"
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block mb-1 font-medium">
              Delivery Notes (Optional)
            </label>
            <textarea
              name="specialInstruction"
              value={form.notes}
            //   onChange={handleChange}
              placeholder="Any special instructions..."
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Check Out with Cash On Delivery
          </button>
        </form>
      </div>

      {/* Optional Cart Summary */}
      <div className="w-1/3 bg-base-100 p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            
<div>
        {cartItems?.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
                <div>

            <span>{item.title}</span>
            <span>${item.quantity} x {item.price}</span>
          </div>
          <p className="font-semibold">{item.quantity * item.price}</p>
                </div>


))}
</div>
      </div>
    </div>
  );
};

export default CheckOut;