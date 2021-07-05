import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LzwComponent } from './lzw.component';

describe('LzwComponent', () => {
  let component: LzwComponent;
  let fixture: ComponentFixture<LzwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LzwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LzwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
