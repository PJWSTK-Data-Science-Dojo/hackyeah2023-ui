import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlOutputComponent } from './sql-output.component';

describe('SqlOutputComponent', () => {
  let component: SqlOutputComponent;
  let fixture: ComponentFixture<SqlOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlOutputComponent]
    });
    fixture = TestBed.createComponent(SqlOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
