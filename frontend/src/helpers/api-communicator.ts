import axios from "axios";

const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    throw new Error(error.response?.data?.cause || "An unexpected API error occurred.");
  }
  throw new Error("An unknown error occurred.");
};

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("/user/login", { email, password });
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const signupUser = async (name: string, email: string, password: string) => {
  try {
    const res = await axios.post("/user/signup", { name, email, password });
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const checkAuthStatus = async () => {
  try {
    const res = await axios.get("/user/auth-status");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chat/new", { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  try {
    const res = await axios.get("/chat/all-chats");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteUserChats = async () => {
  try {
    const res = await axios.delete("/chat/delete");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.get("/user/logout");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};
