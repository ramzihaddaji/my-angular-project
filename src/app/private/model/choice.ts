import { Question } from "./Question";

export interface Choice {
    id?: number ;
    label?: string ;
    createdAt? : Date ;
    updatedAt? : Date ;
    questionId? : number ;
}