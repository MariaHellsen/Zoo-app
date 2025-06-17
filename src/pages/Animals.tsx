import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { useNavigate } from "react-router-dom";
import type { IAnimal } from "../models/Animals";

export const Animals = () => {
  const { animals } = useContext(AnimalsContext);
  const navigate = useNavigate();

  const imageReplacements: { [key: number]: string } = {
    4: "src/img/Rabbit.png",
    8: "src/img/WildHorse.png",
    10: "src/img/Chamaeleon.png",
    13: "src/img/Chinchilla.png",
  };

  const getImageSrc = (animal: IAnimal): string => {
    if (imageReplacements[animal.id]) {
      return imageReplacements[animal.id];
    }
    return animal.imageUrl;
  };

  return (
    <>
      <h2>Vår Digitala Djurfamilj</h2>
      <div className="animals">
        {animals.map((a) => (
          <div key={a.id} className="animal">
            <h3>{a.name}</h3>
            <div className="img-container">
              <img src={getImageSrc(a)} alt={a.name} />
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
