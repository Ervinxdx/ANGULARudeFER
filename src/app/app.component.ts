import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Mi Primera APP de Angular';
  public counter: number = 10;
  eliminarTodo(event: Event) {
    const padre = event.target as HTMLElement;
    padre.parentElement?.remove();
  }

}
