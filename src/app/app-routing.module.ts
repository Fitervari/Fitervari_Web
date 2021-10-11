import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlansComponent } from "./workout-plans/workout-plans.component";

const routes: Routes = [
  //{ path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'workoutplans', component: WorkoutPlansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
