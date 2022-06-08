import jwt from "jsonwebtoken";

const generatetoken = (id,email) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });
};

export default generatetoken;