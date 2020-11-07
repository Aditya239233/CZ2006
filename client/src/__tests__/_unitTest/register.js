import axios from "axios";

const RegisterUser = async (userData) => {
  try {
    const result = await axios.post("http://localhost:5000/api/users/register", userData);
    return result
  } catch (err) {
    return err.response.data;
  }
};

test("correct registration", async () => {
    const newUser = {
        name: "SuperUser",
        email: "Superuser@gmail.com",
        password: "thisIsMyPassword",
        password2: "thisIsMyPassword",
      };

    const res = await RegisterUser(newUser);
    expect(res["status"]).toBe(200)
})

test("existing email registration", async () => {
    const newUser = {
        name: "SuperUser",
        email: "superuser@gmail.com",
        password: "thisIsMyPassword",
        password2: "thisIsMyPassword",
      };

    const res = await RegisterUser(newUser);
    expect(res["email"]).toBe("Email already exists")
})

test("empty confirm password registration", async () => {
    const newUser = {
        name: "SuperUser1",
        email: "superUser1@gmail.com",
        password: "thisIsMyPassword",
        password2: "",
      };

    const res = await RegisterUser(newUser);
    expect(res["password2"]).toBe("Passwords must match")
})

test("empty confirm password registration", async () => {
    const newUser = {
        name: "",
        email: "superUser1@gmail.com",
        password: "thisIsMyPassword",
        password2: "thisIsMyPassword",
      };

    const res = await RegisterUser(newUser);
    expect(res["name"]).toBe("Name field is required")
})