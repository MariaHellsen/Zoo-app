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
    if (!id || !animals.length) return;

    const animal = animals.find((a) => a.id === parseInt(id));

    if (animal) {
      dispatch({
        type: AnimalDetailActionTypes.SELECT_ANIMAL,
        payload: animal,
      });
    } else {
      navigate("/");
    }
  }, [id, animals, dispatch, navigate]);

  const handleFeedAnimal = async () => {
    if (!selectedAnimal) return;

    try {
      await fetch(
        `https://animals.azurewebsites.net/api/animals/${selectedAnimal.id}/feed`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error feeding animal:", error);
    } finally {
      dispatch({
        type: AnimalDetailActionTypes.FEED_ANIMAL,
      });
    }
  };

  if (!selectedAnimal) {
    return <div>Laddar djur...</div>;
  }

  return (
    <div className="animal-detail">
      <button onClick={() => navigate("/animals")} className="back-button">
        ← Tillbaka till djurlistan
      </button>

      <div className="animal-detail-content">
        <h1>{selectedAnimal.name}</h1>

        <div className="animal-detail-image">
          <img src={getImageSrc(selectedAnimal)} alt={selectedAnimal.name} />
        </div>

        <div className="animal-info">
          <h2>Information</h2>
          <p>
            <strong>Latinskt namn:</strong> {selectedAnimal.latinName}
          </p>
          <p>
            <strong>Födelseår:</strong> {selectedAnimal.yearOfBirth}
          </p>
          <p>
            <strong>Medicin:</strong> {selectedAnimal.medicine || "Inga"}
          </p>
          <p>
            <strong>Senast utfodrad:</strong>{" "}
            {selectedAnimal.lastFed
              ? new Date(selectedAnimal.lastFed).toLocaleString("sv-SE")
              : "Aldrig"}
          </p>
          <p>
            <strong>Utfodrad:</strong> {selectedAnimal.isFed ? "Ja" : "Nej"}
          </p>
        </div>

        <div className="animal-description">
          <h2>Beskrivning</h2>
          <p>{selectedAnimal.shortDescription}</p>

          {selectedAnimal.longDescription && (
            <>
              <h3>Detaljerad beskrivning</h3>
              <p>{selectedAnimal.longDescription}</p>
            </>
          )}
        </div>

        <div className="animal-actions">
          <button onClick={handleFeedAnimal} className="feed-button">
            Mata {selectedAnimal.name}
          </button>
        </div>
      </div>
    </div>
  );
};
