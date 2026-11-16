//Q1
class User {
    private id: number;
    public name: string;
    private email: string;
    private password: string;
    public phone: string;
    private _age: number;

  //Q:5
    private notebooks: NoteBook[];

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.notebooks = [];

    if (age >= 18 && age <= 60) {
    this._age = age;
    } else {
    throw new Error("sorry age must be between 18 and 60.");
    }
}

    public get age(): number {
    return this._age;
}

    public addNoteBook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
}

    public removeNoteBook(notebookId: number): void {
    this.notebooks = this.notebooks.filter(nb=> nb.id !== notebookId);
}

    public displayInfo(): void {
    console.log(`User Information - ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this._age}`);
}
}

// Q:2
class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    super(id, name, email, password, phone, age);
}

    public manageNotes(): void {
    console.log(`Admin ${this.name} is managing notes`);
}
}

// Q:3
class Note {
    private id: number;
    public title: string;
    private content: string;

  //Q:6
    private author: User;

    constructor(id: number, title: string, content: string, author: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
}

    public getAuthorInfo(): void {
    console.log(`Note: "${this.title}" was created by:`);
    this.author.displayInfo();
}

    public preview(): string {
    return this.content.length > 30 
        ? this.content.substring(0, 30) + "..." 
        : this.content;
}
}

// Q:4
class NoteBook {
    public id: number;
    public title: string;
    private notes: Note[];

    constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.notes = [];
}

    public addNote(note: Note): void {
    this.notes.push(note);
    }

    public removeNote(noteId: number): void {
    this.notes = this.notes.filter((n: any) => n.id !== noteId);
}

    public listNotes(): void {
    this.notes.forEach((note) => {
    console.log(note.preview());
    });
}
}



class Storagge<t>{

    private items:t[];

    constructor(){
        this.items=[]
    }

    public addItem(item:t):void{
        this.items.push(item);
    }


    public removeItem(item:t):void{
    const index = this.items.indexOf(item);
    if (index > -1) {
    this.items.splice(index, 1);
    }
}


    public getAllItems(): t[] {
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


const stringStorage = new Storagge<string>();
stringStorage.addItem("Item 1");
stringStorage.addItem("Item 2");
console.log(stringStorage.getAllItems());