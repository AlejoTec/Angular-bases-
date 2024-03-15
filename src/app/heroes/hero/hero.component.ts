import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public place: string = 'New york'
  public name: string = 'Hulk';
  public age: number = 45;

  get CapitalizedName(): string {
    return this.place.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} ${this.age}`;
  }

  changeName(): void {
    this.name = "sportacus";
    this.place = "lazyTown".toUpperCase();
  }

  changeAge(): void {
    this.age = 22;
  }

  ResetForm(): void {
    this.name = 'Hulk';
    this.age = 45;

  }


}
