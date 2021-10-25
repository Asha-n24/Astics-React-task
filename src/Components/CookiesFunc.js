import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getLocalStorageValues = (key) => {
  return localStorage.getItem(key);
};

// Store single Cookie Values

export const storeCookieData = (key, value) => {
  if (value) cookies.set(key, value, { path: "/" });
};

// Get Single Cookie Data

export function getCookieData(key) {
  return cookies.get(key);
} 

// Remove Single Cookie Data

export function removeCookieData(key) {
  return cookies.remove(key, { path: "/" });
}

//  Removing all Cookie Data

export async function ClearCookie() {
  const allCookie = cookies.getAll();
  if (allCookie) {
    for (let key in allCookie) {
      await cookies.remove(key, { path: "/" });
    } 
  }
}

