//@desc Get all Contacts
//@router GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
};

//@desc Create new Contact
//@router POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

//@desc Get Contacts for id
//@router GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update Contact for id
//@router PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete Contact for id
//@router DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
