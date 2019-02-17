import { Component, OnInit } from '@angular/core';

import { Expense } from './expense';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  pageTitle = 'Expense List';
  expenses: Expense[] = [];

  constructor() { }

  ngOnInit() {
  }

}
