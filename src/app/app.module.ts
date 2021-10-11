import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FlexModule } from "@angular/flex-layout";
import { WorkoutPlansComponent } from './workout-plans/workout-plans.component';
import { EquipmentManagementComponent } from './equipment-management/equipment-management.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    WorkoutPlansComponent,
    EquipmentManagementComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
