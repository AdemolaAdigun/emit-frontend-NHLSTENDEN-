import {Injectable} from '@angular/core';
import {ProjectComponent} from "../classes/project-component";
import {Field} from "../classes/field";
import {Project} from "../classes/project";
import {Template} from "../classes/template";
import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class ConvertResponseToObjService {

  constructor() {
  }

  public convertToComponentsArray(response: any): ProjectComponent[] {
    let components: ProjectComponent[] = [];

    for (let component of response['data'] as ProjectComponent[]) {
      components.push(new ProjectComponent(component));
    }

    return components;
  }

  public convertToFieldsArray(response: any): Field[] {
    let fields: Field[] = [];

    for (const field of response['data'] as Field[]) {
      fields.push(new Field(field));
    }

    return fields;
  }

  public convertToProjectsArray(response: any): Project[] {
    let projects: Project[] = [];

    for (const project of response['data'] as Project[]) {
      for (const attachment of project.Attachments)
      projects.push(new Project(project));
    }

    return projects;
  }

  public convertToTemplatesArray(response: any): Template[] {
    let templates: Template[] = [];

    for (const template of response['data'] as Template[]) {
      templates.push(new Template(template));
    }

    return templates;
  }

  public convertToUsersArray(response: any): User[] {
    let users: User[] = [];

    for (const user of response['data'] as User[]) {
      users.push(new User(user));
    }

    return users;
  }

  public convertToUser(response: any): User {
    return new User(response['data'].user as User);
  }

  public convertToProject(response: any): Project {
    return new Project(response['data'] as Project);
  }

}
