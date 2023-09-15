import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaFinanceiroComponent } from './tela-financeiro.component';

describe('TelaFinanceiroComponent', () => {
  let component: TelaFinanceiroComponent;
  let fixture: ComponentFixture<TelaFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFinanceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
