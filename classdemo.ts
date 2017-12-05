export class Employee {
    private id: number;
    protected name: string;
    dob: Date;

    constructor(id: number, name: string, dob?: Date) {
        this.id = id;
        this.name = name;
        this.dob = dob;
    }

    get empid() {
        return this.id;
    }

    set setId(empid: number) {
        this.id = empid;
    }

    addEmployee(): void {

    }

    getEmployee(): string {
        return "Vikas";
    }

}

export let topic = 'Modules';


export function add(a: number, b: number): number {
    return a + b;
}

let emp = new Employee(4, 'Deepak');
console.log(emp.empid);
console.log(emp);