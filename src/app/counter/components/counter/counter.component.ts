import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone:false,
    template:`
    
    <h3 style="color: red;">
        Counter <span>{{counter}}</span>
    </h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Resetear Valor</button>
    <button (click)="increaseBy(-1)">-1</button>
    <hr>

    `
})

export class CounterComponent  {
    constructor() { }
    public counter:number=10
    increaseBy(value:number): void {
        this.counter += value;
      }
      reset():void{
        this.counter =10
      }


}