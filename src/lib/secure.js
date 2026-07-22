import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECURE_KEY;

export const secureSet = (key, value) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      SECRET_KEY
    ).toString();
    localStorage.setItem(key, encrypted);
  } catch (err) {
    console.error(`Failed to securely set key "${key}":`, err);
  }
};

export const secureGet = (key) => {
  const encrypted = localStorage.getItem(key);
  if (!encrypted) return null;

  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (err) {
    console.error(`Failed to securely get key "${key}":`, err);
    return null;
  }
};

export const secureRemove = (key) => {
  localStorage.removeItem(key);
};
