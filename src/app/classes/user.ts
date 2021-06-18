export class User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  status: number;
  createdAt: string;

  constructor(user: User) {
    this.id = user.id;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
    this.createdAt = user.createdAt;
    this.status = 0;
  }
}
