import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteinfoComponent } from './siteinfo.component';

describe('SiteinfoComponent', () => {
  let component: SiteinfoComponent;
  let fixture: ComponentFixture<SiteinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
