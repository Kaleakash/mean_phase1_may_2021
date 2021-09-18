let obj = require("../src/sample");

describe("Sample Code Testing",()=> {
    it("sayHello function testing",()=> {
       let result = obj.sayHello();
       expect(result).toContain("Jasmine"); 
    })

    it("check user details",()=> {
        let result = obj.check("Raj","123");
        expect(result).toBeTrue();
    })

    it("vote function testing",()=> {
        let result = obj.vote();
        expect(21).toBeGreaterThan(result);
    })
    it("message",()=> {
        let result = obj.message();
        expect(result).toBeUndefined();
    })
})