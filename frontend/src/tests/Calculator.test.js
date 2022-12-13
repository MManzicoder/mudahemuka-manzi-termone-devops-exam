import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Calculator from "../views/Calculator";

//unit tests
it("renders correctly", () => {
  const wrapper = mount(<Calculator />);
  expect(wrapper.state("error")).toEqual(null);
});

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders wrapper header correctly", () => {
  const wrapper = shallow(<App />);
  const wrapperHeader = <div>Manzi's Calculator</div>;
  expect(wrapper.contains(wrapperHeader)).toEqual(true);
});

const request = {
  operand1: 100,
  operand2: 500,
  operation: "*",
};
//integration test
it("should includes calculator component on rendering", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("button").text).toEqual("Calculate");
});
//e2e test
it("should return valid response", () => {
  const wrapper = shallow(<Calculator />);
  wrapper.instance().calculate(request);
  expect(wrapper.state("result")).toEqual(50000);
});
it("should return error", () => {
  const wrapper = shallow(<Calculator />);
  wrapper.instance().calculate({ ...request, operand2: 0 });
  expect(wrapper.state("error")).toEqual("Cannot divide by zero");
});
