export interface IAnimal {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  yearOfBirth: string;
  latinName?: string;
  medicine?: string;
  isFed?: boolean;
  lastFed?: string;
}
