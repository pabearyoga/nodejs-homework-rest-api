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

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const contactIds = contacts.map((item) => +item.id);
  const newContact = {
    id: String(Math.max(...contactIds) + 1),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactDelete = contacts.filter((el) => el.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(contactDelete));
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();
  const contactsIndex = contacts.findIndex(({ id }) => id === contactId);
  if (contactsIndex === -1) {
    return { message: "Not found" };
  }
  contacts[contactsIndex] = { id: contactId, name, email, phone };
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[contactsIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
