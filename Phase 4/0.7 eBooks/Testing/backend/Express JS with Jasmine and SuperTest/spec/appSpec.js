let app = require("../src/app");
let request = require("supertest");
describe("Express JS testing",()=> {

    xit("Get Text Message testing ",(finish)=> {
request(app).get("/textMsg").expect(data=> {
    expect("Welcome to Express Js Application").toBe(data.text);
    }).end(e=>e?finish.fail(e):finish());
})

    xit("Get Json Data Testing",(finish)=> {
        request(app).get("/getCustomers").expect(data=> {
            //console.log(data)
            let customers = data.body;
                expect(1).toBe(customers.length);
            let cust = customers[0];
                expect(cust.cid).toBe(100);
                expect("Raj").toBe(cust.cname);
                expect(21).toBe(cust.age);
        }).end(e=>e?finish.fail(e):finish());
    })

    it("Post method testing",(finish)=> {
        let customer = {"cid":101,"cname":"Ramesh","age":34};
        request(app).post("/storeData").send(customer).
        expect(data=> {
            expect(data.text).toBe("Record stored successfully")
        }).end(e=>e?finish.fail(e):finish());
    })


})