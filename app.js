'use strict';
var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(minCustomersPerHour, maxCustomersPerHour, avgCookiePerCustomer, totalCookiesPerDay){
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.totalCookiesPerDay = totalCookiesPerDay;
}
var seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiePerCustomer: 6.3,
    totalCookiesPerDay: 0,
    //generates a random number of customers per hour
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    //calculates how many cookies are sold in a given hour based on multiplying the random number of customers and the average number of cookies sold per customer
    calcCookiesInHour: function (){
       return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
    },
    hourlyCookies: [],
    // calculates how many cookies are sold in a given hour for each hour in the hoursOfOperation array, and returns those values in the hourlyCookies array.
    calcCookiesPerHour: function(){
        for (var i = 0; i < hoursOfOperation.length; i++){
            // console.log(i);
            var hourCookies = this.calcCookiesInHour();
            // console.log(hourCookies);
           this.hourlyCookies.push(hourCookies);
           this.totalCookiesPerDay += this.calcCookiesInHour();
        }
        return(this.hourlyCookies);
    },

  
    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('seattleCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = ` ${hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
    var lastListItem = document.createElement('li');
    lastListItem.textContent = `Total Cookies: ${this.totalCookiesPerDay}`;
    parent.appendChild(lastListItem);
  }
}

var tokyo = {
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiePerCustomer: 1.2,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < hoursOfOperation.length; i++){
            // console.log(i);
            var hourCookies = this.calcCookiesInHour();
            // console.log(hourCookies);
           this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('tokyoCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = ` ${hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
  }
}

var dubai = {
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiePerCustomer: 3.7,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < hoursOfOperation.length; i++){
            // console.log(i);
            var hourCookies = this.calcCookiesInHour();
            // console.log(hourCookies);
           this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('dubaiCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = ` ${hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
  }
}

var paris = {
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiePerCustomer: 2.3,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < hoursOfOperation.length; i++){
            // console.log(i);
            var hourCookies = this.calcCookiesInHour();
            // console.log(hourCookies);
           this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('parisCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = ` ${hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
  }
}

var lima = {
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiePerCustomer: 4.6,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < hoursOfOperation.length; i++){
            // console.log(i);
            var hourCookies = this.calcCookiesInHour();
            // console.log(hourCookies);
           this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('limaCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = ` ${hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
  }
}
seattle.displayHourlyCookies();

// tokyo.displayHourlyCookies();
// dubai.displayHourlyCookies();
// paris.displayHourlyCookies();
// lima.displayHourlyCookies();