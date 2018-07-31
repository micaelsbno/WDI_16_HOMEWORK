function microAjax(options) {
  "use strict";

  // Default to GET
  if (!options.method) {
    options.method = "GET";
  }

  // Default empty functions for the callbacks
  function noop() {}
  if (!options.success) {
    options.success = noop;
  }
  if (!options.warning) {
    options.warning = noop;
  }
  if (!options.error) {
    options.error = noop;
  }

  var request = new XMLHttpRequest();
  request.open(options.method, options.url, true);
  request.responseType = 'json'
  request.send(options.data);

  request.onload = function() {
    // Success!
    if (request.readyState === 4 && request.status === 200) {
      options.success(request.response);

      // We reached our target destination, but it returned an error
    } else {
      options.warning();
    }
  };

  // There was a connection error of some sort
  request.onerror = options.error;
}