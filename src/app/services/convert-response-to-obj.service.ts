import {Injectable} from '@angular/core';
import {Component} from "../classes/component";
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

  public convertToComponentsArray(response: Response): Component[] {
    let components: Component[] = [];

    for (let component of response['data'] as Component[]) {
      components.push(new Component(component));
    }

    return components;
  }

  public convertToFieldsArray(response: Response): Field[] {
    let fields: Field[] = [];

    for (const field of response['data'] as Field[]) {
      fields.push(new Field(field));
    }

    return fields;
  }

  public convertToProjectsArray(response: Response): Project[] {
    let projects: Project[] = [];

    for (const project of response['data'] as Project[]) {
      projects.push(new Project(project));
    }

    return projects;
  }

  public convertToTemplatesArray(response: Response): Template[] {
    let templates: Template[] = [];

    for (const template of response['data'] as Template[]) {
      templates.push(new Template(template));
    }

    return templates;
  }

  public convertToUsersArray(response: Response): User[] {
    let users: User[] = [];

    for (const user of response['data'] as User[]) {
      users.push(new User(user));
    }

    return users;
  }

  public convertToUser(response: Response): User {
    return new User(response['data'].user as User);
  }

  public convertToProject(response: Response): Project {
    return new Project(response['data'] as Project);
  }

}
