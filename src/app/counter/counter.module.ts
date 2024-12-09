import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        CounterComponent
       
    ],
    //PARA QUE SE PUEDA CONSUMIR EXTERIORMENTE
    exports:[
        CounterComponent
    ]

})
export class CounterModule{
    
}