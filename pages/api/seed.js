import {data} from '../../constants';
import db from '../../utils/mongo/db';
import User from '../../utils/mongo/models/UserModel';

const handler = async (req, res) => {
	await db.connect();
	await User.deleteMany();
	await User.insertMany(data.users);
	await db.disconnect();
	res.send({ message: 'seeded successfully' });
};

export default handler;
