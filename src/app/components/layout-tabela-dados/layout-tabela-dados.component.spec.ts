import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTabelaDadosComponent } from './layout-tabela-dados.component';

describe('LayoutTabelaDadosComponent', () => {
  let component: LayoutTabelaDadosComponent;
  let fixture: ComponentFixture<LayoutTabelaDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTabelaDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTabelaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
