import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoraddComponent } from './donoradd.component';

describe('DonoraddComponent', () => {
  let component: DonoraddComponent;
  let fixture: ComponentFixture<DonoraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
