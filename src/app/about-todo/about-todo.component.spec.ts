import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTodoComponent } from './about-todo.component';

describe('AboutTodoComponent', () => {
  let component: AboutTodoComponent;
  let fixture: ComponentFixture<AboutTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
