# intermittent-app
A codebase for the intermittent-reinforcement-based running application


# run the server

To run the server that saved the user data to the database, the sql database should be running and following variables should be defined in the **.env** file <br />
DB_HOST=""<br />
DB_PORT=""<br />
DB_USER=""<br />
DB_PASSWORD=""<br />
DB_DATABASE=""<br /><br />
**For example:**<br />
DB_HOST=localhost<br />
DB_PORT=3306<br />
DB_USER=root<br />
DB_PASSWORD=password<br />
DB_DATABASE=inter_db<br />
<br />
Then run the following lines to start the server on the **port 3030**

```
cd server
```
```
npm run start:dev
```


# run application (client side)

```
cd client
```
```
npm run start
```
**Important note:** Replace the **serverHost variable in client/src/utils/globalVariables.ts**  for your own server host path that the server has started. If it is the localhost of your machine then use ip address instead of localhost (because the expo app can not be run on the http:// path)

https://drive.google.com/file/d/1pfpmWSaJJnqwjHQHHQgmwWKUQyTgKXnl/view?usp=share_link
