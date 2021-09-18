var obj = require("../src/operation");
describe("Operating Testing",()=> {
    it("Addition Testing ",()=> {
        var result = obj.add(10,20);
        expect(30).toBe(result);
    })
    it("Substraction Testing ",()=> {
        var result = obj.sub(20,10);
        expect(10).toBe(result);
    })
    it("Mul Testing ",()=> {
        var result = obj.mul(2,4);
        expect(8).toBe(result);
    })
    it("Div Testing ",()=> {
        var result = obj.div(20,10);
        expect(2).toBe(result);
    })

})