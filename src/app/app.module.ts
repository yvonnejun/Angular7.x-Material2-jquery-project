import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatSidenavModule, 
  MatListModule, 
  MatIconModule, 
  MatMenuModule, 
  MatTabsModule,
  MatToolbarModule
} from '@angular/material'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AppComponent } from './app.component'

import { HeadComponent } from './component/head/head.component'

import { TestComponent } from './test/test.component'
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { DragDirective } from './directive/drag.directive';
import { TitleComponent } from './component/private/title/title.component';
import { LevelledParaComponent } from './component/private/levelled-para/levelled-para.component'

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TestComponent,
    FooterComponent,
    MainComponent,
    DragDirective,
    TitleComponent,
    LevelledParaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class AppModule { }
