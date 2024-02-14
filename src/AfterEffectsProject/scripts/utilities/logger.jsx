// utilities/logger.jsx
var Logger = (function () {
  function log(message) {
    $.writeln('INFO: ' + message);
  }

  function error(message) {
    $.writeln('ERROR: ' + message);
    alert('ERROR: ' + message); // Display error in a dialog box
  }

  return {
    log: log,
    error: error
  };
})();
