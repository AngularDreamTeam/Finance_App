import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-savings-goals',
  templateUrl: './savings-goals.component.html',
  styleUrls: ['./savings-goals.component.css']
})
export class SavingsGoalsComponent implements OnInit {

  user: User;

  constructor(){
    //setting up a sample user
    this.user = {
      firstName: 'Zack',
      lastname: 'Meinke',
      age: 26,
      address: {
        street: '1030 Wallys Dr',
        city: 'Cleveland',
        state: 'Ohio'
      }
    }
  }
  ngOnInit() { }
}
