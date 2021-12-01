const net = require("net");

//let connection;

// const setupInput = (conn) => {
//   connection = conn;
// };

const handleUserInput = function (e) {
 
  if (e === '\u0003') {
    process.exit();
  }
   else if (e.which == 87) {
    process.write('Move: up')
  }
  else if (e.which == 65) {
    process.write('Move: left')
  }
  else if (e.which == 83) {
    process.write('Move: down')
  }
  else if (e.which == 68) {
    process.write('Move: right')
  }
};


const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput));
  return stdin;
};

module.exports = setupInput;