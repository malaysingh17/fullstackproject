import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedonorComponent } from './updatedonor.component';

describe('UpdatedonorComponent', () => {
  let component: UpdatedonorComponent;
  let fixture: ComponentFixture<UpdatedonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
