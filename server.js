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
        switch (data.whatToDo) {
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

function addEmployee() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;

        const departments = res.map(function (deaprts) {
            return {
                name: deaprts.name,
                value: deaprts.id
            };
        });

        inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?"
            },
            {
                type: "list",
                name: "department",
                message: "What department will your employee be working in?",
                choices: departments
            }
        ])
        .then(function (data) {
            const newEmpl = data;
            connection.query("SELECT * FROM role WHERE department_id =" + newEmpl.department + "", function (err, res) {
                if (err) throw err;

                const emplRole = res.map(function (roles) {
                    return {
                        name: roles.title,
                        vaule: roles.id
                    };
                });
                inquirer
                .prompt([
                    {
                        type: "list",
                        name: "roles",
                        message: "Select a role",
                        choices: emplRole
                    }
                ])
                .then(function (data) {
                    const newRole = data.roles;
                    connection.query("SELECT id,CONCAT(first_name, ' ', last_name) AS manager FROM employee", function(err, res) {
                        if (err) throw err;

                        const emplManage = res.map(function(mana) {
                            return {
                                name: mana.manager,
                                value: mana.id
                            }
                        })
                        inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "manager",
                                message: "Who is the employee's manager?",
                                choices: emplManage
                            }
                        ])
                        .then(function(data) {
                            connection.query("INSERT INTO employee SET ?",
                            {
                                first_name: newEmpl.first_name,
                                last_name: newEmpl.last_name,
                                role_id: newRole,
                                manager_id: data.manager
                            },
                            function(err, res) {
                                if (err) throw err;
                                viewAllEmployees();
                            })
                        })
                    })
                })
            })
        })
    });
}