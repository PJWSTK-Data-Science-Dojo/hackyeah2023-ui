import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryResultComponent  } from '../query-result/query-result.component';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { LoadingCircleComponent } from '../loading-circle/loading-circle.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-database-panel',
  templateUrl: './database-panel.component.html',
  styleUrls: ['./database-panel.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, FormsModule, ReactiveFormsModule, QueryResultComponent, MatTableModule, CommonModule, LoadingCircleComponent]
})
export class DatabasePanelComponent {

  dbQueried:string = "Test";
  isLoading:boolean = false;
  userInput:string = "QUERY DESCRITPION";
  generatedSql:string = "SQL";
  ddlDataSource: any[] = [];  
  errorMessage:string | null = "";
  displayedColumns: string[] = []; 

  constructor(private apiService: ApiService, private dialog: MatDialog) {
    this.getDbName()
   }

   setLoading(loading: boolean): void {
    this.isLoading = loading;
    if (this.isLoading) {
      this.dialog.open(LoadingCircleComponent, {
        disableClose: true,
        panelClass: 'loading-dialog',
        backdropClass: 'dark-backdrop',  
      });
    } else {
      this.dialog.closeAll();
    }
  }

  getDbName():void{
    this.apiService.getDbName().subscribe(response=>
      {
        this.dbQueried = response.data;
      });
  }

  generateSql(): void {
    this.setLoading(true);
    this.apiService.generateSql(this.userInput).subscribe(response => {
      this.generatedSql = response.sql;
      this.setLoading(false);
    });
  }
  
 executeQuery(): void {
  this.setLoading(true);
    this.apiService.executeSql(this.generatedSql).subscribe(
      response => {
        this.ddlDataSource = response.data;
        this.errorMessage = null;
        if (this.ddlDataSource && this.ddlDataSource.length > 0) {
          this.displayedColumns = Object.keys(this.ddlDataSource[0]);
          this.setLoading(false);
        }
      },
      (error: HttpErrorResponse) => {
        this.displayedColumns = []; 
        this.ddlDataSource = [];
        this.errorMessage = 'Error executing query: ' + (error.error?.error || error.message);
        this.setLoading(false);
      }
    );
  }

}
