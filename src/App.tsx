import "./App.css";
import { router } from "./Router";
import { RouterProvider } from "react-router";
import { useEffect, useReducer } from "react";
import { AnimalActionTypes, AnimalReducer } from "./reducers/AnimalReducer";
import { AnimalsContext } from "./contexts/AnimalsContext";
import type { IAnimal } from "./models/Animals";

function App() {
  const [animals, animalDispatch] = useReducer(AnimalReducer, []);

  useEffect(() => {
    const getAnimals = async () => {
      const response = await fetch(
        "https://animals.azurewebsites.net/api/animals"
      );
      const animals: IAnimal[] = await response.json();

      animalDispatch({
        type: AnimalActionTypes.LOADED,
        payload: JSON.stringify(animals),
      });
    };

    if (animals.length > 0) return;

    getAnimals();
  });

  return (
    <>
      <AnimalsContext.Provider value={{ animals, dispatch: animalDispatch }}>
        <RouterProvider router={router}></RouterProvider>
      </AnimalsContext.Provider>
    </>
  );
}

export default App;
