const getPayloadWithValidFieldsOnly = (validFields, payload) =>
    Object.entries(payload).reduce(
        (acc, [key, value]) =>
        validFields.includes(key) ? {...acc, [key]: value } : acc, {}
    );

const logError = (type = "Server Error", message = "Something went wrong") => {
    console.error(`[ERROR]: ${type} | ${message}`);
};

const logInfo = (type, message) => {
    console.log(`[INFO]: ${type} | ${message}`);
};

const returnRandomArrayElements = (arr, desiredLength) => {
    const newArray = [];

    for (let i = 0; i < desiredLength; i++) {
        const random = Math.floor(Math.random() * arr.length);
        newArray.push(arr[random]);
    }

    return newArray;
};

module.exports = {
    getPayloadWithValidFieldsOnly,
    logError,
    logInfo,
    returnRandomArrayElements,
};