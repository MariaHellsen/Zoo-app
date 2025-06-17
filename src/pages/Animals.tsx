import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { useNavigate } from "react-router-dom";

export const Animals = () => {
  const { animals } = useContext(AnimalsContext);
  const navigate = useNavigate();
  return (
    <>
      <h2>Vår Digitala Djurfamilj</h2>
      <div className="animals">
        {animals.map((a) => (
          <div key={a.id} className="animal">
            <h3>{a.name}</h3>
            <div className="img-container">
              <img src={a.imageUrl} alt={a.name} />
            </div>
            <p>{a.shortDescription}</p>
            <button onClick={() => navigate(`/animal/${a.id}`)}>
              Välj djuret
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
