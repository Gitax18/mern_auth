# MERN application with JWT Authentication

I have created this project to practise building application with authentication and authorization. This page contains three pages - Login, Register and Home.
Home page contains some authorised API calls, So to access Home page we have to login first and to Login, we will need account.

## Tech Stack

**Frontend**:

- React JS: Library to create the application UI
- React Toasts: Library for react which provides toast components
- React Router Dom: Library for react to provide routing

**Backend**

- Node JS: Javascript Runtime for build server side application
- Express: Node js library to create servers with ease
- Joi: Library to add server side validation
- Mongoose: A MongoDB ODM Library to create schema and manage Mongodb Database
- Cors: Library to handle cors realted tasks
- jsonwebtoken: Library to create and manage JWT tokens
- bcrypt: Library to work with encryptions and decryption

**Database**

- MongoDb: Popular NoSQL based database

## Installation Process

1. Clone the repo and move to project directory

   ```bash
    git clone https://github.com/Gitax18/mern_auth.git
    cd mern_auth
   ```

### Backend

2. Change directory to backend and install all the dependencies.
   ```bash
   cd backend
   npm i
   ```
3. Create a `.env` file in backend and add following field
   ```bash
      PORT=<Port no>
      DB_STRING=<write your mongodb connection string URI>
      JWT_SECRET=<write any string>
   ```
4. Run the server
   ```bash
    npm start
   ```

### Frontend

5. Now move to frontend directory.
   ```bash
     cd ../frontend
   ```
6. Now configure the proxies in vite.config.js, change the URL Port.
   ```javascript
   export default defineConfig({
     server: {
       proxy: {
         "/login": "http://localhost:<Your Server Port Here>",
         "/register": "http://localhost:<Your Server Port Here>",
         "/product": "http://localhost:<Your Server Port Here>",
       },
     },
     plugins: [react()],
   });
   ```
7. Start the server
   ```bash
      npm run dev
   ```

## Work Under Development

- [ ] Working on RefreshComponent to redirect user to application when the user is authenticated and trying to access to login or register page.
- [ ] Removing the authentication based navbar on Home and adding a seperate Navbar.

## Resources

- [Understanding Theory of JWT token (Youtbe)](https://www.youtube.com/watch?v=xrj3zzaqODw)

- [Building login and signup MERN app (Youtube) ](https://www.youtube.com/watch?v=OYkmIIKfWq4)
