import axios from "axios";

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

const makeName = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const DBScriptor = (numOfUsers, nameLength = 8) => {
  for (let i = 0; i < numOfUsers; i++) {
    var name = makeName(nameLength);
    var password = makeName(10);
    const newUser = {
      name: name,
      email: name + "@gmail.com",
      password: password,
      password2: password,
    };
  }
};

DBScriptor(10, 8);
