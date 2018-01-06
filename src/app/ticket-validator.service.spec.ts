import { TestBed, inject } from '@angular/core/testing';

import { TicketValidatorService } from './ticket-validator.service';

describe('TicketValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketValidatorService]
    });
  });

  it('should be created', inject([TicketValidatorService], (service: TicketValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
