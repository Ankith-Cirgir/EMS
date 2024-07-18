
export class Employee {
    id!: number;
    firstName!: string;
    lastName!: string;
    emailId!: string;

    Employee(id:number, firstName: string, lastName: string, emailId: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
}