//ES5 style 
describe("Employee Testing",()=> {
    var emp;
    beforeEach(()=> {
        emp = new Employee();
    })

    it("display function testing",()=> {
    var result = emp.display();
    expect(result).toBe("This is display function")
    })

})
//ES6 style 
describe("Customer Testing ",()=> {
    var cust;
    beforeEach(()=> {
        cust = new Customer(100,"Raj");     // while creating the memory we have to pass cid and cname
    })
    it("Display Customer Info ",()=> {
        var result = cust.displayCustInfo();
        expect(result).toBe("Welcome Raj");
    })
})