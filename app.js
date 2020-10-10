'use strict';
// Global Variables
var hoursOfOperation = ['Store', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Totals']; //TODO Add Daily Totals
var hoursOpen = 14;
var allStores = [];
var parentElement = document.getElementById('cookieSales');
var hourlyRunningTotal = [];
var grandTotal = 0;
var formElement = document.getElementById('form');
// Constructor
function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiePerCustomer, hourlyCookies = [], totalCookiesPerDay = 0) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.hourlyCookies = hourlyCookies;
  this.totalCookiesPerDay = totalCookiesPerDay;
  allStores.push(this);
  this.calcCookiesPerHour();
}
// Objects

// Prototypes
Store.prototype.generateCustomersPerHour = function (min, max) {
  min = Math.ceil(this.minCustomersPerHour);
  max = Math.floor(this.maxCustomersPerHour);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
Store.prototype.calcCookiesPerHour = function () {
  if (this.hourlyCookies.length <= 14) {
    for (var i = 0; i < hoursOpen; i++) {
      var cookiesSoldInThisOneHour = Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
      this.hourlyCookies.push(cookiesSoldInThisOneHour);
      this.totalCookiesPerDay += cookiesSoldInThisOneHour;  //Perhaps adding total day into the array.

    }
  }
};
Store.prototype.renderContentRow = function () { //generate CONTENT
  var trElement = document.createElement('tr');
  parentElement.appendChild(trElement);
  var storeName = document.createElement('th');
  storeName.textContent = this.name;
  trElement.appendChild(storeName);
  console.log(this.hourlyCookies[i]);
  for (var i = 0; i < this.hourlyCookies.length; i++) {
    var hourlyCookiesTD = document.createElement('td');
    console.log(this.hourlyCookies[i]);
    hourlyCookiesTD.textContent = this.hourlyCookies[i];
    trElement.appendChild(hourlyCookiesTD);
  }
  var dailyTotalTD = document.createElement('td');
  dailyTotalTD.textContent = this.totalCookiesPerDay;
  trElement.appendChild(dailyTotalTD);
};

// Helper Functions

// }
function renderStoreHourHeader() {
  var trElement = document.createElement('tr');
  // trElement.appendChild(document.createElement('td'));
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hoursOfOperation[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}

function generateTotalHourlyCookies(allStores) {
  var newTotalThisHour = 0;
  // for (var k = 0; k < allStores.length; k++) {  //Cycle Through Stores Hourly Cookies
  //   allStores[k].calcCookiesPerHour();
  // }

  for (var i = 0; i < allStores[0].hourlyCookies.length; i++) { //Running through array Hourly Cookies.
    for (var j = 0; j < allStores.length; j++) {  //Cycle through the stores

      newTotalThisHour += allStores[j].hourlyCookies[i];
    }
    hourlyRunningTotal.push(newTotalThisHour);
    grandTotal += newTotalThisHour;
    newTotalThisHour = 0;
  }
}
function generateTotalsRow() {
  var trElement = document.createElement('tr');

  var totalsTH = document.createElement('th');
  totalsTH.textContent = 'Totals';
  trElement.appendChild(totalsTH);

  for (var i = 0; i < hoursOpen; i++) {

    var tdElement = document.createElement('td');

    tdElement.textContent = `${hourlyRunningTotal[i]}`;
    trElement.appendChild(tdElement);
  }
  var tdElement2 = document.createElement('td');
  tdElement2.textContent = grandTotal;
  trElement.appendChild(tdElement2);
  parentElement.appendChild(trElement);
}
function handleSubmit(event) {
  event.preventDefault();
  parentElement.innerHTML = '';

  var city = event.target.city.value;
  var minCustomersPerHour = event.target.minCustomersPerHour.value;
  var maxCustomersPerHour = event.target.maxCustomersPerHour.value;
  var avgCookiePerCustomer = event.target.avgCookiesSoldPerCustomer.value;
  new Store(city, minCustomersPerHour, maxCustomersPerHour, avgCookiePerCustomer);
  generateTotalHourlyCookies(allStores);
  renderStoreHourHeader();
  renderAllContentRows();
  generateTotalsRow();

  // newStore.calcCookiesPerHour();

  // hoursOfOperation.pop('Daily Location Total');
  // hoursOfOperation.shift('');
  // for (var i = 0; i < allStores.length; i++) {
  //   allStores[i].hourlyCookies.shift();
  // }
  // hourlyRunningTotal.shift('Totals');
  // renderStoreHourHeader();
  // generateAllContentRows();
  // generateTotalsRow();
}
function renderAllContentRows() {
  for (var i = 0; i < allStores.length; i++) {

    allStores[i].renderContentRow();
  }
}

new Store('Seattle', 23, 65, 6.3, [], this.totalCookiesPerDay);
new Store('Tokyo', 3, 24, 1.2, [], this.totalCookiesPerDay);
new Store('Dubai', 11, 38, 3.7, [], this.totalCookiesPerDay);
new Store('Paris', 20, 38, 2.3, [], this.totalCookiesPerDay);
new Store('Lima', 2, 16, 4.6, [], this.totalCookiesPerDay);

// Executable Code
formElement.addEventListener('submit', handleSubmit);
generateTotalHourlyCookies(allStores);
renderStoreHourHeader();
renderAllContentRows();
generateTotalsRow();
