import { Character } from './../interfaces/character.interface';
import { Component, OnInit, Input, input } from '@angular/core';
import { DbzService } from '../services/dbz.service';




@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html',
    standalone: false,


})

export class MainPageComponent {

    constructor (private dbzService:DbzService){
        
    }
    get character():Character[]{
        return [...this.dbzService.characters]
    }
    onDeleteCharacter(id:string):void{
        this.dbzService.deleteCharactedById(id)
    }

    onNewCharacter(character:Character){
        this.dbzService.AddCharacter(character)
    }

    



}