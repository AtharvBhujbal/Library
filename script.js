let myLibrary=[];
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        return `${this.title} by ${this.author} with ${this.pages} pages, ${this.read ? 'read':'not read'}`;
    }
};
function toAddBook(){
    const book1=new Book("Wings1","Ayush",200,"read");
    myLibrary.push(book1);
    const book2=new Book("Wings2","Ayush",200,"read");
    myLibrary.push(book2);
    const book3=new Book("Wings3","Ayush",200,"read")
    myLibrary.push(book3);
}
function toDisplayBook(){
    // console.log(book1.info());
}
Book();
toAddBook();
toDisplayBook();