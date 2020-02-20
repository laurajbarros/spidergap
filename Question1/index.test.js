const index = require("./index");

test('If function gets a string it returns a cloned string',()=>{
  const objString = "String";
  expect(index.deepClone("String")).toBe("String");
})

test('If function gets a null it returns null',()=>{
  const nullValue = null;
  expect(index.deepClone(nullValue)).toBe(null);
})

test('If function gets an object it returns the same object',()=>{
  const paddy = {
    name: "Paddy",
    address: {
      town: "Lerum",
      country: "Sweden"}
    };
  expect(index.deepClone(paddy)).toEqual(paddy);
})

test('If function gets an array it returns the same array',()=>{
  const place = ["Rio de Janeiro", "Atlanta", "Oregon"];
  expect(index.deepClone(place)).toEqual(place);
})

test('If function gets a date it returns the same date',()=>{
  const time = new Date();
  expect(index.deepClone(time)).toEqual(time);
})
