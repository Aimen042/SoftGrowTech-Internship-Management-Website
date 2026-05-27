const { sql } = require("../config/db");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // Validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check existing user
    const existingUser = await sql.query`
      SELECT * FROM Users WHERE email = ${email}
    `;

    if (existingUser.recordset.length > 0) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    await sql.query`
      INSERT INTO Users (
        fullName,
        email,
        password,
        role
      )
      VALUES (
        ${fullName},
        ${email},
        ${hashedPassword},
        ${role || "student"}
      )
    `;

    res.status(201).json({
      message: "User registered successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // find user
    const result = await sql.query`
      SELECT * FROM Users WHERE email = ${email}
    `;

    const user = result.recordset[0];

    // user not found
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // create token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // success response
    res.status(200).json({
      message: "Login successful",

      token,

      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  signupUser,
  loginUser,
};