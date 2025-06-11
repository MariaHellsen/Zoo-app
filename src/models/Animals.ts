export interface IAnimal {
  name: string;
  id: number;
  shortDescription: string;
  imageUrl: string;
}

export interface IAnimalExt extends IAnimal {
  yearOfBirth: string;
  longDescription: string;
}
