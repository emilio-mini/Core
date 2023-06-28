import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DotnavComponent} from './dotnav.component';

describe('DotnavComponent', () => {
  let component: DotnavComponent;
  let fixture: ComponentFixture<DotnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotnavComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DotnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
