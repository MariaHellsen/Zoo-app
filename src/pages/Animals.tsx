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
      <h2 className="text-2xl font-bold text-center mb-8">
        Vår Digitala Djurfamilj
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">{a.name}</h3>
            <div className="img-container">
              <img
                src={getImageSrc(a)}
                alt={a.name}
                className="w-100 h-100 rounded-full object-cover mx-auto"
              />
            </div>
            <p className="text-gray-600 mb-4">{a.shortDescription}</p>
            <button
              onClick={() => navigate(`/animal/${a.id}`)}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Välj djuret
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
