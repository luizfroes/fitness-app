const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

const logError = (type = "Server Error", message = "Something went wrong") => {
  console.error(`[ERROR]: ${type} | ${message}`);
};

const logInfo = (type, message) => {
  console.log(`[INFO]: ${type} | ${message}`);
};

module.exports = {
  getPayloadWithValidFieldsOnly,
  logError,
  logInfo,
};
