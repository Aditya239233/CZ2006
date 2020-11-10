import axios from "axios";

const Profile = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios.post(
      "http://localhost:5000/api/profile/me",
      JSON.stringify(formData),
      config
    );
    return result["status"];
  } catch (err) {
    return err.response.statusText;
  }
};

test("Profile Not Found", async () => {
  const formData = {
    flat_type: "4 Room",
    location: "",
    price: "600000",
    remaining_lease: "Any",
    storey: "4-9 (Mid)",
  };
  const res = await Profile(formData);
  expect(res).toBe("Not Found");
});
