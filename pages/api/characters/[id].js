import db from '../../../db/db';
import { Character } from '../../../models/character';
import { House } from '../../../models/house';

db();

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const character = await Character.findById(id);
        if (!character) return res.status(400).json({ succes: false });
        res.status(200).json({ success: true, character });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT':
      try {
        const character = await Character.findByIdAndUpdate(
          { _id: id },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!character) return res.status(400).json({ success: false });
        res.status(200).json({
          success: true,
          character,
        });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        const character = await Character.deleteOne({ _id: id });
        if (!character) return res.status(400).json({ success: false });
        await res.status(200).json({ success: true });
        console.log();
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
