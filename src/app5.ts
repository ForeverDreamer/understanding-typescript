// 05 Classes & Interfaces


// 059 Creating a First Class
// 061 Constructor Functions & The _this_ Keyword
// 062 _private_ and _public_ Access Modifiers
// 063 Shorthand Initialization
// 064 _readonly_ Properties
// 065 Inheritance
// 066 Overriding Properties & The _protected_ Modifier
// 067 Getters & Setters
// 068 Static Methods & Properties
// 069 Abstract Classes
// 070 Singletons & Private Constructors

abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear)
    }

    static createEmployee(name: string) {
        return{ name: name }
    }

    // describe(this: Department) {
    //     console.log(`Department (${this.id}): ${this.name}`);
    // }
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // TS2540: Cannot assign to 'id' because it is a read-only property.
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        console.log(this.lastReport)
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            // 在static方法内，this等同于AccountingDepartment
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

console.log('========================CLASSES START========================');

// console.log('=======================Base Department=========================');
//
// const department = new Department('d0', 'Base Department');
// department.addEmployee('Max');
// department.addEmployee('Manu');
//
// console.log(department);
// department.describe();
// department.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe()
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe()

console.log('=======================IT=========================');

const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');

console.log(it);
it.describe();
it.printEmployeeInformation();

console.log('=======================Accounting=========================');

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
// console.log(accounting.mostRecentReport)
accounting.addReport('Something went wrong...');
// Uncaught Error: Please pass in a valid value!
// accounting.mostRecentReport = '';
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport)
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();

console.log('=======================static=========================');
const employee1 = Department.createEmployee('Max');
console.log(employee1);
console.log(Department.fiscalYear);

console.log('========================CLASSES END========================');

console.log('\n');

// 072 A First Interface
// 073 Using Interfaces with Classes
// 075 Readonly Interface Properties
// 076 Extending Interfaces
// 078 Optional Parameters & Properties

console.log('========================INTERFACE START========================');

// interface Person {
//     name: string;
//     age: number;
//
//     greet(phrase: string): void;
// }
//
// let user1: Person;
//
// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }
//
// user1.greet('Hi there - I am ');

// interface Greetable {
//     readonly name: string;
//
//     greet(phrase: string): void;
// }

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!')
        }
    }
}

let user1: Greetable;

// user1 = new Person('Max');
user1 = new Person();
// TS2540: Cannot assign to 'name' because it is a read-only property.
// user1.name = 'Manu';
console.log(user1);
user1.greet('Hi there - I am ')

// 077 Interfaces as Function Types

// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

console.log('========================INTERFACE END========================');