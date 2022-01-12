import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import { MatExpansionPanelHeader } from "@angular/material/expansion";

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss']
})
export class SearchableListComponent<T> implements OnInit, AfterViewInit {
  @ViewChildren(MatExpansionPanelHeader)
  headers!: QueryList<MatExpansionPanelHeader>;

  @Input()
  data!: T[];
  @Input()
  shownProperty!: (t: T) => any;

  @Output()
  itemClick = new EventEmitter<T>();

  shownData: T[] = [];
  filterText = "";

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.filterAndSort();
  }

  ngAfterViewInit(): void {
    this.headers.forEach(h => this.renderer.listen(h, "click", _ => console.log("asd")));
  }

  filterAndSort() {
    this.shownData = (this.filterText === ""
        ? this.data.concat()
        : this.data.filter(d => this.shownProperty(d).toLowerCase().includes(this.filterText.toLowerCase()))
    ).sort((d1, d2) => this.shownProperty(d1).localeCompare(this.shownProperty(d2)));
  }
}
