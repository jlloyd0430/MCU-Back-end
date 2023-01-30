const Mcu = require("../models/mcuModel");

async function getAllCharacters(req, res){
    try {
        let result = await Mcu.find({});

        res.json({
            message: "success",
            payload: result
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `getAllCharacters error: ${error}`
        });
    }
}

async function createCharacter(req, res){
    try {
        let newCharacter = {
            name: req.body.name,
            debut: req.body.debut,
            debutYear: req.body.debutYear
        }

        await Mcu.create(newCharacter);

        res.json({
            message: "success",
            payload: newCharacter
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `createCharacter error: ${error}`
        })
    }
}

async function getCharacterByName(req, res){
    try {
        let foundCharacter = await Mcu.findOne({name: req.params.name});

        res.json({
            message: "success",
            payload: foundCharacter
        })
    } catch (error) {
        res.json({
            message: "failure",
            payload: `getCharacterByName error: ${error}`
        })
    }
}

module.exports = {
    getAllCharacters,
    createCharacter,
    getCharacterByName
}