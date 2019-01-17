const helpers = {

  kelvinToFarenheit: temp => {
    const base = temp - 273.15;
    const finalTemp = (base * 9) / 5 + 32;
    return finalTemp.toFixed(0);
  },

  dateConversion: num => {
    return new Date(num).toString();
  }

};

export default helpers;
