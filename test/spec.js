const expect = require("chai").expect;
const rewire = require("rewire");

let app = rewire("../app");

describe("postFilter", function() {
    let postFilter = app.__get__("postFilter");

    it("should be a function", () => {
        expect(postFilter).to.be.a("function");
    });
});