const post = require('../../../pkg/blog');
const { Post, PostPartial, validate } = require('../../../pkg/blog/validation');

const getAll = async (req, res) => {
  try {
    let ps = await post.getAll(req.user.id);
    return res.send(ps);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal server error!');
  }
};
const getSingle = async (req, res) => {
  try {
    let ps = await post.getSingle(req.user.id, req.params.id);
    if (!ps) {
      throw {
        code: 404,
        error: 'Post not found!',
      };
    }
    return res.send(ps);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.error);
  }
};
const create = async (req, res) => {
  try {
    await validate(req.body, Post);
    let data = {
      ...req.body,
      user_id: req.user.id,
    };
    let ps = await post.create(data);
    return res.status(201).send(ps);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.error);
  }
};
const update = async (req, res) => {
  try {
    await validate(req.body, Post);
    let data = {
      ...req.body,
      user_id: req.user.id,
    };
    await post.update(req.params.id, data);
    return res.status(204).send('');
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.error);
  }
};
const updatePartial = async (req, res) => {
  try {
    await validate(req.body, PostPartial);
    let data = {
      ...req.body,
      user_id: req.user.id,
    };
    await post.update(req.params.id, data);
    return res.status(204).send('');
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.error);
  }
};
const remove = async (req, res) => {
  try {
    await post.remove(req.params.id);
    return res.status(204).send('');
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.error);
  }
};

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  updatePartial,
  remove,
};
