//const net = require("net");

const connect = require('./client');

const setupInput = require('./input');



// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",
//     port: 50541,
//   });
 
//   // interpret incoming data as text
//   conn.setEncoding("utf8");
  
//   conn.on("connect", () => {
//     console.log("you ded cuz you idled");
//   });
//   return conn;
// };

// const handleUserInput = function () {
//   if (key === '\u0003') {
//     process.exit();
//   }
// };


// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", (handleUserInput));
//   return stdin;
// };


 console.log("Connecting ...");
 connect();
setupInput();


//module.exports = connect;