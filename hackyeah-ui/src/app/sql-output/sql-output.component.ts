import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql-output',
  templateUrl: './sql-output.component.html',
  styleUrls: ['./sql-output.component.scss']
})
export class SqlOutputComponent implements OnInit {
  generatedSql: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
