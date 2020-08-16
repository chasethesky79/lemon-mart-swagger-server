const express = require('express');
const v1 = require('../services/v1');

const router = new express.Router();


/**
 * Searches and returns 'User' objects
 * 
 * Optional query params determines values of returned array
 * 
 */
router.get('/users', async (req, res, next) => {
  const { query: { search, offset, limit }} = req;
  const options = {
    search,
    offset,
    limit
  };

  try {
    const result = await v1.getV1Users(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Gets a `User` object by id
 */
router.get('/users/:id', async (req, res, next) => {
  const { params: { id }} = req;
  const options = {
    id
  };

  try {
    const result = await v1.getV1UsersById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Updates an existing `User`
 */
router.put('/users/:id', async (req, res, next) => {
  const { body, params: { id }} = req;
  const options = {
    body,
    id
  };

  try {
    const result = await v1.putV1UsersById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;
