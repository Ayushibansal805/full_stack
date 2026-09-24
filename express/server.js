// import express from "express";

// const app = express();

// // Middleware to read JSON body
// app.use(express.json());

// // Temporary users array
// const users = [];

// // Create a new user
// const createNewUser = (req, res) => {
//     const user = {
//         name: "Ayushi",
//         age: 20
//     };

//     users.push(user);

//     res.status(201).json({
//         message: "User created successfully",
//         user: user
//     });
// };

// // Get all users
// const getAllUsers = (req, res) => {
//     res.status(200).json({
//         users: users
//     });
// };

// // Routes
// app.post("/createNewUser", createNewUser);
// app.get("/getAllUsers", getAllUsers);

// // Start server
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// )

// import express from "express";

// const app = express();

// // Middleware to read JSON body
// app.use(express.json());

// // Temporary users array
// const users = [];

// // Create a new user
// const createNewUser = (req, res) => {
//     const user = {
//         id: users.length + 1,
//         name: "Ayushi",
//         age: 20
//     };

//     users.push(user);

//     res.status(201).json({
//         message: "User created successfully",
//         user: user
//     });
// };

// // Get all users
// const getAllUsers = (req, res) => {
//     res.status(200).json({
//         users: users
//     });
// };

// // Routes
// app.post("/createNewUser", createNewUser);
// app.get("/getAllUsers", getAllUsers);

// // Start server
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

import express from "express";

const app = express();

function logger(req, res, next) {
    console.log(`Method: ${req.method}, URL: ${req.url}, IP: ${req.ip}, time: ${new Date().toISOString()}`);
    next();
}
app.use(logger);

function checkLogin(req, res, next) {
    const allowed = false;

    if (!allowed) {
        return res.status(401).json({
            "message": "You need to login first"
        })
    }
    next();
}
app.get("/home", (req, res) => {
    res.status(200).json({"message": "Welcome to the home page"});
});
app.get("/about", checkLogin, (req, res) => {
    res.status(200).json({"message": "Welcome to the about page"});
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
