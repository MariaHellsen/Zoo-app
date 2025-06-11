import type { IAnimal } from "./Animals";

export class MyAnimals {
  animal: IAnimal;
  lastFed: number;
  isFed: boolean;

  constructor(animal: IAnimal, lastFed?: number) {
    this.animal = animal;
    this.lastFed = lastFed || Date.now();
    this.isFed = false;
  }
}
