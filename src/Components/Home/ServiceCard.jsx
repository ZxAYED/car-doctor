import { Link } from "react-router-dom";

const ServiceCard = ({ items }) => {
  const { _id,img, title, price } = items;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="700"
      className="  "
    >
      <div className="card  shadow-2xl">
        <figure className="px-5 pt-5">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-60 object-cover  "
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold ">{title}</h2>
          <p className="text-red-500">{price} $ </p>
          <Link to={`/services/${_id}`}> <button className="btn my-2 flex justify-center items-center  mx-auto bg-red-500 text-white">
            Book Now!
          </button>
     </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
