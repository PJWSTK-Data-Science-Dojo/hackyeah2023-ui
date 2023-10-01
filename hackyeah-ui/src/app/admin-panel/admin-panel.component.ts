import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  selectedFile: File | null = null;
  ddl: string = '';
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile(): void {
    if(this.selectedFile == null)
    {
      this.errorMessage = 'Wgraj plik bazy danych SQLite';
      return;
    }

    this.apiService.uploadSqliteFile(this.selectedFile).subscribe(
      response => {
        this.ddl = response.data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error?.error || 'Załadowanie bazy danych nie powiodło się.';
      }
    );
  }
}