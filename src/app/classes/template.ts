import {Field} from "./field";

export class Template {
  id: string;
  name: string;
  Fields: Field[];
  createdAt: string;

  constructor(template: Template) {
    this.id = template.id;
    this.name = template.name;
    this.Fields = template.Fields;
    this.createdAt = template.createdAt;
  }
}
