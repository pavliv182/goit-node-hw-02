const contacts = require("../../models/contacts");
const createError = require("../../helpers/createError");

const getById = async (req, res, next) => {
  const result = await contacts.getContactById(req.params.contactId);
  if (!result) {
    throw createError(404, "Not found");
    //   res.status(404).json({
    //     message: "Not found",
    //   });
  }

  res.status(200).json(result);
};

module.exports = getById;
