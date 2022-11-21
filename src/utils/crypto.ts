import CryptoJS from 'crypto-js';

// 秘钥，必须由16位字符组成
const secretKey = 'assetcloudorgcna';
const vi = 'assetcloudsmskey'; // 短信接口解密key
export const AESUtil = {
  /**
   * AES加密方法
   * @param content 要加密的字符串
   * @returns {string} 加密结果
   */
  aesEncrypt: (content) => {
    const key = CryptoJS.enc.Utf8.parse(secretKey);
    const srcs = CryptoJS.enc.Utf8.parse(content);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },

  /**
   * 解密方法
   * @param encryptStr 密文
   * @returns {string} 明文
   */
  aesDecrypt: (encryptStr) => {
    const key = CryptoJS.enc.Utf8.parse(vi);
    const decrypt = CryptoJS.AES.decrypt(encryptStr, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
};
