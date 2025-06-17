import type { IAnimal } from "../models/Animals";

export enum AnimalDetailActionTypes {
  SELECT_ANIMAL,
  CLEAR_SELECTION,
  FEED_ANIMAL,
}

export type AnimalDetailAction = {
  type: AnimalDetailActionTypes;
  payload?: IAnimal;
};

export const AnimalDetailReducer = (
  state: IAnimal | null,
  action: AnimalDetailAction
): IAnimal | null => {
  switch (action.type) {
    case AnimalDetailActionTypes.SELECT_ANIMAL:
      return action.payload || null;

    case AnimalDetailActionTypes.CLEAR_SELECTION:
      return null;

    case AnimalDetailActionTypes.FEED_ANIMAL:
      if (!state) return null;
      return {
        ...state,
        isFed: true,
        lastFed: new Date().toISOString(),
      };

    default:
      return state;
  }
};
