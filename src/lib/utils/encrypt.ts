import CryptoJS from "crypto-js";

export function hashPassword(password: string): string {
  console.log("打印盐：", process.env.ENCRYPT_SALT);
  return CryptoJS.MD5(password).toString().substring(8, 24);
}

export function passwordIsEq(original: string, encrypted: string): boolean {
  return CryptoJS.MD5(original).toString().substring(8, 24) === encrypted;
}
