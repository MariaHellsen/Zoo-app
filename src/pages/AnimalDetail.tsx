import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { AnimalDetailContext } from "../contexts/AnimalDetailContext";
import { AnimalDetailActionTypes } from "../reducers/AnimalDetailReducer";

export const AnimalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { animals } = useContext(AnimalsContext);
  const { selectedAnimal, dispatch } = useContext(AnimalDetailContext);

  useEffect(() => {
    if (!id || !animals.length) return;

    const animal = animals.find((a) => a.id === parseInt(id));

    if (animal) {
      dispatch({
        type: AnimalDetailActionTypes.SELECT_ANIMAL,
        payload: animal,
      });
    } else {
      // Animal not found, redirect to animals list
      navigate("/");
    }
  }, [id, animals, dispatch, navigate]);

  if (!selectedAnimal) {
    return <div>Laddar djur...</div>;
  }

  return (
    <div className="animal-detail">
      <button onClick={() => navigate("/")} className="back-button">
        ← Tillbaka till djurlistan
      </button>

      <div className="animal-detail-content">
        <h1>{selectedAnimal.name}</h1>

        <div className="animal-detail-image">
          <img src={selectedAnimal.imageUrl} alt={selectedAnimal.name} />
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
              : "Okänt"}
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
          <button
            onClick={() => {
              // Here you could add feeding logic
              console.log(`Utfodrar ${selectedAnimal.name}`);
            }}
            className="feed-button"
          >
            Mata djuret
          </button>
        </div>
      </div>
    </div>
  );
};
