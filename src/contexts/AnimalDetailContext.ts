import { createContext, type Dispatch } from "react";
import type { AnimalDetailAction } from "../reducers/AnimalDetailReducer";
import type { IAnimal } from "../models/Animals";

interface IAnimalDetailContext {
  selectedAnimal: IAnimal | null;
  dispatch: Dispatch<AnimalDetailAction>;
}
export const AnimalDetailContext = createContext<IAnimalDetailContext>({
  selectedAnimal: null,
  dispatch: () => {},
});
