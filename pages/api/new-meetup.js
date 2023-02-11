import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const uri = `https://vicroads-assistant.firebaseio.com/meetups.json`;

    const response = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'applications/json' },
    });
    console.log(response);

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default handler;
