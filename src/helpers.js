const helpers = {

  kelvinToFarenheit: temp => {
    const base = temp - 273.15;
    const finalTemp = (base * 9) / 5 + 32;
    return finalTemp.toFixed(0);
  },

  dateConversion: num => {
    return new Date(num).toString();
  },

  capitalizeFirstLetter: str => {
    const capitalizedStr = str.split(' ').map(word => {
      const firstLetter = word.slice(0, 1).toUpperCase();
      const rest = word.slice(1);
      return firstLetter.concat(rest);
    });

    return capitalizedStr.join(' ');
  }

};

export default helpers;
