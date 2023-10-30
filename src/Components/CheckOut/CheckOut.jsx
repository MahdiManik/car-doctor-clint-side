import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();

  const { title, price, service_id, img } = service;

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const phone = user?.phoneNumber;
    const date = form.date.value;
    const quantity = form.quantity.value;
    const email = user?.email;
    const message = form.message.value;

    const booking = {
      service_id,
      img,
      name,
      title,
      email,
      date,
      quantity,
      phone,
      price,
      message,
    };
    console.log(booking);

    fetch("http://localhost:7000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("booking completed");
        }
      });
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-bold pb-10 text-black">
        Book service: {title}{" "}
      </h3>

      <form onSubmit={handleOrder} className="bg-[#f3f3f3] p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              type="name"
              placeholder="Name"
              className="bg-white input text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Order Time</span>
            </label>
            <input
              name="date"
              type="date"
              placeholder="order time"
              className="bg-white input text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Phone number</span>
            </label>
            <input
              defaultValue={user?.phoneNumber}
              name="phone"
              type="phone"
              placeholder="phone"
              className="bg-white input text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Product quantity</span>
            </label>
            <input
              defaultValue={"1"}
              name="quantity"
              type="number"
              placeholder="Product quantity"
              className="bg-white input text-black"
              required
            />
          </div>
          <div className="form-control text-black">
            <label className="label">
              <span className="label-text text-black">Price</span>
            </label>
            <input
              defaultValue={"$" + price}
              type="price"
              placeholder="Price"
              className="bg-white input text-black "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              placeholder="Email"
              className="bg-white input text-black"
              required
            />
          </div>
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea bg-white textarea-lg w-full text-black"
        ></textarea>
        <input
          className="btn btn-block btn-outline mt-5 hover:bg-[#ff3811] border-[#ff3811] text-[#ff3811]"
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default CheckOut;
