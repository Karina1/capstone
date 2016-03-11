'use strict';

describe('Service: getphoto', function () {

  // load the service's module
  beforeEach(module('capstoneApp'));

  // instantiate service
  var getphoto;
  beforeEach(inject(function (_getphoto_) {
    getphoto = _getphoto_;
  }));

  it('should do something', function () {
    expect(!!getphoto).toBe(true);
  });

});
