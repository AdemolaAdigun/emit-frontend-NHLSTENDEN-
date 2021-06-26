import {ProjectComponent} from "./project-component";
import { Attachment } from "./attachment";
import {User} from "./user";

export class Project {
  id: string;
  name: string;
  description: string;
  Attachments: Attachment[];
  User: User;
  components: ProjectComponent[];
  createdAt: string;

  constructor(project: Project) {
    this.id = project.id;
    this.name = project.name;
    this.description = project.description;
    this.Attachments = project.Attachments;
    this.User = project.User;
    this.components = project.components;
    this.createdAt = project.createdAt;
  }
}
