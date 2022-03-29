import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { WorkoutExercise } from "../../../model/workoutExercise";
import { MatExpansionPanel } from "@angular/material/expansion";
import { DatabaseService } from "../../../database.service";
import { WorkoutSet } from "../../../model/workoutSet";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements AfterViewInit {
  @ViewChild(MatExpansionPanel)
  panel!: MatExpansionPanel;

  @Input()
  exercise!: WorkoutExercise;
  @Input()
  editOpen: boolean = false;

  @Output()
  editFinished = new EventEmitter<WorkoutExercise>();
  @Output()
  delete = new EventEmitter<number>();

  editingExercise?: WorkoutExercise;

  constructor(public database: DatabaseService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (this.editOpen) {
      this.startEditing();
      this.cdr.detectChanges();
    }
  }

  startEditing() {
    this.panel.open();
    this.editingExercise = { ...this.exercise };
    this.editingExercise!.exerciseSets = this.editingExercise!.exerciseSets.concat();
  }

  stopEditing(saveChanges: boolean) {
    if (this.editingExercise == undefined)
      return;

    if (saveChanges) {
      this.exercise = this.editingExercise;
      this.editFinished.emit(this.editingExercise);
    }
    else {
      this.editFinished.emit(undefined);
    }

    this.editingExercise = undefined;
    this.panel.close();
  }

  deleteExercise() {
    this.delete.emit(this.exercise.id);
  }

  edit_deleteSet(index: number) {
    this.editingExercise!.exerciseSets.splice(index, 1);
    this.exercise = this.editingExercise!;
    this.editFinished.emit(this.editingExercise);
  }

  edit_addSet() {
    this.editingExercise!.exerciseSets.push(new WorkoutSet(0, ""));
    this.exercise = this.editingExercise!;
    this.editFinished.emit(this.editingExercise);
  }
}
