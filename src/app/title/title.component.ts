import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit {
  @Input() title = '';
  @Output() counter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onMouseOver() {
    this.counter.emit();
  }

}
