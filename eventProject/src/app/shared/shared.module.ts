import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTransferPipe } from './pipes/date-transfer.pipe';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    DateTransferPipe,
    ButtonComponent
  ],
  exports: [
    DateTransferPipe,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
