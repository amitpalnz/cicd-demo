const fibonacci = require("./fibonacci.js");

describe("fibonacci tests",()=>{

  it("returns[0,1] when 2", ()=>{
  const expected = [0,1];
  const actual =fibonacci(2);
  expect(actual).toStrictEqual(expected);
  })

  it("returns[0] when 1", ()=>{
    const expected = [0];
    const actual =fibonacci(1);
    expect(actual).toStrictEqual(expected);
    })

})