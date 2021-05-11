"use strict";

const io = require("socket.io-client");

const server =
  "http://testapplication-env.eba-9wxcwjyb.us-west-2.elasticbeanstalk.com/";

const socket = io.connect(server);

socket.on("welcome", (payload) => console.log(payload));

socket.emit("hello", "Nicholas");
