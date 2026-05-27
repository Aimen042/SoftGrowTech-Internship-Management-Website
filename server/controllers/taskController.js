const { sql } = require("../config/db");

// CREATE TASK
const uploadTask = async (req, res) => {

  try {

    const title = req.body?.title;
    const description = req.body?.description;

    const studentId = req.user.id;

    // uploaded file
    const fileUrl = req.file
      ? req.file.filename
      : null;

    // insert task
    await sql.query`
      INSERT INTO Tasks (
        title,
        description,
        fileUrl,
        studentId
      )
      VALUES (
        ${title},
        ${description},
        ${fileUrl},
        ${studentId}
      )
    `;

    res.status(201).json({
      message: "Task uploaded successfully",
    });

  } catch (error) {
    console.log("UPLOAD ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyTasks = async (req, res) => {
  try {
    const studentId = req.user.id;

    const result = await sql.query`
      SELECT * FROM Tasks
      WHERE studentId = ${studentId}
      ORDER BY createdAt DESC
    `;

    res.json(result.recordset);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const result = await sql.query`
      SELECT 
      Tasks.*, Users.fullName, Users.email
      FROM Tasks
      INNER JOIN Users
      ON Tasks.studentId = Users.id
      ORDER BY createdAt DESC
    `;

    res.json(result.recordset);

  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (req, res) => {

  try {

    const { id, status } = req.body;

    await sql.query`
      UPDATE Tasks
      SET status = ${status}
      WHERE id = ${id}
    `;

    res.json({
      message: "Status updated successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  uploadTask,
  getMyTasks,
  getAllTasks,
  updateStatus,
};