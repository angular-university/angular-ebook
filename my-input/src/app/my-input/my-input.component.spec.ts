import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputComponent } from './my-input.component';

describe('MyInputComponent', () => {
  let component: MyInputComponent;
  let fixture: ComponentFixture<MyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
