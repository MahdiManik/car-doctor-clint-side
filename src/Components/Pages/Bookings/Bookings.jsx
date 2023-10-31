import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import UseAxios from "../../Hook/UseAxios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = UseAxios();

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:7000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
          }
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        });
    }
  };

  const handleBookingConfirm = (id) => {
    const proceed = confirm("Are you sure you want to confirm?");
    if (proceed) {
      fetch(`http://localhost:7000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("confirm successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            const updated = bookings.find((booking) => booking._id === id);
            updated.status = "confirm";
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          }
        });
    }
  };

  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url, axiosSecure]);

  return (
    <div>
      <h3>booking: {bookings.length}</h3>

      <div className="overflow-x-full">
        <table className="table">
          <thead className="bg-[#2524243b] text-black">
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
