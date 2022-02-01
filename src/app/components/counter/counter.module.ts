import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from "./block/block.component";
import { Block1Component } from "./block1/block1.component";
import { CounterRoutingModule } from "./counter-routing.module";
import {ToMinusValuePipe} from "./pipes/to-minus-value.pipe";


const exportsComponents = [
  BlockComponent,
  Block1Component
]

@NgModule({
  declarations: [
    ... exportsComponents,
    ToMinusValuePipe
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ],
  exports: [... exportsComponents]
})
export class CounterModule { }
