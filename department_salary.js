// Task 1: Create a Department Structure
const company = {
    departments: [
    {departmentName: 'Finance',
    employees: [
    {name: 'Andy',
    salary: 1100000,
    subordinates: [
    {name: 'Aya',
    salary: 1150000,
    subordinates: [
    {name: 'Anthony',
    salary: 950000,
    subordinates: []}]}]},
    {name: 'Bella',
    salary: 1000000,
    subordinates: []}]},
    {departmentName:'Marketing',
    employees: [
    {name: 'Lana',
    salary: 70000,
    subordinates: [
    {name: 'Moana',
    salary: 65000,
    subordinates: []}]},
    {name: 'Hulk',
    salary: 90000,
    subordinates: []}]}]};
// Data set created.
// Task 1 is now complete.

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
let totalSalary = 0;
// Function created and start number was set to "0" to ensure results displayed by output are accurate.
for (const employee of department.employees) {
totalSalary += employee.salary;
// This function is intended to add each employee’s salary to the total.
for (const subordinate of employee.subordinates) {
totalSalary += calculateDepartmentSalary({
employees: subordinate.subordinates});}}
// This function is intended to recursively add their salaries to the total, if the employee has subordinates.
return totalSalary;}
// Function returned and complete.
for (let department of company.departments) {
let totalSalary = calculateDepartmentSalary(department);
console.log(`The total salary amount for the "${department.departmentName}" department is: $${totalSalary}`);}
/* This function is intended to calculate the total salary amount and output the results through a message. 
Function complete and displays desired output.
Task 2 is now complete. */