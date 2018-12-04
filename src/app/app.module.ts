import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
