import {MatTableModule} from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss'],
  imports: [MatTableModule,],
  standalone: true
})
export class QueryResultComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'value'];
  dataSource = MOCK_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const MOCK_DATA = [
  // ... 20 mock data objects
  {id: 1, name: 'Item 1', value: 100},
  {id: 2, name: 'Item 2', value: 200},
  {id: 1, name: 'Item 1', value: 100},
  {id: 2, name: 'Item 2', value: 200},
  {id: 1, name: 'Item 1', value: 100},
  {id: 2, name: 'Item 2', value: 200},
  {id: 1, name: 'Item 1', value: 100},
  {id: 2, name: 'Item 2', value: 200},
  {id: 1, name: 'Item 1', value: 100},
  {id: 2, name: 'Item 2', value: 200},
  {id: 1, name: 'Item 1', value: 100},
  {id: 2, name: 'Item 2', value: 200},
  {id: 1, name: 'Item 1', value: 100},
  {id: 2, name: 'Item 2', value: 200},
  {id: 20, name: 'Item 20', value: 2000}
];
