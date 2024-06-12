import CryptoJS from "crypto-js";

/**
 * 加密方法
 * @param password
 */
export function hashPassword(password: string): string {
  // console.log("打印加密盐：", process.env.ENCRYPT_SALT);
  return CryptoJS.MD5(password).toString().substring(8, 24);
}

/**
 * 验证密码是否相等
 * @param original 原始密码
 * @param encrypted 加密后的密码
 */
export function passwordIsEq(original: string, encrypted: string): boolean {
  return CryptoJS.MD5(original).toString().substring(8, 24) === encrypted;
}
