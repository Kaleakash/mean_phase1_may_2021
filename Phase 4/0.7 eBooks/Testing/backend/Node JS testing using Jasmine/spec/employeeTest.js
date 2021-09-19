describe("testing hook",()=> {
    beforeAll(()=> {
        console.log("This function called only once before all it ")
    })
    beforeEach(()=> {
        console.log("This function called before each it function ")
    })
    it("first testing",()=> {
        console.log("while first it testing")
            expect(true).toBeTruthy();
    })
    it("second testing",()=> {
        console.log("while second it testing")
            expect(false).toBeFalsy();
    })
    afterEach(()=> {
        console.log("This funtion called after each it function")
    })
    afterAll(()=> {
        console.log("This function called only once after all it")
    })
})