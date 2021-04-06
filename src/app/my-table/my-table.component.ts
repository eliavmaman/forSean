import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.less']
})
export class MyTableComponent implements OnInit {
  @Input() customers: { name: string, password: string }[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
