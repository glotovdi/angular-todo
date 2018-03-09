import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [CommonModule, FormsModule, MatInputModule, MatCheckboxModule, MatButtonModule, BrowserAnimationsModule],
  exports: [TodoComponent],
  declarations: [TodoComponent]
})
export class CoreModule {}
