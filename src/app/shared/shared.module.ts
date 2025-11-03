import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { EuroPipe } from './pipes/euro.pipe';



@NgModule({
    declarations: [
        HighlightDirective,
        EuroPipe
    ],
  exports: [
    HighlightDirective,
    EuroPipe
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
