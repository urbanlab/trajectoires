import CryptoJS from "crypto-js";

export function encryptPassword(plain: string, passphrase: string): string {
  // Retourne une string base64 (format OpenSSL, avec salt)
  return CryptoJS.AES.encrypt(plain, passphrase).toString();
}

export function decryptPassword(cipherText: string, passphrase: string): string {
  const bytes = CryptoJS.AES.decrypt(cipherText, passphrase);
  const plain = bytes.toString(CryptoJS.enc.Utf8);

  if (!plain) {
    // passphrase incorrecte ou cipher invalide
    throw new Error("Decrypt failed");
  }
  return plain;
}