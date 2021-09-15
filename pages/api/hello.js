// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from 'lib/mongodb'

export default async function handler(req, res) {
  const database = await connect()
  console.log(database)

  res.status(200).json({ name: 'John Doe' })
}
