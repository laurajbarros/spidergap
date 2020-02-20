const index = require("./index");

// checks if CoordinatesParser works well with correct latitude and longitude
test('Should convert string to object with lat and long in numbers ',()=>{
  const string = "10.3333333,-84.445666";
  expect(index.coordinatesParser(string)).toEqual({
    lat:10.3333333,
    lon:-84.445666
  });
})

// checks if CoordinatesParser works well with string with only lat or long
test('Should return value of coordinate as NaN if gets a string with only lat or lon ',()=>{
  const string = "10.3333333, ";
  expect(index.coordinatesParser(string)).toEqual({
    lat:10.3333333,
    lon:NaN
  });
})


// check if calculation of distance from London is correct
test('Should return distance of 7121 if receives lat = 10,67 and long = -61.50...',()=>{
  const office = {lat: 10.6792447, lon: -61.56065180000002};
  expect(index.calculateDistance(office)).toBe(7121.899289338758);
})

// checks that application returns empty array if partner/partners not within London 100km range
test('Should return empty array if partner not within London',()=>{
  const onePartner = [
    {
      "id": 1,
      "urlName": "balance-at-work",
      "organization": "Balance at Work",
      "customerLocations": "across Australia, Pacific and Oceania",
      "willWorkRemotely": true,
      "website": "http://www.balanceatwork.com.au/",
      "services": "At Balance at Work, we want to help you make work a joy for your employees and you! We specialize in leadership development, talent management and career coaching, and use Spidergap as one of our tools to help employees focus their development and achieve more.",
      "offices": [
        {
          "location": "Sydney, Australia",
          "address": "Suite 1308, 109 Pitt St \nSydney 2000",
          "coordinates": "-33.8934219,151.20404600000006"
        }
      ]
    }
  ]
  expect(index.getPartners(onePartner)).toEqual([]);
})

// Other possible tests would be:
// Test that partner has no office information
// Test situation where coordinates of partner office is exatcly the same as London
