import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  sortedList = [];
  list = [
    {
      name: 'yoyo',
      lastName: 'koko',
      flags: [
        {name: 'Is cool', value: false},
        {name: 'Is Funny', value: true},
        {name: 'Is from Israel', value: false},
      ],
      selection: [
        {name: 'user1', url: 'https://randomuser.me/api/portraits/women/1.jpg'},
        {name: 'user2', url: 'https://randomuser.me/api/portraits/women/2.jpg'},
        {name: 'user3', url: 'https://randomuser.me/api/portraits/women/3.jpg'},
        {name: 'user4', url: 'https://randomuser.me/api/portraits/women/4.jpg'},
      ]
    },
    {
      name: 'shlomi',
      lastName: 'cohen',
      flags: [
        {name: 'Is cool', value: true},
        {name: 'Is Funny', value: false},
        {name: 'Is from Israel', value: false},
      ],
      selection: [
        {name: 'user1', url: 'https://randomuser.me/api/portraits/women/5.jpg'},
        {name: 'user2', url: 'https://randomuser.me/api/portraits/women/6.jpg'},
        {name: 'user3', url: 'https://randomuser.me/api/portraits/women/7.jpg'},
        {name: 'user4', url: 'https://randomuser.me/api/portraits/women/8.jpg'},
      ]
    }

  ];

  constructor(private http: HttpClient) {
  }

  getListData() {
    return of(this.list);

    //this.http.get('url to get list');
  }

  saveChanges(sortedList: any, list: any) {
    this.sortedList = sortedList;
    this.list = list;
    //return this.http.post('url to save list');

  }
}
