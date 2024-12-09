import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  public character :Character={
    name:'',
    power:0,
  }



  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();
  
  
  emitCharacter():void{

    if (this.character.name.length ===0)return;
    console.log(this.character)

    this.onNewCharacter.emit({...this.character});
    this.character.name = '';
    this.character.power=0;


  }
}
