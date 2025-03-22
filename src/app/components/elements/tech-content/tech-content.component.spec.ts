import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechContentComponent } from './tech-content.component';

describe('TechContentComponent', () => {
  let component: TechContentComponent;
  let fixture: ComponentFixture<TechContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechContentComponent]
    });
    fixture = TestBed.createComponent(TechContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
