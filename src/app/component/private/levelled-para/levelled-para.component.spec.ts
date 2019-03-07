import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelledParaComponent } from './levelled-para.component';

describe('LevelledParaComponent', () => {
  let component: LevelledParaComponent;
  let fixture: ComponentFixture<LevelledParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelledParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelledParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
