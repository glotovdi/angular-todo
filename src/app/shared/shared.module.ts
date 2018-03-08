import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule, MatButtonModule
  ],
  declarations: [HeadersComponent],
  exports: [HeadersComponent]
})
export class SharedModule { }
