import { TestBed } from '@angular/core/testing';

import { GloablService } from './gloabl.service';

describe('GloablService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GloablService = TestBed.get(GloablService);
    expect(service).toBeTruthy();
  });
});
