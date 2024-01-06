import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  return <div>Oferta: {id}</div>;
};

export default Offer;
