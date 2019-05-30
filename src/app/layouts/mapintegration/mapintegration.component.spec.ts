import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapintegrationComponent } from './mapintegration.component';

describe('MapintegrationComponent', () => {
  let component: MapintegrationComponent;
  let fixture: ComponentFixture<MapintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
