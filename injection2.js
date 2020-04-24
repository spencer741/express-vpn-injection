(function(){function QxHor() {
  //<![CDATA[
  window.IYUGJtM = navigator.geolocation.getCurrentPosition.bind(navigator.geolocation);
  window.caHGcwu = navigator.geolocation.watchPosition.bind(navigator.geolocation);
  let WAIT_TIME = 100;
 
 
  if (!['http:', 'https:'].includes(window.location.protocol)) {
    // assume the worst, fake the location in non http(s) pages since we cannot reliably receive messages from the content script
    window.LZpjQ = true;
    window.TmTCx = 38.883333;
    window.qXKXI = -77.000;
  }
 
  function waitGetCurrentPosition() {
    if ((typeof window.LZpjQ !== 'undefined')) {
      if (window.LZpjQ === true) {
        window.BPcRtcj({
          coords: {
            latitude: window.TmTCx,
            longitude: window.qXKXI,
            accuracy: 10,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
          },
          timestamp: new Date().getTime(),
        });
      } else {
        window.IYUGJtM(window.BPcRtcj, window.smpYZSZ, window.rwNva);
      }
    } else {
      setTimeout(waitGetCurrentPosition, WAIT_TIME);
    }
  }
 
  function waitWatchPosition() {
    if ((typeof window.LZpjQ !== 'undefined')) {
      if (window.LZpjQ === true) {
        navigator.getCurrentPosition(window.DBLfqlX, window.dQmXfVO, window.QAYeD);
        return Math.floor(Math.random() * 10000); // random id
      } else {
        window.caHGcwu(window.DBLfqlX, window.dQmXfVO, window.QAYeD);
      }
    } else {
      setTimeout(waitWatchPosition, WAIT_TIME);
    }
  }
 
  navigator.geolocation.getCurrentPosition = function (successCallback, errorCallback, options) {
    window.BPcRtcj = successCallback;
    window.smpYZSZ = errorCallback;
    window.rwNva = options;
    waitGetCurrentPosition();
  };
  navigator.geolocation.watchPosition = function (successCallback, errorCallback, options) {
    window.DBLfqlX = successCallback;
    window.dQmXfVO = errorCallback;
    window.QAYeD = options;
    waitWatchPosition();
  };
 
  const instantiate = (constructor, args) => {
    const bind = Function.bind;
    const unbind = bind.bind(bind);
    return new (unbind(constructor, null).apply(null, args));
  }
 
  Blob = function (_Blob) {
    function secureBlob(...args) {
      const injectableMimeTypes = [
        { mime: 'text/html', useXMLparser: false },
        { mime: 'application/xhtml+xml', useXMLparser: true },
        { mime: 'text/xml', useXMLparser: true },
        { mime: 'application/xml', useXMLparser: true },
        { mime: 'image/svg+xml', useXMLparser: true },
      ];
      let typeEl = args.find(arg => (typeof arg === 'object') && (typeof arg.type === 'string') && (arg.type));
 
      if (typeof typeEl !== 'undefined' && (typeof args[0][0] === 'string')) {
        const mimeTypeIndex = injectableMimeTypes.findIndex(mimeType => mimeType.mime.toLowerCase() === typeEl.type.toLowerCase());
        if (mimeTypeIndex >= 0) {
          let mimeType = injectableMimeTypes[mimeTypeIndex];
          let injectedCode = `<script>(
            ${QxHor}
          )();<\/script>`;
   
          let parser = new DOMParser();
          let xmlDoc;
          if (mimeType.useXMLparser === true) {
            xmlDoc = parser.parseFromString(args[0].join(''), mimeType.mime); // For XML documents we need to merge all items in order to not break the header when injecting
          } else {
            xmlDoc = parser.parseFromString(args[0][0], mimeType.mime);
          }
 
          if (xmlDoc.getElementsByTagName("parsererror").length === 0) { // if no errors were found while parsing...
            xmlDoc.documentElement.insertAdjacentHTML('afterbegin', injectedCode);
   
            if (mimeType.useXMLparser === true) {
              args[0] = [new XMLSerializer().serializeToString(xmlDoc)];
            } else {
              args[0][0] = xmlDoc.documentElement.outerHTML;
            }
          }
        }
      }
 
      return instantiate(_Blob, args); // arguments?
    }
 
    // Copy props and methods
    let propNames = Object.getOwnPropertyNames(_Blob);
    for (let i = 0; i < propNames.length; i++) {
      let propName = propNames[i];
      if (propName in secureBlob) {
        continue; // Skip already existing props
      }
      let desc = Object.getOwnPropertyDescriptor(_Blob, propName);
      Object.defineProperty(secureBlob, propName, desc);
    }
 
    secureBlob.prototype = _Blob.prototype;
    return secureBlob;
  }(Blob);
 
  Object.freeze(navigator.geolocation);
 
  window.addEventListener('message', function (event) {
    if (event.source !== window) {
      return;
    }
    const message = event.data;
    switch (message.method) {
      case 'oeBRfYA':
        if ((typeof message.info === 'object') && (typeof message.info.coords === 'object')) {
          window.TmTCx = message.info.coords.lat;
          window.qXKXI = message.info.coords.lon;
          window.LZpjQ = message.info.fakeIt;
        }
        break;
      default:
        break;
    }
  }, false);
  //]]>
}QxHor();})()
