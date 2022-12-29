const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "pabearyoga@gmail.com" };
    await sgMail.send(email).then(() => {
      console.log("Email sent");
    });
    return true;
  } catch (error) {
    throw Error;
  }
};

module.exports = sendEmail;
