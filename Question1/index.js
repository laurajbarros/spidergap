
// As almost everything in javascript is an object, I have to handle each type separately


function deepClone(obj){

  // In case of string, boolean, Number or undefined:
  if(obj == null || "object" != typeof obj){
    return obj
  }

  // In case of Array
  if(obj instanceof Array){
    var clone =[];
    for(let i = 0;i< obj.length;i++){
      clone.push(obj[i])
    }
    return clone;
  }
  // In case of Function
    if(obj && {}.toString.call(obj) === '[object Function]'){
      var clone = obj.bind({});
      return clone
    };

    // In case of Date
    if(obj instanceof Date){
      var clone = new Date();
      clone.setTime(obj.getTime());
      console.log(clone);
      return clone
    }

  // In case of Object
  if(obj instanceof Object){
    var clone ={};
      for(var property in obj){
        clone[property] = obj[property];
      }
      return clone;
  }
}

const functions = {
  deepClone: deepClone
}
module.exports = functions;
