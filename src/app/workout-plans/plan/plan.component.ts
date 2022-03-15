import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from "@angular/material/expansion";
import { WorkoutPlan } from "../../model/workoutPlan";
import { WorkoutExercise } from "../../model/workoutExercise";
import { DatabaseService } from "../../database.service";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements AfterViewInit {
  @ViewChild('addExercisePanel')
  addExercisePanel!: MatExpansionPanel;
  @ViewChild('panel')
  panel!: MatExpansionPanel;

  @Input()
  plan!: WorkoutPlan;
  @Input()
  editOpen: boolean = false;

  @Output()
  editFinished = new EventEmitter<WorkoutPlan>();
  @Output()
  delete = new EventEmitter<number>();

  editingPlan?: WorkoutPlan;

  constructor(public database: DatabaseService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.editOpen) {
      this.startEditing();
      this.cdr.detectChanges();
    }
  }

  startEditing() {
    this.panel.open();
    this.editingPlan = Object.create(this.plan);
  }

  stopEditing(saveChanges: boolean) {
    if (this.editingPlan == undefined)
      return;

    if (saveChanges) {
      this.editFinished.emit(this.editingPlan);
      this.plan = this.editingPlan;
    }
    else {
      this.editFinished.emit(undefined);
    }

    this.editingPlan = undefined;
    this.panel.close();
  }

  addExercise(plan: WorkoutPlan) {
    this.addExercisePanel.close();
    plan.exercises.push(new WorkoutExercise("Neue Übung", this.database.devices[0])); //TODO: DB
  }

  deleteExercise(plan: WorkoutPlan, id: number) {
    plan.exercises.splice(plan.exercises.findIndex(e => this.database.compareId(e, id)));  //TODO: DB
  }

  deletePlan() {
    this.delete.emit(this.plan.id);
  }

  editExercise(exercise: WorkoutExercise) {
    if (exercise) {
      //this.database.updateExercise(exercise);
    }
  }
}
