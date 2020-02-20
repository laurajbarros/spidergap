var partners = require('./partners.json');
getPartners(partners);

// Find and sort by alphabetic order the partners that have offices within 100km of London
function getPartners(partners){
  if (!partners){
    return []
  }
  let filteredPartners = [];
  partners.forEach(function(partner){
    partner.offices.forEach(function(office){
      if(isLessThan100km(office.coordinates)){
        filteredPartners.push({
          name: partner.organization,
          address: office.address
        })
      }
    })
  })
  return sortPartners(filteredPartners);
}

// If we are dealing with big data I'd use a merge sort algorithm in order
// to have a better performance, as it wasnt specified, I will use Javascript
// built in sort()
function sortPartners(filteredPartners){
  filteredPartners.sort(function (a, b) {
    if (a.organization > b.organization) {
      return 1;
    }
    if (a.organization < b.organization) {
      return -1;
    }
    return 0;
  });
  return(filteredPartners);
}

// Checks if distance between London and Partner is less than 100km
function isLessThan100km(coordinates){
  let parsedcoordinates = coordinatesParser(coordinates);
  let distance = calculateDistance(parsedcoordinates);
  if (distance < 100){
    return true
  }
  return false
}

// Calculates distance between London and Partner
function calculateDistance(office){
  const origin = {
    lat:51.515419,
    lon: -0.141099
  };
  let lat1 = toRadians(origin.lat);
  let lat2 = toRadians(office.lat);
  let delta1 = toRadians(office.lat - origin.lat);
  let delta2 = toRadians(office.lon - origin.lon);
  const R = 6371;
  var a = Math.sin(delta1/2)*Math.sin(delta1/2) + Math.cos(lat1)*Math.cos(lat2)*Math.sin(delta2/2)*Math.sin(delta2/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distance = R * c;
  return distance
}

// Converts degrees to Radians
function toRadians(coordinate){
  return coordinate*Math.PI/180;
}

// converts coordinates from string to numbers in an object
function coordinatesParser(string){
  let coordinates = string.split(",");
  const lat = parseFloat(coordinates[0]);
  const lon = parseFloat(coordinates[1]);
  return obj = {
    lat : lat,
    lon : lon
  }
}

// exports functions to test
const functions = {
  getPartners: getPartners,
  sortPartners: sortPartners,
  isLessThan100km: isLessThan100km,
  calculateDistance: calculateDistance,
  toRadians:toRadians,
  coordinatesParser:coordinatesParser
}
module.exports = functions;
