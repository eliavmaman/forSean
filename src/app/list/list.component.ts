import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  list: any;
  selectedRow: any;
  item: any;
  sortedList: any = [];

  constructor(private global: GlobalService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.global.getListData().subscribe(res => this.list = res);
  }

  addToSortedList(item: any) {
    if (this.sortedList.indexOf(item) === -1) {
      this.sortedList.push(item);
    }
  }

  listSorted($event: any) {

  }

  saveChanges() {
    this.global.saveChanges(this.sortedList,this.list);
  }

  rowClicked(c: any) {
    this.list.forEach((r: any) => {
      r.active = false;
    });
    this.sortedList = [];
    this.selectedRow = c;
    c.active = true;

  }
}
