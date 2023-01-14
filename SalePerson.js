"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesePerson = exports.MAX_SALARY = exports.MIN_SALARY = exports.MAX_PERCENT = exports.MIN_PERCENT = void 0;
const WageEmployee_1 = require("./WageEmployee");
exports.MIN_PERCENT = 0;
exports.MAX_PERCENT = 100;
exports.MIN_SALARY = 7000;
exports.MAX_SALARY = 70000;
class SalesePerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _sales, _percent) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._sales = _sales;
        this._percent = _percent;
    }
    get salesPlus() {
        return this._sales;
    }
    set salesPlus(salesPlus) {
        if (salesPlus < exports.MIN_SALARY || salesPlus > exports.MAX_SALARY) {
            throw `salary mast be in range [${exports.MIN_SALARY}-${exports.MAX_SALARY}]`;
        }
        this._sales = salesPlus;
    }
    get percent() {
        return this._percent;
    }
    set percent(percent) {
        if (percent < exports.MIN_PERCENT || percent > exports.MAX_PERCENT) {
            throw `wrong percent value must be in range [${exports.MIN_PERCENT}-${exports.MAX_PERCENT}]`;
        }
        this._percent = percent;
    }
    computeSalary() {
        return super.computeSalary() + (this._sales * this._percent) / 100;
    }
}
exports.SalesePerson = SalesePerson;
//# sourceMappingURL=SalePerson.js.map