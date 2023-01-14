
import { WageEmployee } from "./WageEmployee";
import { SalesePerson } from "./SalePerson";

import { Employee } from "./Employee";
import { Company } from "./Company";

const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA", 10000, 100, 50);
console.log(employee.id);


const sales: SalesePerson = new SalesePerson(129, "Vasya", 2000, "QA", 40000, 100, 50, 40000, 20);
console.log(`salary + percentage of revenue = ${sales.computeSalary()}`);

//*****************2.2.2.	Method “addEmployee” *//
const company: Company = new Company([]);
company.addEmployee(sales);
company.addEmployee(employee);
company.addEmployee(new SalesePerson(323, "Vasya", 2000, "QA", 40000, 100, 50, 40000, 20));
company.addEmployee(new SalesePerson(223, "Dima", 2001, "QA", 30000, 100, 50, 30000, 30));

//*****************2.2.4.	Method “getEmployee and 2.2.3.	Method “removeEmployee””””” *//
console.log(company.removeEmployee(123));
const res: Employee | null = company.getEmployee(223);
if (res != null) {
    console.log(res);
} else {
    console.log('nothing');
}
//*****************Method “2.2.5.	Method “getEmployeeBySalary”” *//
const elements: Employee[]= company.getEmployeeBySalary(20000,50000);
elements.forEach(elem => console.log(`An employee in a given salary range with id = ${elem.id}`));
//*****************2.2.6.	Method “computeBudget ””” *//
console.log(`Total salary for the company ${company.computeBudget()}`);

//console.log(getId.getEmployee());