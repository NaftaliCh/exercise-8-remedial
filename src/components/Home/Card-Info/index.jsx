import Evolution from "./Evolution";
import Logo from "./Logo";
import TypeEffect from "./Type-Effect";

const CardInfo = ({ title }) => {
  return (
    <>
      <h2> {title} </h2>
      <Evolution title="Naftali " />
      <Logo title="Naftali" />
      <TypeEffect title="Naftali" />
    </>
  );
};

export default CardInfo;