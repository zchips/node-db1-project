const { getById, getByName } = require("./accounts-model")


exports.checkAccountPayload = (req, res, next) => {
  console.log(typeof req.body.name, typeof req.body.budget)
if (typeof req.body.name === 'undefined'|| typeof req.body.budget === "undefined") {
  res.status(400).json({ message: "name and budget are required" })
} else if (`${typeof req.body.name}` !== "string") {
  res.status(400).json({ message: "name of account must be a string" })
} else if (req.body.name.trim().length < 3 || req.body.name.trim().length > 100) {
  res.status(400).json({ message: "name of account must be between 3 and 100" })
}  else if (`${typeof req.body.budget}` !== "number") {
  res.status(400).json({ message: "budget of account must be a number" })
} else if (req.body.budget < 0 || req.body.budget > 1000000) {
  res.status(400).json({ message: "budget of account is too large or too small" })
} else { next() }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
