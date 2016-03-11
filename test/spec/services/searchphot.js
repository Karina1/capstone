'use strict';

describe('Service: searchphot', function () {

  // load the service's module
  beforeEach(module('capstoneApp'));

  // instantiate service
  var searchphot;
  beforeEach(inject(function (_searchphot_) {
    searchphot = _searchphot_;
  }));

  it('should do something', function () {
    expect(!!searchphot).toBe(true);
  });

});
