import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-circle',
  templateUrl: './loading-circle.component.html',
  styleUrls: ['./loading-circle.component.scss'],
  standalone: true,
  imports:[MatDialogModule, MatProgressSpinnerModule]
})
export class LoadingCircleComponent {

}
