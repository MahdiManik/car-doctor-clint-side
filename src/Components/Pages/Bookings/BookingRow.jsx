import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, title, date, price, status } = booking || {};

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="text-[#222121bf] font-bold text-4xl"
          >
            <TiDelete></TiDelete>
          </button>
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-32 h-32">
            <img src={img} alt="Service Image" />
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold text-black text-lg">{title}</div>
          <div className="text-sm opacity-50">Color : Green</div>
          <div className="text-sm opacity-50">Size : S</div>
        </div>
      </td>
      <td className="text-black font-bold">$ {price}</td>
      <td className="text-black font-bold">{date}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-[#ff3811] py-1 px-5">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

BookingRow.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
  handleBookingConfirm: PropTypes.func,
};

export default BookingRow;
