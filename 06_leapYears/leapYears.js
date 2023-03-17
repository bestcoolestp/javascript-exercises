const leapYears = function(givenYear) {
    if(givenYear % 4 === 0 && (givenYear % 100 !== 0 || givenYear % 400 === 0)) {
        return `${givenYear} is a leap year`;
    } else {
        return `${givenYear} is Not a year `;
    }
};

// Do not edit below this line
module.exports = leapYears;
