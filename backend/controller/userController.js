const userModel = require('../model/usersModel')
const mongoose = require('mongoose');

// For test purposes
const test = async (req, res) => {
    try {
        return res.json("Hello World!");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

// For create users
const create = async (req, res) => {
    try {
        const { email, name, age, address } = req.body;

        // Check if user already exists with this email
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "User already exists with this email" });
        }

        const newUser = new userModel({ email, name, age, address });
        await newUser.save();
        console.log("new user saved SucessFully");

        return res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            gender: newUser.age,
            avatar: newUser.address,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}

// for read users
const read = async (req, res) => {

    try {
        const users = await userModel.find();
        if (users.length === 0) {
            return res.status(404).json({ error: "No users found" });
        }

        res.status(200).json({ users });
        console.log("Users fetched");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

// for update users
const update = async (req, res) => {
    try {
        const id = req.params.id;

        const userExists = await userModel.findOne({ _id: id });
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }

        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: updatedUser });
        console.log("User updated");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

// for delete users
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userExists = await userModel.findOne({ _id: id });
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }
        await userModel.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: "User deleted successfully" });
        console.log("User deleted successfully");

    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
        console.log(error);
    }
}


module.exports = { test, create, read, update, deleteUser };