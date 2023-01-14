import { WageEmployee } from "./WageEmployee";
export const MIN_PERCENT: number = 0;
export const MAX_PERCENT: number = 100;
export const MIN_SALARY: number = 7000;
export const MAX_SALARY: number = 70000;
export class SalesePerson extends WageEmployee {
  constructor(
    id: number,
    name: string,
    birthYear: number,
    department: string,
    basicSalary: number,
    wage: number,
    hours: number,
    private _sales: number,
    private _percent: number
  ) {
    super(id, name, birthYear, department, basicSalary, wage, hours);
  }
  get salesPlus() {
    return this._sales;
  }
  set salesPlus(salesPlus: number) {
    if (salesPlus < MIN_SALARY || salesPlus > MAX_SALARY) {
      throw `salary mast be in range [${MIN_SALARY}-${MAX_SALARY}]`;
    }
    this._sales = salesPlus;
  }
  get percent() {
    return this._percent;
  }
  set percent(percent: number) {
    if (percent < MIN_PERCENT || percent > MAX_PERCENT) {
      throw `wrong percent value must be in range [${MIN_PERCENT}-${MAX_PERCENT}]`;
    }
    this._percent = percent;
  }
  computeSalary(): number {
    return super.computeSalary() + (this._sales * this._percent) / 100;
  }
}
