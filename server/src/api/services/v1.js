const ServerError = require('../../lib/error');
/**
 * @param {Object} options
 * @param {String} options.search Search text
 * @param {Integer} options.offset 
 * @param {Integer} options.limit The number of items to return
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getV1Users = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'getV1Users ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.id User&#x27;s unique id
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getV1UsersById = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'getV1UsersById ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.id User&#x27;s unique id
 * @throws {Error}
 * @return {Promise}
 */
module.exports.putV1UsersById = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'putV1UsersById ok!'
  };
};

