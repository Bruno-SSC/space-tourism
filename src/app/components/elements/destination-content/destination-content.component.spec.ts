import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationContentComponent } from './destination-content.component';

describe('DestinationContentComponent', () => {
  let component: DestinationContentComponent;
  let fixture: ComponentFixture<DestinationContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationContentComponent]
    });
    fixture = TestBed.createComponent(DestinationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
