import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestaoAulasRoutingModule } from './gestao-aulas-routing.module';
import { ForumComponent } from './forum/forum.component';
import { BlocoNotasComponent } from './bloco-notas/bloco-notas.component';
import { AcademiasComponent } from './academias/academias.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { AulasComponent } from './aulas/aulas.component';


@NgModule({
  declarations: [ForumComponent, BlocoNotasComponent, AcademiasComponent, CalendarioComponent, AulasComponent],
  imports: [
    CommonModule,
    GestaoAulasRoutingModule
  ]
})
export class GestaoAulasModule { }
