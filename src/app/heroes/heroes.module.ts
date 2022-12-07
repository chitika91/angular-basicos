import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ //Son los componentes del módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //son las cosas que quiero hacer visibles de mis componentes
        ListadoComponent
    ],
    imports:[
        CommonModule  // este modulo debe ser importado para que me permita usar directivas con ngFor, ngIf
    ]



})
export class HeroesModule{}