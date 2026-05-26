(function () {
  "use strict";

  var SCRIPT_CACHE = {};

  function loadScriptOnce(src, attrs) {
    if (SCRIPT_CACHE[src]) {
      return SCRIPT_CACHE[src];
    }

    var existing = document.querySelector('script[src="' + src + '"]');
    if (existing) {
      SCRIPT_CACHE[src] = Promise.resolve(existing);
      return SCRIPT_CACHE[src];
    }

    SCRIPT_CACHE[src] = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (attrs) {
        Object.keys(attrs).forEach(function (key) {
          script.setAttribute(key, attrs[key]);
        });
      }
      script.onload = function () {
        resolve(script);
      };
      script.onerror = function () {
        reject(new Error("Failed to load " + src));
      };
      document.head.appendChild(script);
    });

    return SCRIPT_CACHE[src];
  }

  function setLazyDefaults() {
    var images = document.querySelectorAll("img");
    images.forEach(function (img) {
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
      if (!img.hasAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
    });
  }

  function init() {
    setLazyDefaults();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
