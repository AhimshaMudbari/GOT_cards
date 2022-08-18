import db from '../../../db/db';
import { House } from '../../../models/house';
db();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const houses = await House.find({});
        res.status(200).json({ success: true, houses });
      } catch (e) {
        res.status(400).json({
          success: false,
        });
      }
      break;

    case 'POST':
      try {
        const house = await House.create(req.body);
        res.status(200).json({ success: true, house });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
