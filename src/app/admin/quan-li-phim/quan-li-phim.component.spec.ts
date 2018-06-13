import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiPhimComponent } from './quan-li-phim.component';

describe('QuanLiPhimComponent', () => {
  let component: QuanLiPhimComponent;
  let fixture: ComponentFixture<QuanLiPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLiPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLiPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
