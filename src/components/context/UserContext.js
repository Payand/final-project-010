import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
export const UserContext = createContext();

const apiKey = "b39a6d50962ff85858b03b950b6d3958";
const baseUrl = "https://api.themoviedb.org/3";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [session, setSession] = useState(() => localStorage.getItem("session"));

  const login = async (username, password) => {
    try {
      const tokenResult = await axios.get(
        `${baseUrl}/authentication/token/new?api_key=${apiKey}`
      );

      const auth = await axios.post(
        `${baseUrl}/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        }
      );

      const session = await axios.post(
        `${baseUrl}/authentication/session/new?api_key=${apiKey}`,
        {
          request_token: auth.data.request_token,
        }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
      toast.success("Successfully logged in");
    } catch {
      toast.error("Wrong username or password");
    }
  };

  const getUserAccount = async () => {
    const { data } = await axios.get(
      `${baseUrl}/account?api_key=${apiKey}&session_id=${session}`
    );
    setUser(data);
  };

  useEffect(() => {
    if (session) {
      getUserAccount();
    }
  }, [session]);

  const logout = () => {
    setUser(null);
    setSession(() => localStorage.clear());
    toast.success("you logged out");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
