import type { IAnimal } from "./Animals";

export class AnimalDetail {
  animal: IAnimal;
  yearOfBirth: string;
  longDescription: string;
  lastFed: number;
  isFed: boolean;

  constructor(
    animal: IAnimal,
    longDescription: string,
    yearOfBirth: string,
    lastFed?: number
  ) {
    this.animal = animal;
    this.yearOfBirth = yearOfBirth;
    this.longDescription = longDescription;
    this.lastFed = lastFed || Date.now();
    this.isFed = false;
  }
}
