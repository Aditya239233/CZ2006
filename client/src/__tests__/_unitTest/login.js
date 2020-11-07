import axios from "axios";

const loginUser = async (userData) => {
  try {
    const result = await axios.post(
      "http://localhost:5000/api/users/login",
      userData
    );
    return result;
  } catch (err) {
    return err.response.data;
  }
};

test("incorrect login credentials", async () => {
  const userData = {
    email: "aditya.chandrasekhar2001@gmail.com",
    password: "pokemon123",
  };
  const res = await loginUser(userData);
  expect(res["passwordincorrect"]).toBe("Password incorrect");
});

test("empty email", async () => {
  const userData = {
    email: "",
    password: "pokemon123",
  };
  const res = await loginUser(userData);
  expect(res["email"]).toBe("Email field is required");
});

test("empty password", async () => {
  const userData = {
    email: "aditya.chandrasekhar2001@gmail.com",
    password: "",
  };
  const res = await loginUser(userData);
  expect(res["password"]).toBe("Password field is required");
});

test("correct password", async () => {
  const userData = {
    email: "aditya.chandrasekhar2001@gmail.com",
    password: "pokemon1234",
  };
  const res = await loginUser(userData);
  expect(res["status"]).toBe(200);
});
