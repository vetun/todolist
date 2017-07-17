import {LifeCycle} from "./lifeCycle";

export class Todo {
  private description: string;
  private checked: boolean;
  private lifeCycle: LifeCycle;

  constructor(description: string, checked: boolean) {
    this.description = description;
    this.checked = checked;
    this.lifeCycle = new LifeCycle();
  }

  update() {
    this.lifeCycle.send(this);
  }
}
