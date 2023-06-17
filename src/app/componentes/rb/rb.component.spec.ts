import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBComponent } from './rb.component';

describe('RBComponent', () => {
  let component: RBComponent;
  let fixture: ComponentFixture<RBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RBComponent]
    });
    fixture = TestBed.createComponent(RBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
