'use strict';

describe('Service: getLoc', function () {

  // load the service's module
  beforeEach(module('capstoneApp'));

  // instantiate service
  var getLoc;
  beforeEach(inject(function (_getLoc_) {
    getLoc = _getLoc_;
  }));

  it('should do something', function () {
    expect(!!getLoc).toBe(true);
  });

});
