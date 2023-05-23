# Summary

This code repository contains a project that demonstrates a simple encryption application using React for the front-end and Node.js with PostgreSQL for the back-end. 
The application allows users to enter text, encrypt it using AES encryption, and save the encrypted data to a PostgreSQL database. 
The encrypted data can be decrypted and displayed back to the user.

The front-end is built using React and provides a user interface where the user can enter text, encrypt it, and save it to the database.
The encrypted text is displayed to the user, and they can also decrypt it if needed. The front-end uses the crypto-js library for encryption and decryption.

The back-end is built using Node.js and uses Express.js as the server framework. 
It establishes a connection to the PostgreSQL database and provides API endpoints for saving and retrieving the encrypted data. 
The back-end uses the pg library to interact with the PostgreSQL database.

Overall, this code demonstrates the implementation of a basic encryption application using React, Node.js, and PostgreSQL.
