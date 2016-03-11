'use strict';

describe('Service: latlong', function () {

  // load the service's module
  beforeEach(module('capstoneApp'));

  // instantiate service
  var latlong;
  beforeEach(inject(function (_latlong_) {
    latlong = _latlong_;
  }));

  it('should do something', function () {
    expect(!!latlong).toBe(true);
  });

});
