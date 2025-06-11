export interface IAnimal {
  Name: string;
  Id: number;
  ShortDescription: string;
  ImageUrl: string;
}

export interface IAnimalExt extends IAnimal {
  YearOfBirth: string;
  LongDescription: string;
}
