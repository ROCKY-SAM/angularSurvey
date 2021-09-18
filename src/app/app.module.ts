import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './survey/main/main.component';
import { TextBoxComponent } from './survey/text-box/text-box.component';
import { RadioGroupComponent } from './survey/radio-group/radio-group.component';
import { MultipleTextComponent } from './survey/multiple-text/multiple-text.component';
import { MatrixBoxComponent } from './survey/matrix-box/matrix-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TextBoxComponent,
    RadioGroupComponent,
    MultipleTextComponent,
    MatrixBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
