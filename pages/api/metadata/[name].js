export default function handler (req, res) {
  const { name } = req.query
  const file = JSON.parse(require('fs').readFileSync('collection/_metadata.json'))
  const item = file.find(f => f.name === name)

  res.status(200).json({ ...item })
}