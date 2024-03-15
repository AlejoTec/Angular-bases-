import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    public heroesName : string[] = ['stuartLittle','stingi','tauron','pepa']; 

    public deleteHero?: string ='';

    deleteLastHero():void{  //metodo para eliminar el ultimo elemento del arreglo heroes
      this.deleteHero =  this.heroesName.pop();
    }


}
