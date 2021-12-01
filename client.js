const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: GWK');
    //conn.write('Move: up');
    setTimeout(() => {
              conn.write('Move: up');
            }, 1000)
            setTimeout(() => {
              conn.write('Move: down');
            }, 2000)
            setTimeout(() => {
              conn.write('Move: left');
            }, 3000)
            setTimeout(() => {
              conn.write('Move: right');
            }, 4000)
  });

  // conn.on("data", () => {
  //   console.log("we have data");
  // });

  return conn;
};


// //for (let i = 1; i <= 10 ; i++) { // moveup with timeout delay
//       setTimeout(() => {
//         conn.write('Move: left');
//       }, 2000) //* i)
//    // };


// console.log("Connecting ...");
// connect();
module.exports = connect;