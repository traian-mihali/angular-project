import { Component } from "@angular/core";
import { todoAnimation, todosAnimation } from "./todos.component.animations";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.less"],
  animations: [todosAnimation, todoAnimation]
})
export class TodosComponent {
  items: any[] = ["build an app", "learn php"];

  addItem(input: HTMLInputElement) {
    this.items.unshift(input.value);
    input.value = "";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
