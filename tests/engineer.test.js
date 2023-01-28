const Engineer = require("../lib/engineer");

test("get GitHUb account via constructor", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("Adam", 1, "adam@gmail.com", value);
  expect(engineer.github).toBe(value);
});

test("getRole() should return Engineer value", () => {
  const value = "Engineer";
  const engineer = new Engineer("Adam", 1, "adam@gmail.com", "GitHubUser");
  expect(engineer.getRole()).toBe(value);
});

test("get GitHub username via getGithub()", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("Adam", 1, "adam@gmail.com", value);
  expect(engineer.getGithub()).toBe(value);
});