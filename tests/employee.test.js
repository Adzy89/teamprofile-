const Employee = require("../lib/employee");

test("create Employee instance", () => {
  const employee = new Employee();
  expect(employee instanceof Employee).toBe(true);
  });

test("set name through constructor", () => {
  const name = "Adam";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("set id through consrtuctor argument", () => {
  const value = 100;
  const employee = new Employee("Adam", value);
  expect(employee.id).toBe(value);
});

test("set email through constructor argument", () => {
  const value = "adam@gmail.com";
  const employee = new Employee("Adam", 1, value);
  expect(employee.email).toBe(value);
});

test("get name via getName()", () => {
  const value = "Adam";
  const employee = new Employee(value);
  expect(employee.getName()).toBe(value);
});

test("get id via getId()", () => {
  const value = 100;
  const employee  = new Employee("Adam", value);
  expect(employee.getId()).toBe(value);
});

test("get email via getEmail()", () => {
  const value = "adam@gmail.com";
  const employee  = new Employee("adam", 1, value);
  expect(employee.getEmail()).toBe(value);
});

test("getRole() should return Employee", () => {
  const value = "Employee";
  const employee  = new Employee("Adam", 1, "adam@gmail.com");
  expect(employee.getRole()).toBe(value);
});
