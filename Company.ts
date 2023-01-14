import { Employee } from "./Employee";

export class Company {
  constructor(private _employee: Array<Employee>) {}
  addEmployee(employee: Employee): void {
    if (!this._employee.some((cur) => employee.id === cur.id)) {
      this._employee.push(employee);
    }
  }
  removeEmployee(id: number): boolean {
    const len: number = this._employee.length;
    this._employee = this._employee.filter((elem: Employee) => elem.id !== id);
    return len !== this._employee.length;
  }
  getEmployee(id: number): Employee | null {
    const results: Employee[] = this._employee.filter(
      (res: Employee) => res.id === id
    );
    return results.length === 0 ? null : results[0];
  }
  getEmployeeBySalary(from: number, to: number): Employee[] {
    const result: Employee[] = this._employee.filter((elem: Employee) => {
      const needSalary = elem.computeSalary();
      return needSalary >= from && needSalary <= to;
    });
    return result.sort((s1: Employee, s2: Employee) =>
      s1.birthYear > s2.birthYear ? 1 : -1
    );
  }
  computeBudget(): number {
    return this._employee.reduce((res, cur) => {
      return res + cur.computeSalary();
    }, 0);
  }
}
