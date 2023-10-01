import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SqlOutputComponent } from './sql-output/sql-output.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabasePanelComponent } from './database-panel/database-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    SqlOutputComponent,
    TextInputComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatInputModule,
    TextFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    DatabasePanelComponent,
    QueryResultComponent,
    HttpClientModule,
    MatButtonModule,
    CommonModule,
    NgxMatFileInputModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
