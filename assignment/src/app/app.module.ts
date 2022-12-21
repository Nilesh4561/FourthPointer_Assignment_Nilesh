import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatChipsModule } from '@angular/material/chips';
import { CustomTooltipDirective } from './Directives/custom-tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MatDividerModule } from '@angular/material/divider';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipDirective,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatDividerModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
