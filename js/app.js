"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//#endregion
//# sourceMappingURL=app.js.map