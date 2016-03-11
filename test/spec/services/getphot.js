'use strict';

describe('Service: getphot', function () {

  // load the service's module
  beforeEach(module('capstoneApp'));

  // instantiate service
  var getphot;
  beforeEach(inject(function (_getphot_) {
    getphot = _getphot_;
  }));

  it('should do something', function () {
    expect(!!getphot).toBe(true);
  });

});
