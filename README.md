# crud-angular-spring-kotlin-mongodb


## Running the app using docker-compose

### Prequisites
Docker/DockerHub

1. Run the app using Docker Build (First Time)
 ```
 docker-compose up --build
```
2. Run the app using docker-compose.yml (after First Time)
  ``` 
  docker-compose up
  ```

3. Shut down the app using docker-compose.yml (everytime)
  ```
  docker-compose down
  ```
## Running the app in Development

### Prequisites

openjdk version "1.8.0_252"

Node.js v14.17.0

MongoDB latest


## How to start


### Server

Navigate to server folder , and execute the following commands

1. build dependncies
```
./gradlew build
```
2. Run the server
```
java -jar *.jar
```
### Client

Navigate to client folder, and execute the following commands

1. Install dependencies using npm
 ```
 npm i
```
2. Starting angular using development server 
```
  npm run start
```
