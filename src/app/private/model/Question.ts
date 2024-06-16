import { Categorie } from "./categorie";
import { Choice } from "./choice";

export interface Question {
  id?: number;
  title?: string;
  inputType?: string;
  choices?: string[];
  formID? : number ;
  createdAt?: Date ;
  updatedAt?: Date ;
  userResponse?: string | string[];


  }
