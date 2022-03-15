import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from "@angular/material/expansion";
import { Observable } from "rxjs";

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss']
})
export class SearchableListComponent<T> implements OnInit {
  @ViewChildren(MatExpansionPanel)
  panels!: QueryList<MatExpansionPanel>;

  @Input()
  data!: T[];

  @Input()
  shownProperty!: (t: T) => any;

  @Output()
  itemClick = new EventEmitter<T>();

  shownData: T[] = [];
  filterText = "";

  selectedIndex = -1;

  constructor() { }

  ngOnInit(): void {
    this.updateShownData();
  }

  updateShownData() {
    console.log(this.data);
    this.shownData = (this.filterText === ""
        ? this.data.concat()
        : this.data.filter(d => this.shownProperty(d).toLowerCase().includes(this.filterText.toLowerCase()))
    ).sort((d1, d2) => this.shownProperty(d1).localeCompare(this.shownProperty(d2)));
  }

  onItemOpen(item: T, index: number) {
    this.panels.get(index)!.close();
    this.selectedIndex = index;
    this.itemClick.emit(item);
  }
}
