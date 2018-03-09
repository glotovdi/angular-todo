import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'normalize.css'; 
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,SharedModule,MatButtonModule,MatCheckboxModule,CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
