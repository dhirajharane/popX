
export const isAuthenticated = () => {
  return localStorage.getItem("userAuthenticated") === "true";
};

export const authenticateUser = () => {
  localStorage.setItem("userAuthenticated", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("userAuthenticated");
};
