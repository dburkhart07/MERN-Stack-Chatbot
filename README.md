# MERN Stack AI Chatbot

Utilizes the MERN stack to essentially create a ChatGPT clone, including user signup/authentication

---

## Running

### Installing Dependencies
This project uses Nodejs

Clone the repository and begin intalling dependencies.

Both the frontend and backend can have then dependencies installed by running:
```bash
npm install
```
If this does not work, try making sure you have node installed/the right version

### MongoDB Configuration
This project uses a MongoDB database. To appropriately set up a connetion for the database follow these steps:
<ol>
  <li>Make sure you have MongoDB installed</li>
  <li>Sign into MongoDB Atlas and create a new cluster</li>
  <li>This will allow you to then create a new MongoDB database</li>
  <li>Get a connection string and add that in your backend .env file</li>
</ol>

### Authentication
Create a random string for the JWT authentication, as well as the cookies secret

### OpenAI Integration
This project uses the OpenAI API for chat integration. In order to use the OpenAI API, you will need to use your own personal OpenAI Secret Key

### End
