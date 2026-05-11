import { getClientCookie } from "../cookies/clientCookie/clientSideCookie";
import Jwt_decode from "./Jwt_decode";

const checkTokenExpiration = (
  cookieName: string,
  refetchToken: () => Promise<void>
) => {
  const Token = getClientCookie(cookieName);
  
  if (!Token) return; 
  
  const decodedToken = Jwt_decode(Token);
  if (!decodedToken || !decodedToken.exp) return; 
  
  const nowTime = Math.floor(Date.now() / 1000);
  const timeLeft = decodedToken.exp - nowTime;
  
  console.log(`Time left for token: ${Math.floor(timeLeft / 60)} minutes`);
  
  if (timeLeft <= 0) {
    console.log("Token expired, refreshing now...");
    return refetchToken();
  } 
  else if (timeLeft <= 120) {
    console.log("Token expires in less than 2 minutes, refreshing...");
    return refetchToken();
  } 
  else {
    const refreshIn = (timeLeft - 120) * 1000;
    console.log(`Will refresh token in ${Math.floor(refreshIn / 60000)} minutes`);
    
    setTimeout(async () => {
      console.log("Refreshing token before expiration...");
      await refetchToken();
    }, refreshIn);
  }
};

export default checkTokenExpiration;