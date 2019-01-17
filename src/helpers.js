const helpers = {

  kelvinToFarenheit: temp => {
    const base = temp - 273.15;
    const multiplyBase = (base * 9) / 5;
    const finalTemp = multiplyBase + 32;
    return finalTemp.toFixed(0);
  },

  dateConversion: num => {
    return new Date(num).toString();
  }

};

export default helpers;
