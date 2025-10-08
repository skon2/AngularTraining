import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateTransferPipe} from './date-transfer.pipe';



@NgModule({
  declarations: [DateTransferPipe],
  exports: [
    DateTransferPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
