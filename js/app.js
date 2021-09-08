"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const util = require("./lib/utilityFunctions");
require("./LibrarianExtension");
//#region Module 3 Going Further with Basic Types
//#region Deconstructuring
// import { map } from './js/node_modules/rxjs/operators'
// function PrintBookInfo(item: Book){
//     console.log(`${item.title} was authored by ${item.author}`);
// }
// //Se puede realizar el deconstructuring de esta forma o la siguiente seria realizarlo por medio de una funcion
//  let [book1, book2, book3] = util.GetAllBooks(); 
// // PrintBookInfo(book1);
// // PrintBookInfo(book2);
// // PrintBookInfo(book3);
// //Por medio de una funcion:
// function LogFavouriteBooks([book1, book2, ...others]: Book[]){
//     PrintBookInfo(book1);
//     PrintBookInfo(book2);
//     others.map(x=> console.log(`${x.title} was authored by ${x.author}`))
// };
// LogFavouriteBooks(util.GetAllBooks());
// // let {title: bookTitle, author:bookAuthor}= book1;
// // console.log(bookTitle);
// // console.log(bookAuthor);
//#endregion
//#region Spread Operator
// let schoolBooks: Book[] = [
//     { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: Category.Fiction },
//     { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true, category: Category.Fiction },
//     { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: Category.Fiction }
// ];
// let booksRead: Book[] = util.GetAllBooks();
// //Con este spread Operator se agrega todo el array de schoolBooks junto con el de booksRead
// booksRead.push(...schoolBooks);
// let poets: string[] = ['Shelley', 'Collins', 'Hughes'];
// let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
// console.log(authors)
//#endregion
//#region Tuple type
// let [book1]: Book[] = util.GetAllBooks(); 
// let poets: string[] = ['Shelley', 'Collins', 'Hughes'];
// let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
// let catalogLocation: [string, Book] = ['A.123.456', book1];
// // catalogLocation[2] = true; //Aqui marca error porque no hay algun tipo en la tupla que sea boolean
// // catalogLocation[2] = 'Some string'; //Aqui no deberia marcar error al ser del mismo tipo que en la tupla original
// //Como crear un custom tuple type
// interface KeyValuePair<K, V> extends Array<K | V>{
//     0: K;
//     1: V;
// }
// let catalogLocationCustom: KeyValuePair<string, Book> = ['A.123.456', book1];
// catalogLocationCustom[2] = 'some String';
//#endregion
//#region Combining types
// //Union Types
// let allBooks: Book[] = util.GetAllBooks();
// let allMagazines: Magazine[] = util.GetAllMagazines();
// let readingMaterial: Book | Magazine = allMagazines[0] 
// function PrintTitle(item: Book| Magazine){
//     console.log(`${item.title}`)
// }
// //Intersection type
// let serialNovel: Book & Magazine = {
//     id: 100,
//     title: 'The Gradual Tale',
//     author: 'Occasional Pen',
//     available: true,
//     category: Category.Fiction,
//     publisher: 'Serial Press'
// };
//#endregion
//#region Mixing Type
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         });
//     });
// }
// applyMixins(UniversityLibrarian, [Employee, Researcher]);
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.doResearch('Economics');
//#endregion
//#region String Literal Types and type aliases 
// //let frequency: 'monthly' | 'annually' = 'annually';
// type Frequency = 'monthly' | 'annually';
// function GetMagazineByFrequency(preferredFrequency: Frequency) {
//     // do something here
// }
// //To rename the types of previous exercises
// type PrintMaterial = Book | Magazine;
// type Serial = Book & Magazine;
//#endregion
//#endregion
//#region Module 4 Using Advanced Type Features
//#region Creating a Fluent API with Polymorphic this type
// class LibraryBook {
// 	Checkout(): this {
//         if(this instanceof ChildrensBook){
//             console.log('Checking out a Childrens book.');
//         }
//         if(this instanceof ElectronicBook){
//             console.log('Checking out a Electronic book.');
//         }
//         // do checkout stuff
//         return this;
//     }
//     Checkin(): this {
//         // do checkin stuff
//         //console.log('Checking in a book.');
// 		if (this instanceof ChildrensBook) {
//             console.log('Checking in a ChildrensBook.');
//         }
//         if (this instanceof ElectronicBook) {
//             console.log('Checking in an ElectronicBook.');
//         }        
//         return this;
//     }    
// }
// class ChildrensBook extends LibraryBook {
//     Clean(): this {
//         // clean the crayon marks
//         console.log('Cleaning a book.');
//         return this;
//     }
// }
// class ElectronicBook extends LibraryBook {
//     RemoveFromCustomerDevice(): this {
//         console.log('Removing book from device.');
//         return this;
//     }
// }
// let kidbook = new ChildrensBook();
// kidbook.Checkin()
//        .Clean()
//        .Checkout();
// let ebook = new ElectronicBook();
// ebook.Checkin()
//      .RemoveFromCustomerDevice()
//      .Checkout();
//#endregion
//#region Interface merging and module augmentation
// // let mergedBook: Book;
// // mergedBook.publisher= 'Progamming press';
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.hostSeminar('Something interesting')
//#endregion
//#region TypeGuards 
// // // //Using typeof
// // // function logVisitor(param: number | string) {
// // //     if (typeof param === 'number') {
// // //         console.log(`${param} new visitors arrived.`);
// // //     }
// // //     else {
// // //         console.log(`${param.toUpperCase()} visited.`);
// // //     }
// // // }
// // // // logVisitor(5);
// // // // logVisitor('Leigh Ann');
// // //Using instanceof
// // let lib: Librarian = new PublicLibrarian();
// // if (lib instanceof UniversityLibrarian) {
// //     lib.assistFaculty();
// // }
// // if (lib instanceof PublicLibrarian) {
// //     lib.teachCommunity();
// // }
// //With custom typeguards
// function isBook(text: Book | Magazine): text is Book {
//     return (<Book>text).author !== undefined;
// }
// let readingMaterial: Book | Magazine = util.GetAllBooks()[0];
// if(isBook(readingMaterial)) {
//     console.log(`The book's author is ${readingMaterial.author}.`);
// }
// else {
//     console.log(`The magazine's publisher is ${readingMaterial.publisher}.`);
// }
//#endregion
//#region Symbols
// let mySymbol = Symbol('first_symbol');
// let anotherSymbol = Symbol('first_symbol');
// // console.log(mySymbol === anotherSymbol);
// // console.log(typeof mySymbol);
// let myObject = {
//     [mySymbol]: 'value for my symbol key'
// }
// // console.log(myObject[mySymbol]);
// let librarian = new UniversityLibrarian();
// // librarian[CLASS_INFO]();
// let libraryCustomer = {
//     name: 'Thorne',
//     assistCustomer: (custName: string) => console.log(`Assisting ${custName}`)
// }
// if (libraryCustomer instanceof UniversityLibrarian) {
//     console.log('A helpful librarian.');
// }
// else {
//     console.log('Not a librarian.');
// }
//#endregion
//#endregion
//#region Module 5 Creating and using Decorators
//#region Creating and using class decorators
// let lib1 = new UniversityLibrarian();
// //The other changes are in decorators.ts, on the sealed decorator
// //and on the top of the UniversityLibrarian class in the classes.ts 
//#endregion
//#region Creating class decorators that replace contructor functions
// let lib2 = new PublicLibrarian();  
//#endregion
//#region Creating and using method decorators
// let lib1 = new UniversityLibrarian(); 
// let lib2 = new PublicLibrarian(); 
// try {
// 	lib1.assistFaculty = () => console.log('assistFaculty replacement method');
//     lib2.teachCommunity = () => console.log('teachCommunity replacement method');    
// } catch (error) {
//     console.log(error.message);
// }
// lib1.assistFaculty();
// lib2.teachCommunity();
//#endregion
//#endregion
//#region Module 6 Asynchronous patterns
//#region  Using callbacks with asynchronous code
// interface LibraryMgrCallback{
//     (err: Error, titles: string[]): void;
// }
// function getBooksbyCategory(cat: Category, callback: LibraryMgrCallback): void{
//         setTimeout(()=>{
//             try{
//                 let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//                 if(foundBooks.length>0){
//                     callback(null, foundBooks);
//                 }
//                 else{
//                     throw new Error('No Books Found');
//                 }
//             }catch(error){
//                 callback(error, null);
//             }
//         }, 2000);
// }
// function logCategorySearch(err:Error, titles: string[]): void{
//     if(err){
//         console.log(`${err.name}: ${err.message}`);
//     }
//     else{
//         console.log(`Found the following titles: ${titles}`);
//     }
// }
// console.log("Beggining search...");
// getBooksbyCategory(Category.Biography, logCategorySearch);
// setTimeout(()=>{
//     console.log("search submitted...");
// }, 3000)
//#endregion
//#region Promise
// function getBooksbyCategory(cat: Category): Promise<string[]>{
//         let p: Promise<string[]> = new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//                 if(foundBooks.length>0){
//                     resolve(foundBooks)
//                 }
//                 else{
//                     reject('No books found for that category')
//                 }
//             }, 2000);
//         });
//         return p;
// }
// console.log("Beggining search...");
// getBooksbyCategory(Category.Biography)
// .then(titles=> {console.log(`Found Titles: ${titles}`)
//  return titles.length}, reason=>{return 0;})
//  .then(num => {console.log(`Number of found books: ${num}`);} )
// .catch(reason=> console.log(reason))
// console.log("search submitted...");
//#endregion
//#region async/await
function getBooksbyCategory(cat) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject('No books found for that category');
            }
        }, 2000);
    });
    return p;
}
function logSearchResults(bookCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundBooks = yield getBooksbyCategory(bookCategory);
        console.log(foundBooks);
    });
}
console.log("Beggining search...");
logSearchResults(enums_1.Category.Biography).catch(err => console.log(err));
console.log("search submitted...");
//#endregion
//#endregion
//# sourceMappingURL=app.js.map