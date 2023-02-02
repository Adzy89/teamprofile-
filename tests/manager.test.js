const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("get work number via constructor argument", () => {
  const value = 100;
  const manager = new Manager("Adam", 1, "adam@gmail.com", value);
  expect(manager.workNumber).toBe(value);
});

test("getRole() should return Manager", () => {
  const value = "Manager";
  const manager = new Manager("Adam", 1, "adam@gmail.com", 100);
  expect(manager.getRole()).toBe(value);
});

test("get work number via getOffice()", () => {
  const value = 100;
  const manager = new Manager("Adam", 1, "adam@gmail.com", value);
  expect(manager.getWorkNumber()).toBe(value);
});