"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Researcher = exports.Employee = exports.ReferenceItem = exports.UniversityLibrarian = exports.PublicLibrarian = exports.CLASS_INFO = void 0;
class Employee {
    addToSchedule() {
        console.log('Employee added to schedule.');
    }
    logTitle() {
        ;
        console.log(`Employee has the title ${this.title}.`);
    }
}
exports.Employee = Employee;
class Researcher {
    doResearch(topic) {
        console.log(`Doing research on ${topic}.`);
    }
}
exports.Researcher = Researcher;
exports.CLASS_INFO = Symbol();
// @sealed('UniversityLibrarian')
class UniversityLibrarian {
    [exports.CLASS_INFO]() {
        console.log('This class represents a UniversityLibrarian.');
    }
    static [Symbol.hasInstance](obj) {
        return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer');
    }
    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
    // @writable(true)
    assistFaculty() {
        console.log('Assisting faculty.');
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
// @logger
class PublicLibrarian {
    assistCustomer(custName) {
        console.log('Assisting customer.');
    }
    // @writable(false)
    teachCommunity() {
        console.log('Teaching community.');
    }
}
exports.PublicLibrarian = PublicLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
exports.ReferenceItem = ReferenceItem;
ReferenceItem.department = 'Research';
//# sourceMappingURL=classes.js.map