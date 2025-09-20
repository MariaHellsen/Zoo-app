import "./App.css";
import { router } from "./Router";
import { RouterProvider } from "react-router";
import { useEffect, useReducer } from "react";
import { AnimalActionTypes, AnimalReducer } from "./reducers/AnimalReducer";
import { AnimalsContext } from "./contexts/AnimalsContext";
import type { IAnimal } from "./models/Animals";
import { AnimalDetailContext } from "./contexts/AnimalDetailContext";
import { AnimalDetailReducer } from "./reducers/AnimalDetailReducer";

function App() {
  const [animals, animalDispatch] = useReducer(AnimalReducer, []);
  const [selectedAnimal, animalDetailDispatch] = useReducer(
    AnimalDetailReducer,
    null
  );

  // Using localStorage
  useEffect(() => {
    const getAnimals = async () => {
      const response = await fetch(
        "https://animals.azurewebsites.net/api/animals"
      );
      const animals: IAnimal[] = await response.json();
      localStorage.setItem("animals", JSON.stringify(animals));

      animalDispatch({
        type: AnimalActionTypes.LOADED,
        payload: JSON.stringify(animals),
      });
    };

    if (animals.length > 0) return;

    getAnimals();
  }, [animals.length]);

  return (
    <>
      <AnimalsContext.Provider value={{ animals, dispatch: animalDispatch }}>
        <AnimalDetailContext.Provider
          value={{ selectedAnimal, dispatch: animalDetailDispatch }}
        >
          <RouterProvider router={router}></RouterProvider>
        </AnimalDetailContext.Provider>
      </AnimalsContext.Provider>
    </>
  );
}

export default App;
