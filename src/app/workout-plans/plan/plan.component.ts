import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from "@angular/material/expansion";
import { WorkoutPlan } from "../../model/workoutPlan";
import { WorkoutExercise } from "../../model/workoutExercise";
import { DatabaseService } from "../../database.service";
import { User } from "../../model/user";

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
    this.editingPlan = { ...this.plan };
  }

  stopEditing(saveChanges: boolean) {
    if (this.editingPlan == undefined)
      return;

    if (saveChanges) {
      this.plan = this.editingPlan;
      this.editFinished.emit(this.editingPlan);
    }
    else {
      this.editFinished.emit(undefined);
    }

    this.editingPlan = undefined;
    this.panel.close();
  }

  addExercise() {
    this.addExercisePanel.close();
    this.plan.exercises.push(new WorkoutExercise("Neue Übung", this.database.devices[0]));
    this.editFinished.emit(this.plan);
  }

  deleteExercise(id: number) {
    this.plan.exercises.splice(this.plan.exercises.findIndex(e => this.database.compareId(e, id)));
    this.editFinished.emit(this.plan);
  }

  deletePlan() {
    this.delete.emit(this.plan.id);
  }

  editExercise(exercise: WorkoutExercise) {
    this.editFinished.emit(this.plan);
  }
}
