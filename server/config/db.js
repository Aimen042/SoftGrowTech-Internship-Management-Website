// config/db.js
const sql = require("mssql/msnodesqlv8");

const config = {
  connectionString:
    "Driver={ODBC Driver 18 for SQL Server};Server=DESKTOP-4JA80GU\\SQLEXPRESS;Database=InternHubDB;Trusted_Connection=Yes;Encrypt=no;TrustServerCertificate=yes;",
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("SQL Server Connected Successfully");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = { sql, connectDB };