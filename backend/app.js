const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const createAdapter = require("@socket.io/redis-adapter").createAdapter;
const redis = require("redis");
require("dotenv").config();
const { createClient } = redis;
const {
	userJoin,
	getCurrentUser,
	userLeave,
	getCategoryUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

const botName = "ChatCord Bot";

(async () => {
	pubClient = createClient({ url: "redis://127.0.0.1:6379" });
	await pubClient.connect();
	subClient = pubClient.duplicate();
	io.adapter(createAdapter(pubClient, subClient));
})();

// Run when client connects
io.on("connection", (socket) => {
	console.log(io.of("/").adapter);
	socket.on("joinCategory", ({ username, category }) => {
		const user = userJoin(socket.id, username, category);

		socket.join(user.category);

		// Welcome current user
		socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"));

		// Broadcast when a user connects
		socket.broadcast
			.to(user.category)
			.emit(
				"message",
				formatMessage(botName, `${user.username} has joined the chat`)
			);

		// Send users and category info
		io.to(user.category).emit("categoryUsers", {
			category: user.category,
			users: getCategoryUsers(user.category),
		});
	});

	// Listen for chatMessage
	socket.on("chatMessage", (msg) => {
		const user = getCurrentUser(socket.id);

		io.to(user.category).emit("message", formatMessage(user.username, msg));
	});

	// Runs when client disconnects
	socket.on("disconnect", () => {
		const user = userLeave(socket.id);

		if (user) {
			io.to(user.category).emit(
				"message",
				formatMessage(botName, `${user.username} has left the chat`)
			);

			// Send users and category info
			io.to(user.category).emit("categoryUsers", {
				category: user.category,
				users: getCategoryUsers(user.category),
			});
		}
	});
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
