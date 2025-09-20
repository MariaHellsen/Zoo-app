import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { AnimalDetailContext } from "../contexts/AnimalDetailContext";
import { AnimalDetailActionTypes } from "../reducers/AnimalDetailReducer";
import type { IAnimal } from "../models/Animals";

import WildHorseImg from "../img/WildHorse.png";
import ChinchillaImg from "../img/Chinchilla.png";
import RabbitImg from "../img/Rabbit.png";
import ChamaeleonImg from "../img/Chamaeleon.png";

export const AnimalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { animals } = useContext(AnimalsContext);
  const { selectedAnimal, dispatch } = useContext(AnimalDetailContext);

  const imageReplacements: { [key: number]: string } = {
    4: RabbitImg,
    8: WildHorseImg,
    10: ChamaeleonImg,
    13: ChinchillaImg,
  };

  const getImageSrc = (animal: IAnimal): string => {
    if (imageReplacements[animal.id]) {
      return imageReplacements[animal.id];
    }
    return animal.imageUrl;
  };

  useEffect(() => {
    if (!id) return;

    let animalsList: IAnimal[] = animals;
    if (!animals.length) {
      const stored = localStorage.getItem("animals");
      if (stored) {
        animalsList = JSON.parse(stored);
      }
    }

    const animal = animalsList.find((a) => a.id === parseInt(id));
    if (animal) {
      dispatch({
        type: AnimalDetailActionTypes.SELECT_ANIMAL,
        payload: animal,
      });
    } else {
      navigate("/");
    }
  }, [id, animals, dispatch, navigate]);

  // Updating localStorage instead of calling Api
  const handleFeedAnimal = async () => {
    if (!selectedAnimal) return;

    const updatedAnimal = {
      ...selectedAnimal,
      isFed: true,
      lastFed: new Date().toISOString(),
    };

    dispatch({
      type: AnimalDetailActionTypes.SELECT_ANIMAL,
      payload: updatedAnimal,
    });

    const stored = localStorage.getItem("animals");
    if (stored) {
      const animalsList: IAnimal[] = JSON.parse(stored);
      const updatedList = animalsList.map((a) =>
        a.id === updatedAnimal.id ? updatedAnimal : a
      );
      localStorage.setItem("animals", JSON.stringify(updatedList));
    }

    console.log("Animal fed successfully!");
  };

  if (!selectedAnimal) {
    return <div>Laddar djur...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate("/animals")}
        className="mb-6 bg-white text-gray-800 text-xl font-bold hover:text-gray-900 inline-flex items-center"
      >
        ← Tillbaka till djurlistan
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-500 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">{selectedAnimal.name}</h1>
        </div>

        <div className="p-6">
          <div className="text-center mb-8">
            <div className="inline-block">
              <img
                src={getImageSrc(selectedAnimal)}
                alt={selectedAnimal.name}
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Information
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">
                    Latinskt namn:
                  </span>
                  <span className="ml-2 text-gray-600">
                    {selectedAnimal.latinName}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Födelseår:</span>
                  <span className="ml-2 text-gray-600">
                    {selectedAnimal.yearOfBirth}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Medicin:</span>
                  <span className="ml-2 text-gray-600">
                    {selectedAnimal.medicine || "Inga"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Utfodring
              </h2>
              <div className="space-y-3">
                <div>
                  <span
                    className={`font-medium ${
                      selectedAnimal.isFed ? "text-green-600" : "text-gray-700"
                    }`}
                  >
                    Senast utfodrad:
                  </span>
                  <span
                    className={`font-medium ${
                      selectedAnimal.isFed ? "text-green-600" : "text-gray-700"
                    }`}
                  >
                    {selectedAnimal.lastFed
                      ? new Date(selectedAnimal.lastFed).toLocaleString("sv-SE")
                      : "Aldrig"}
                  </span>
                </div>
                <div>
                  <span
                    className={`font-medium ${
                      selectedAnimal.isFed ? "text-green-600" : "text-gray-700"
                    }`}
                  >
                    Utfodrad:
                  </span>
                  <span
                    className={`ml-2 font-medium ${
                      selectedAnimal.isFed ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {selectedAnimal.isFed ? "Ja" : "Nej"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Beskrivning
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {selectedAnimal.shortDescription}
              </p>

              {selectedAnimal.longDescription && (
                <>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Detaljerad beskrivning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedAnimal.longDescription}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleFeedAnimal}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg shadow-md hover:shadow-lg"
            >
              Mata {selectedAnimal.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
