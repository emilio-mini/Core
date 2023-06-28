import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SparkComponent} from './spark.component';

describe('SparkComponent', () => {
  let component: SparkComponent;
  let fixture: ComponentFixture<SparkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkComponent]
    });
    fixture = TestBed.createComponent(SparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
