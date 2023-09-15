import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaPlanosComponent } from './tela-planos.component';

describe('TelaPlanosComponent', () => {
  let component: TelaPlanosComponent;
  let fixture: ComponentFixture<TelaPlanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPlanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
