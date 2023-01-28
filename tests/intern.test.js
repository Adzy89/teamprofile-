const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const value = "UNSW";
  const intern = new Intern("Adam", 1, "adam@gmail.com", value);
  expect(intern.school).toBe(value);
});

test("getRole() should return \"Intern\"", () => {
  const value = 'Intern';
  const intern = new Intern("Adam", 1, "adam@gmail.com", "UNSW");
  expect(intern.getRole()).toBe(value);
});

test("Can get school via getSchool()", () => {
  const value = "UNSW";
  const intern = new Intern("adam", 1, "adam@gmail.com", value);
  expect(intern.getSchool()).toBe(value);
});