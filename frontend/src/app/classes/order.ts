import {User} from "./user";
import {Component} from "./component";

export class Order {
  id: string;
  transactionCost: string;
  count: number;
  createdAt: string;
  user: User;
  component: Component;

  constructor(order: Order) {
    this.id = order.id;
    this.transactionCost = order.transactionCost;
    this.count = order.count;
    this.user = order.user;
    this.component = order.component;
    this.createdAt = order.createdAt;
  }
}
