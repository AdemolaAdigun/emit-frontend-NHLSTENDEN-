import {Field} from "./field";

export class Template {
  id: string;
  name: string;
  fields: Field[];
  createdAt: string;

  constructor(template: Template) {
    this.id = template.id;
    this.name = template.name;
    this.fields = [];
    this.createdAt = template.createdAt;
  }
}
