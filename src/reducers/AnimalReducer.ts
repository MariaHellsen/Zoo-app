import type { IAnimal } from "../models/Animals";

export enum AnimalActionTypes {
  LOADED,
}
export type AnimalAction = {
  type: AnimalActionTypes;
  payload: string;
};
export const AnimalReducer = (
  animals: IAnimal[],
  action: AnimalAction
): IAnimal[] => {
  if (action.type === AnimalActionTypes.LOADED) {
    return JSON.parse(action.payload) as IAnimal[];
  }
  return animals;
};
