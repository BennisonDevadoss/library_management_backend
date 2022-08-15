function generateRandomPassword() {
  return Math.random().toString(36).slice(-6);
  /* toString(36) Here the 36 is used to create a AlphaNumeric string */
}

export { generateRandomPassword };
