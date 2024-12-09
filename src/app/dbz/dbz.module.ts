import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //PARA NGIF Y FOR
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';




@NgModule({
  declarations: [

    MainPageComponent,


  
    ListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule

    
  ],
  exports: [
    MainPageComponent

  ]
})
export class DbzModule {
  

}
