
import { jwtDecode } from "jwt-decode";  

const Jwt_decode = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

export default Jwt_decode;