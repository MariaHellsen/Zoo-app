export interface IAnimal {
  Name: string;
  Id: number;
  ShortDescription: string;
  Url: string;
}

export interface IAnimalExt extends IAnimal {
  YearOfBirth: string;
  LongDescription: string;
  IsFed: boolean;
}
