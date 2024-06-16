import { Inscription } from "./Inscription";
import { Question } from "./Question";


export interface QuestionResponse {
  id?: number;
  response?: string;

  question?: Question;
  inscription? : Inscription ;
  }
