import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberhshipsComponent } from './memberhships.component';

describe('MemberhshipsComponent', () => {
  let component: MemberhshipsComponent;
  let fixture: ComponentFixture<MemberhshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberhshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberhshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
