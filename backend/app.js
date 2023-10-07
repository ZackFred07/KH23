/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// This may not be right with the express
var express = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

var router = express.Router();

router.get("/", function (req, res, next) {
	res.render("index", {
		title: "MSAL Node & Express Web App",
		isAuthenticated: req.session.isAuthenticated,
		username: req.session.account?.username,
	});
});

socket.on("chat", (message) => {
	// console.log('From client: ', message)
	io.emit("chat", message);
});

socket.on("chat", (message) => {
	console.log("From server: ", message);
});

module.exports = router;
