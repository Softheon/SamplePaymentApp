import { NgModule } from '@angular/core';
import { MdToolbarModule, MdCardModule, MdInputModule, MdSelectModule, MdOptionModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdOptionModule,
    MdButtonModule
  ],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdOptionModule,
    MdButtonModule
  ],
  declarations: []
})
export class MaterialModules { }
