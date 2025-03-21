import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewContentComponent } from './crew-content.component';

describe('CrewContentComponent', () => {
  let component: CrewContentComponent;
  let fixture: ComponentFixture<CrewContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewContentComponent]
    });
    fixture = TestBed.createComponent(CrewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
