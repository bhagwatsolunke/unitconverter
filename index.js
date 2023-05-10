function convert() {
    const fromValue = document.getElementById("fromValue").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    let result;
  
    switch (fromUnit) {
      case "meter":
        switch (toUnit) {
          case "kilometer":
            result = fromValue / 1000;
            break;
          case "mile":
            result = fromValue * 0.000621371;
            break;
          case "yard":
            result = fromValue * 1.09361;
            break;
          default:
            result = fromValue;
        }
        break;
      case "kilometer":
        switch (toUnit) {
          case "meter":
            result = fromValue * 1000;
            break;
          case "mile":
            result = fromValue * 0.621371;
            break;
          case "yard":
            result = fromValue * 1093.61;
            break;
          default:
            result = fromValue;
        }
        break;
      case "mile":
        switch (toUnit) {
          case "meter":
            result = fromValue / 0.000621371;
            break;
          case "kilometer":
            result = fromValue / 0.621371;
            break;
          case "yard":
            result = fromValue * 1760;
            break;
          default:
            result = fromValue;
        }
        break;
      case "yard":
        switch (toUnit) {
          case "meter":
            result = fromValue / 1.09361;
            break;
          case "kilometer":
            result = fromValue / 1093.61;
            break;
          case "mile":
            result = fromValue / 1760;
            break;
          default:
            result = fromValue;
        }
        break;
      default:
        result = fromValue;
    }
  
    document.getElementById("toValue").value = result.toFixed(2);
  }
  