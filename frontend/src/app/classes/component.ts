import {User} from "./user";
import {Template} from "./template";

export class Component {
  id: string;
  name: string;
  attachments: string;
  user: User;
  template: Template;
  createdAt: string;

  constructor(component: Component) {
    this.id = component.id;
    this.name = component.name;
    this.attachments = component.attachments;
    this.template = component.template;
    this.user = component.user;
    this.createdAt = component.createdAt;
  }
}
