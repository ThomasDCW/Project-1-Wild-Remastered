import propTypes from "prop-types";
import SHomeCard from "./style";

export default function HomeCard({ label, picture }) {
  return (
    <SHomeCard bg={picture}>
      <h1>{label}</h1>
    </SHomeCard>
  );
}
HomeCard.propTypes = {
  label: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
};
