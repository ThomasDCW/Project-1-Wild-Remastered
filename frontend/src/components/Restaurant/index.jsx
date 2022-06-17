import propTypes from "prop-types";
import SRestaurant from "./style";

export default function Restaurant({
  title,
  description,
  location,
  phonenumber,
  pic1,
  pic2,
  pic3,
}) {
  return (
    <SRestaurant>
      <h1>{title}</h1>
      <article>
        <div className="infoscontainer">
          <p>{description}</p>
          <h2>{location}</h2>
          <h2>{phonenumber}</h2>
        </div>
        <div className="picturecontainer">
          <img src={pic1} alt="picture1" />
          <img src={pic2} alt="picture2" />
          <img src={pic3} alt="picture2" />
        </div>
      </article>
    </SRestaurant>
  );
}
Restaurant.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  phonenumber: propTypes.string.isRequired,
  pic1: propTypes.string.isRequired,
  pic2: propTypes.string.isRequired,
  pic3: propTypes.string.isRequired,
};
