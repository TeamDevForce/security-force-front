import { TestBed } from '@angular/core/testing';

import { BuscaEstadosCidadesService } from './busca-estados-cidades.service';

describe('BuscaEstadosCidadesService', () => {
  let service: BuscaEstadosCidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaEstadosCidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
