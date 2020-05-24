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
    .prompt([
        {
            name: "whatToDo",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Roles", "View All Departments", "Add Employee", "Add Role", "Add Deparatment", "Update Employee Role", "Quit"]
        },
    ])
    .then(function (data) {
        switch (data.nav) {
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Departments":
                viewAllDepartments();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            case "Ouit":
                quit();
                break;
        }
    })
    .catch(function (err) {
        console.log(err);
    });
}