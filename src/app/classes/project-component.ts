import {User} from "./user";
import {Template} from "./template";

export class ProjectComponent {
  id: string;
  name: string;
  attachments: string;
  author: User;
  Template: Template;
  createdAt: string;

  constructor(component: ProjectComponent) {
    this.id = component.id;
    this.name = component.name;
    this.attachments = component.attachments;
    this.Template = component.Template;
    this.author = component.author;
    this.createdAt = component.createdAt;
  }
}
