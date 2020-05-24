var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "abbazabba",
  //password: process.env.MYSQL_PASSWORD,
  database: "employee_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  tracker();
});

function tracker() {
    inquirer
    .prompt({
        name: "whatToDo",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Role", "Add Deparatment", "Update Employee Role"]
    })
}