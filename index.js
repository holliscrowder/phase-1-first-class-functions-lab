// Code your solution in this file!
// return first two drivers
const returnFirstTwoDrivers = (array) => [array[0], array[1]];

// return last two drivers
const returnLastTwoDrivers = (array) => [
  array[array.length - 2],
  array[array.length - 1],
];

// selecting drivers
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// fare multiplier
function createFareMultiplier(multiplier) {
  return function myFare(fare) {
    return fare * multiplier;
  };
}

// fare doubler
const fareDoubler = createFareMultiplier(2);

// fare tripler
const fareTripler = createFareMultiplier(3);

// select different drivers
function selectDifferentDrivers(array, whichTwoDrivers) {
  return whichTwoDrivers(array);
}
