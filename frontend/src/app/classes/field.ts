export class Field {
  id: string;
  name: string;
  createdAt: string;

  constructor(field: Field) {
    this.id = field.id;
    this.name = field.name;
    this.createdAt = field.createdAt;
  }
}
