import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    //LOS GET ES UN METODO QUE SE VE COMO PROPIEDADES
    return this.name.toUpperCase();
  }

  listaDeHeroes: Array<string> = [
    'Patito',
    'Superman',
    'Goku',
    'LionelMessi',
    'Jacinto',
    'CR7',
    'Haland',
    'Messi',
    'Cueva',
    'Jacinta',
    'Paolo Guerrero',
  ];
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    // this.name =  this.listaDeHeroes[Math.round(Math.random()*10)]
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 99;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
