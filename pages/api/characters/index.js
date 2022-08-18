import db from '../../../db/db';
import { Character } from '../../../models/character';
import { House } from '../../../models/house';
db();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const characters = await Character.find({});
        res.status(200).json({ success: true, characters });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const house = await House.findById(req.body.houseId);
        if (!house) return res.status(400).send('ID not valid');

        const character = await Character.create({
          name: req.body.name,
          description: req.body.description,
          power: req.body.power,
          house: {
            _id: house._id,
            name: house.name,
            symbol: house.symbol,
          },
        });
        res.status(200).json({ success: true, character });
      } catch (e) {
        res.status(400).json({ success: false });
        console.log(e.message);
      }
      break;

    default:
      res.status(400).json({ success: false }, e.message);
      break;
  }
}
