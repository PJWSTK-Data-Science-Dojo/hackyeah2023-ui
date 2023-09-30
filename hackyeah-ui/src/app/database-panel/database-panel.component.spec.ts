import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasePanelComponent } from './database-panel.component';

describe('DatabasePanelComponent', () => {
  let component: DatabasePanelComponent;
  let fixture: ComponentFixture<DatabasePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabasePanelComponent]
    });
    fixture = TestBed.createComponent(DatabasePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
