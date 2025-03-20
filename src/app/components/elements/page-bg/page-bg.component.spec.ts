import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBgComponent } from './page-bg.component';

describe('PageBgComponent', () => {
  let component: PageBgComponent;
  let fixture: ComponentFixture<PageBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBgComponent]
    });
    fixture = TestBed.createComponent(PageBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
