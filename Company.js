"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_employee) {
        this._employee = _employee;
    }
    addEmployee(employee) {
        if (!this._employee.some((cur) => employee.id === cur.id)) {
            this._employee.push(employee);
        }
    }
    removeEmployee(id) {
        const len = this._employee.length;
        this._employee = this._employee.filter((elem) => elem.id !== id);
        return len !== this._employee.length;
    }
    getEmployee(id) {
        const results = this._employee.filter((res) => res.id === id);
        return results.length === 0 ? null : results[0];
    }
    getEmployeeBySalary(from, to) {
        const result = this._employee.filter((elem) => {
            const needSalary = elem.computeSalary();
            return needSalary >= from && needSalary <= to;
        });
        return result.sort((s1, s2) => s1.birthYear > s2.birthYear ? 1 : -1);
    }
    computeBudget() {
        return this._employee.reduce((res, cur) => {
            return res + cur.computeSalary();
        }, 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map