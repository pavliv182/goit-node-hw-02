const { Contact } = require("../../models/contact");
const createError = require("../../helpers/createError");

const updateContact = async (req, res, next) => {
  const result = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!result) {
    throw createError(400, "missing fields");
  }
  res.json(result);
};

module.exports = updateContact;
