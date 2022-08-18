import db from '../../../db/db';
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
        const house = await House.findById({ _id: id });
        if (!house) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, house });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT':
      try {
        const house = await House.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!house) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, house });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        const house = await House.findByIdAndDelete({ _id: id });
        if (!house) return res.status(400).json({ success: false });

        res.status(200).json({ success: true });
      } catch (e) {
        res.status(400).send({ success: false });
      }

    default:
      res.status(400).send({ success: false });
      break;
  }
}
