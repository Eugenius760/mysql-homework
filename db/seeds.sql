INSERT INTO department (name) VALUE ("Sales");
INSERT INTO department (name) VALUE ("Engineering");
INSERT INTO department (name) VALUE ("Legal");
INSERT INTO department (name) VALUE ("Finance");

INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 70000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Regional Sales Manager", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Test Engineer", 60000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Lawyer", 110000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Copyright", 90000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Accountant", 90000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Tax Person", 750000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Darryl", "Williams", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Abby", "Schuldheisz", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Maurice", "McClure", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jay'sen", "Morris", 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tori", "Kirkau", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jenna", "Hahn", 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Janaiah", "Lundblade", 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Nika", "Rosen", 8, NULL);

UPDATE employee SET manager_id=2 WHERE id=1;
UPDATE employee SET manager_id=3 WHERE id=4;
UPDATE employee SET manager_id=5 WHERE id=6;
UPDATE employee SET manager_id=7 WHERE id=8;