import {FieldAnswer} from "./field-answer";

export class Field {
  id: string;
  fieldName: string;
  FieldAnswers: FieldAnswer[];
  createdAt: string;

  constructor(field: Field) {
    this.id = field.id;
    this.fieldName = field.fieldName;
    this.FieldAnswers = field.FieldAnswers
    this.createdAt = field.createdAt;
  }
}
