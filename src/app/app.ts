import { Component, signal } from "@angular/core";

@Component({
  imports: [],
  selector: "app-root",
  styles: [],
  template: `<h1>{{ title() }}</h1>`,
})
export class App {
  protected readonly title = signal("Soiree");
}
