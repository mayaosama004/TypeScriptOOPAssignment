"use strict";
//Q1
class User {
    id;
    name;
    email;
    password;
    phone;
    _age;
    //Q:5
    notebooks;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.notebooks = [];
        if (age >= 18 && age <= 60) {
            this._age = age;
        }
        else {
            throw new Error("sorry age must be between 18 and 60.");
        }
    }
    get age() {
        return this._age;
    }
    addNoteBook(notebook) {
        this.notebooks.push(notebook);
    }
    removeNoteBook(notebookId) {
        this.notebooks = this.notebooks.filter(nb => nb.id !== notebookId);
    }
    displayInfo() {
        console.log(`User Information - ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this._age}`);
    }
}
// Q:2
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log(`Admin ${this.name} is managing notes`);
    }
}
// Q:3
class Note {
    id;
    title;
    content;
    //Q:6
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    getAuthorInfo() {
        console.log(`Note: "${this.title}" was created by:`);
        this.author.displayInfo();
    }
    preview() {
        return this.content.length > 30
            ? this.content.substring(0, 30) + "..."
            : this.content;
    }
}
// Q:4
class NoteBook {
    id;
    title;
    notes;
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.notes = [];
    }
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter((n) => n.id !== noteId);
    }
    listNotes() {
        this.notes.forEach((note) => {
            console.log(note.preview());
        });
    }
}
class Storagge {
    items;
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    getAllItems() {
        return this.items;
    }
}
const user = new User(1, "Maya", "maya@email.com", "pass123", "0123456789", 22);
user.displayInfo();
const admin = new Admin(2, "Ahmed", "admin@email.com", "admin123", "0111222333", 30);
admin.manageNotes();
const myNote = new Note(101, "OOP Task", "Testing TypeScript classes and relationships.", user);
console.log(myNote.preview());
const notebook = new NoteBook(1, "My Studies");
notebook.addNote(myNote);
notebook.listNotes();
const stringStorage = new Storagge();
stringStorage.addItem("Item 1");
stringStorage.addItem("Item 2");
console.log(stringStorage.getAllItems());
