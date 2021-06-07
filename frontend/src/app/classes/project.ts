import {Component} from "./component";
import {User} from "./user";

export class Project {
  id: string;
  name: string;
  description: string;
  attachments: string;
  user: User;
  components: Component[];
  createdAt: string;

  constructor(project: Project) {
    this.id = project.id;
    this.name = project.name;
    this.description = project.description;
    this.attachments = project.attachments;
    this.user = project.user;
    this.components = project.components;
    this.createdAt = project.createdAt;
  }
}
