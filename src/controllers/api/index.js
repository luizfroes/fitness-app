const { Routine, Exercise, ExerciseRoutine, User } = require("../../models");
const { logError } = require("../../helpers/logger");
const { getPayloadWithValidFieldsOnly } = require("../../helpers/helpers.js");

const login = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["email", "password"],
      req.body
    );
    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({
        success: false,
        error: "Please provide all the valid fields in the post body!",
      });
    }

    const user = await User.findOne({ where: { email: payload.email } });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Please provide a valid Email!",
      });
    }

    const validPassword = await user.checkPassword(payload.password);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        error: "Invalid Password!",
      });
    }

    const userInSession = {
      id: user.get("id"),
      email: user.get("email"),
      firstName: `${user.get("first_name")}`,
      lastName: `${user.get("last_name")}`,
      age: `${user.get("age")}`,
      weight: `${user.get("weight")}`,
      height: `${user.get("height")}`,
    };

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userInSession;

      return res.json({ success: true, data: "Login successful" });
    });
  } catch (error) {
    logError("LOGIN User", error.message);

    return res
      .status(500)
      .json({ success: false, error: "Failed to Login User" });
  }
};

const signup = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      [
        "user_name",
        "email",
        "password",
        "first_name",
        "last_name",
        "age",
        "weight",
        "height",
      ],
      req.body
    );

    if (Object.keys(payload).length !== 8) {
      return res.status(400).json({
        success: false,
        error: "Please provide all the valid fields in the post body!",
      });
    }

    await User.create(payload);

    return res.json({ success: true, data: "User successfully created" });
  } catch (error) {
    logError("Create User failed", error);

    return res
      .status(500)
      .json({ success: false, error: "Failed to create User" });
  }
};

const logout = async (req, res) => {
  res.send("logout");
};

const createNewRoutine = async (req, res) => {
  res.send("createNewRoutine");
};

const updateRoutineById = async (req, res) => {
  res.send("updateRoutineById");
};

const deleteRoutineById = async (req, res) => {
  res.send("deleteRoutineById");
};

const getAllRoutines = async (req, res) => {
  const routines = await Routines.findAll({
    include: [
      {
        model: Exercises,
        through: ExerciseRoutine,
      },
      {
        model: Users,
      },
    ],
  });

  const allRoutines = routines.map((each) => {
    return each.get({
      plain: true,
    });
  });

  res.json({ data: allRoutines });
  //res.send("getAllRoutines");
};

const getRoutineById = async (req, res) => {
  res.send("getRoutineById");
};

module.exports = {
  login,
  signup,
  logout,
  createNewRoutine,
  updateRoutineById,
  deleteRoutineById,
  getRoutineById,
  getAllRoutines,
};
