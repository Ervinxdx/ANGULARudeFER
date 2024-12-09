import { Character } from './../../interfaces/character.interface';
import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

@Component({
  // selector: 'app-list',
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  // @Output()
  // public onDelete : EventEmitter<number> = new EventEmitter()




  public onDelete = output<string>();
  onDeleteCharacter(id?: string): void {
    if (!id) return alert("No existe el ID");

    this.onDelete.emit(id);
  }
}
