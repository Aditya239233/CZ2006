import axios from "axios";

function makeName(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const RegisterUser = async (userData) => {
  try {
    const result = await axios.post(
      "http://localhost:5000/api/users/",
      userData
    );
    //console.log(result["status"]);
    return result["status"];
  } catch (err) {
    return err.response.data.errors[0]["msg"];
  }
};

// change email each time
test("correct registration", async () => {
  const name = makeName(8);
  const newUser = {
    name: name,
    email: name + "@gmail.com",
    password: "thisIsMyPassword",
    password2: "thisIsMyPassword",
  };

  const res = await RegisterUser(newUser);
  expect(res).toBe(200);
});

test("existing email registration", async () => {
  const newUser = {
    name: "SuperUser",
    email: "superuser@gmail.com",
    password: "thisIsMyPassword",
    password2: "thisIsMyPassword",
  };

  const res = await RegisterUser(newUser);
  expect(res).toBe("User already exists");
});

// bug?
test("empty confirm password registration", async () => {
  const name = makeName(9);
  const newUser = {
    name: name,
    email: name + "@gmail.com",
    password: "thisIsMyPassword",
    password2: "",
  };

  const res = await RegisterUser(newUser);
  expect(res).toBe(200);
});

test("empty  name for registration", async () => {
  const newUser = {
    name: "",
    email: "superUser1@gmail.com",
    password: "thisIsMyPassword",
    password2: "thisIsMyPassword",
  };

  const res = await RegisterUser(newUser);
  expect(res).toBe("Name is required");
});
