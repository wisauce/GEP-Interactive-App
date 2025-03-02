let userName = null;

export function getUserName() {
  if (!userName && typeof window !== "undefined") {
    userName = localStorage.getItem("userName") || ""; 
  }
  return userName;
}

export function setUserName(name) {
  userName = name;
  localStorage.setItem("userName", name);
}
