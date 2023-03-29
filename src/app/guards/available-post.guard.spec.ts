import { TestBed } from '@angular/core/testing';

import { AvailablePostGuard } from './available-post.guard';

describe('AvailablePostGuard', () => {
  let guard: AvailablePostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AvailablePostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
