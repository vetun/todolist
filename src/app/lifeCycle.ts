import {Todo} from "./todo";

export class LifeCycle {
  isNew: boolean;
  send(todo: Todo) {
    if(this.isNew) {
      // post
    } else {
      // put
      // chang is new to false
    }
  }
}
