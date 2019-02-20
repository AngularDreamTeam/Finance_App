import { Component, OnInit } from '@angular/core';

import { Expense } from './expense';


@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  pageTitle = 'Expenses';
  expenses: Expense[] = [];
  expensesTotal: number;

  constructor() { }

  getTotal(expenses: Expense[]): number {
    let total: number;
    for(let expense of expenses) {
      this.expensesTotal += expense.amount;
    }
    return total;
  }

  ngOnInit() {
    this.expenses = [
                     {amount: 30, description: 'groceries'},
                     {amount: 600, description: 'rent'},
                     {amount: 200, description: 'car payment'},
                     {amount: 20, description: 'electric bill'}
                    ];
    this.expensesTotal = this.getTotal(this.expenses);
  }

}
