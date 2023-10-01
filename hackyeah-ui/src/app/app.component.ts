import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackyeah-ui';

  isPremiumModel: boolean = false;
  private subscription: Subscription | null = null;

  ngOnInit(): void {
     this.subscription = this.apiService!.isPremiumModel$.subscribe(
      value => this.isPremiumModel = value
    );
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

constructor(private apiService:ApiService)
{
}

  toggleModel(value: boolean): void {
    if(this.apiService == null)
      return;
    this.apiService.toggleModel(value);
  }
}
