const Movie = require("../model/movie");

exports.getdata = async (req, res) => {
  try {
    const data = await Movie.find().populate("categry");
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};

exports.postdata = async (req, res) => {
  try {
    const data = await Movie.create(req.body);
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};
