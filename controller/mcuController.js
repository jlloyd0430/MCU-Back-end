const Mcu = require("../models/mcuModel");

async function getAllCharacters(req, res) {
  try {
    let result = await Mcu.find({});

    res.json({
      message: "success",
      payload: result,
    });
  } catch (error) {
    res.json({
      message: "failure",
      payload: `getAllCharacters error: ${error}`,
    });
  }
}

async function createCharacter(req, res) {
  try {
    let newCharacter = {
      name: req.body.name,
      debut: req.body.debut,
      debutYear: req.body.debutYear,
    };

    await Mcu.create(newCharacter);

    res.json({
      message: "success",
      payload: newCharacter,
    });
  } catch (error) {
    res.json({
      message: "failure",
      payload: `createCharacter error: ${error}`,
    });
  }
}

async function getCharacterByName(req, res) {
  try {
    let foundCharacter = await Mcu.findOne({ name: req.params.name });

    res.json({
      message: "success",
      payload: foundCharacter,
    });
  } catch (error) {
    res.json({
      message: "failure",
      payload: `getCharacterByName error: ${error}`,
    });
  }
}

async function updateCharacter(req, res) {
  try {
    let targetedCharacter = await Mcu.findOne({ _id: req.params.id });

    let updatedCharacter = {
      _id: targetedCharacter._id,
      name: targetedCharacter.name,
      debut: req.body.debut,
      debutYear: req.body.debutYear,
    };

    await updatedCharacter.save();

    res.json({
      message: "success",
      payload: updatedCharacter,
    });
  } catch (error) {
    res.json({
      message: "failure",
      payload: `updateCharacter() failed: ${error}`,
    });
  }
}

async function deleteCharacter(req, res) {
  try {
    let deleteTarget = req.params.id;

    let deletedChar = await Mcu.deleteOne({ _id: deleteTarget });

    res.json({
      message: "success",
      payload: deletedChar,
    });
  } catch (error) {
    res.json({
      message: "error",
      payload: `deleteCharacter() error: ${error}`,
    });
  }
}

module.exports = {
  getAllCharacters,
  createCharacter,
  getCharacterByName,
  updateCharacter,
  deleteCharacter,
};
