import {Component} from '@angular/core';

interface SideNavRoute {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Hello';
  titleHoverCounter = 0;
  customers: any[] = [];

  constructor() {
    this.initCustomer();
  }

  initCustomer() {
    for (let i = 0; i < 10; i++) {
      this.customers.push({
        name: 'user_' + i,
        password: 'pass_' + i
      });
    }
  }


  changeTitle() {
    if (this.title === 'Hello') {
      this.title = 'Goodby';
    } else if (this.title == 'Goodby') {
      this.title = 'Hello';
    }
  }

  onCounterChanged() {
    this.titleHoverCounter++;
  }
}
