import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabasePanelComponent } from './database-panel/database-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component'; 

const routes: Routes = [
  { path: 'user', component: DatabasePanelComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }