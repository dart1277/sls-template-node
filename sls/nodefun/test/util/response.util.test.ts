import { expect } from "chai";
import sinon from "sinon";
import { RespUtil } from "../../src/util/response.util";
import "mocha";

describe("Test name", () => {
  it("when x then y", () => {
    const jsonMock = sinon.mock(JSON);
    jsonMock.expects("stringify").once().returns('{"k":"mock"}');
    const obj = { k: "v1" };
    const res = RespUtil.serialize(obj);
    console.log("-> ", res);

    jsonMock.verify();
    expect(res).to.match(/[\w\W]+/);
  });
});
