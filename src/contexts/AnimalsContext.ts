import { createContext, type Dispatch } from "react";
import type { IAnimal } from "../models/Animals";
import type { AnimalAction } from "../reducers/AnimalReducer";

interface IAnimalContext {
  animals: IAnimal[];
  dispatch: Dispatch<AnimalAction>;
}

export const AnimalsContext = createContext<IAnimalContext>({
  animals: [],
  dispatch: () => {},
});
