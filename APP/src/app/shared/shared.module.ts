import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { AlphabetsOnlyDirective } from './directives/alphabets-only.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[NumberOnlyDirective,AlphabetsOnlyDirective],
  declarations: [NumberOnlyDirective, AlphabetsOnlyDirective]
})
export class SharedModule { }
