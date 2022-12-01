// const fs = require('fs/promises')

const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.resolve("./models/contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const fileReadContact = contacts.find(({ id }) => id === contactId);
  return fileReadContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactDelete = contacts.filter((el) => el.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(contactDelete));
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const contactIds = contacts.map((item) => +item.id);
  const newContact = {
    id: String(Math.max(...contactIds) + 1),
    body,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
