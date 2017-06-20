import { Component } from '@angular/core';

interface Todo {
	description: string;
	checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private todos = [{"description": "do that", "checked": true}];

  addLine() {
  	this.todos.push({"description": "", "checked": false});
  }
}
