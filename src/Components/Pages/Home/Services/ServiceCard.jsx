import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card shadow-2xl h-96 rounded-lg">
      <figure className="p-5">
        <img src={img} className="h-[200px] rounded-lg" alt="service of car" />
      </figure>
      <div className="card-body gap-4">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions items-center justify-between text-[#ff3811]">
          <p className="">Price: ${price}</p>
          <p className=" text-xl">
            <BiRightArrowAlt />
          </p>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
