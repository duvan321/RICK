const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getAllRicki = async (req, res) => {
  try {
    const response = await axios.get(URL);
    const characters = response.data.results.map((character) => {
      const { id, name, image, gender, species, origin, status } = character;
      return {
        id,
        name,
        image,
        gender,
        species,
        origin,
        status,
      };
    });

    res.json(characters).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { getAllRicki };
