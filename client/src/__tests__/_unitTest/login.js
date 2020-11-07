import axios from "axios";

const loginUser = async (userData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios.post(
      "http://localhost:5000/api/auth",
      JSON.stringify(userData),
      config
    );
    return result["status"];
  } catch (err) {
    return err.response.data.errors[0]["msg"];
  }
};

test("incorrect login credentials", async () => {
  const userData = {
    email: "aditya.chandrasekhar2001@gmail.com",
    password: "pokemon123",
  };
  const res = await loginUser(userData);
  expect(res).toBe("Invalid Credentials");
});

test("empty email", async () => {
  const userData = {
    email: "",
    password: "pokemon123",
  };
  const res = await loginUser(userData);
  expect(res).toBe("Please include a valid email");
});

test("empty password", async () => {
  const userData = {
    email: "aditya.chandrasekhar2001@gmail.com",
    password: "",
  };
  const res = await loginUser(userData);
  expect(res).toBe("Invalid Credentials");
});

test("correct password", async () => {
  const userData = {
    email: "aditya.chandrasekhar2001@gmail.com",
    password: "pokemon1234",
  };
  const res = await loginUser(userData);
  expect(res).toBe(200);
});
