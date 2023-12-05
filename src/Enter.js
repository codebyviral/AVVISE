document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var inputs = document.getElementsByTagName('input');
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i] === document.activeElement) {
          if (i === inputs.length - 1) {
            inputs[0].focus();
          } else {
            inputs[i + 1].focus();
          }
          break;
        }
      }
    }
  });