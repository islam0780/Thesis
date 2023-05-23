import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';

function EncryptDecrypt() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(CryptoJS.enc.Utf8);
    setDecryptedText(decrypted);
  };

  const handleEncryptionKeyChange = (event) => {
    setEncryptionKey(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const data = {
        inputText: inputText,
        encryptedText: encryptedText,
        decryptedText: decryptedText
      };
      await axios.post('http://localhost:5000/', data);
      setInputText('');
      setEncryptedText('');
      setDecryptedText('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Encryption App</h1>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt}>Decrypt</button>
      <button onClick={handleSubmit}>Save to Database</button>
      <p>Encrypted Text: {encryptedText}</p>
      <p>Decrypted Text: {decryptedText}</p>
    </div>
  );
}

export default EncryptDecrypt;
