'use strict';

describe('Service: map1', function () {

  // load the service's module
  beforeEach(module('capstoneApp'));

  // instantiate service
  var map1;
  beforeEach(inject(function (_map1_) {
    map1 = _map1_;
  }));

  it('should do something', function () {
    expect(!!map1).toBe(true);
  });

});
