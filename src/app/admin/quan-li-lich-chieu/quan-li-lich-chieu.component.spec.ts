import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiLichChieuComponent } from './quan-li-lich-chieu.component';

describe('QuanLiLichChieuComponent', () => {
  let component: QuanLiLichChieuComponent;
  let fixture: ComponentFixture<QuanLiLichChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLiLichChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLiLichChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
