if (!['http:', 'https:'].includes(window.location.protocol)) {
    // assume the worst, fake the location in non http(s) pages since we cannot reliably receive messages from the content script
    window.bevaO = true;
    window.KbhBQ = 38.883333;
    window.QacXH = -77.000;
  }

  function waitGetCurrentPosition() {
    if ((typeof window.bevaO !== 'undefined')) {
      if (window.bevaO === true) {
        window.GnCMANf({
          coords: {
            latitude: window.KbhBQ,
            longitude: window.QacXH,
            accuracy: 10,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
          },
          timestamp: new Date().getTime(),
        });
      } else {
        window.DPOuAhf(window.GnCMANf, window.mMpNqYS, window.YbHgY);
      }
    } else {
      setTimeout(waitGetCurrentPosition, WAIT_TIME);
    }
  }

  function waitWatchPosition() {
    if ((typeof window.bevaO !== 'undefined')) {
      if (window.bevaO === true) {
        navigator.getCurrentPosition(window.rTlQvzS, window.mhGhxVX, window.gQqFV);
        return Math.floor(Math.random() * 10000); // random id
      } else {
        window.FgkqsyH(window.rTlQvzS, window.mhGhxVX, window.gQqFV);
      }
    } else {
      setTimeout(waitWatchPosition, WAIT_TIME);
    }
  }

  navigator.geolocation.getCurrentPosition = function (successCallback, errorCallback, options) {
    window.GnCMANf = successCallback;
    window.mMpNqYS = errorCallback;
    window.YbHgY = options;
    waitGetCurrentPosition();
  };
  navigator.geolocation.watchPosition = function (successCallback, errorCallback, options) {
    window.rTlQvzS = successCallback;
    window.mhGhxVX = errorCallback;
    window.gQqFV = options;
    waitWatchPosition();
  };
