const express = require('express');
const router = express.Router();

const {
    getAllCharacters,
    createCharacter,
    getCharacterByName
} = require("../controller/mcuController");

// localhost:3001/api/allCharacters
router.get("/allCharacters", getAllCharacters);

// localhost:3001/api/createCharacter
router.post("/createCharacter", createCharacter);

// localhost:3001/api/getCharacterByName/:name
router.get("/getCharacterByName/:name", getCharacterByName);

module.exports = router;