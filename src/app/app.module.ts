import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FlexModule } from "@angular/flex-layout";
import { WorkoutPlansComponent } from './workout-plans/workout-plans.component';
import { EquipmentManagementComponent } from './equipment-management/equipment-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LoginComponent } from './login/login.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatRippleModule } from "@angular/material/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { MatExpansionModule } from "@angular/material/expansion";
import { DeviceComponent } from './equipment-management/device/device.component';
import { SearchableListComponent } from './searchable-list/searchable-list.component';
import { MatDividerModule } from "@angular/material/divider";
import { WorkoutDataComponent } from './workout-data/workout-data.component';
import { ExerciseComponent } from './workout-plans/exercise/exercise.component';
import { MatSelectModule } from "@angular/material/select";
import { HttpService } from "./http.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    WorkoutPlansComponent,
    EquipmentManagementComponent,
    LoginComponent,
    DeviceComponent,
    SearchableListComponent,
    WorkoutDataComponent,
    ExerciseComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FlexModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatRippleModule,
        OverlayModule,
        MatExpansionModule,
        MatDividerModule,
        MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
