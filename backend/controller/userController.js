// const userModel = require('../model/usersModel')

const test = async (req, res) => {
    try {
        return res.json("Hello World!");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

const create = async (req, res) => {

}

const read = async (req, res) => {

}

const update = async (req, res) => {

}

const remove = async (req, res) => {

}

module.exports = { test, create, read, update, remove };