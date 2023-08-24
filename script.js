let myLibrary=[];
const addBtn=document.querySelector('.addBtn');
addBtn.addEventListener('click',toAddBook);
const cardContainer=document.querySelector('.cardContainer');

const newBookDialog=document.querySelector('.newBookDialog');


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
    newBookDialog.showModal();
    // const book1=new Book("Wings1","Ayush",200,"read");
    // myLibrary.push(book1);
    // // const book2=new Book("Wings2","Ayush",200,"read");
    // // myLibrary.push(book2);
    // // const book3=new Book("Wings3","Ayush",200,"read")
    // // myLibrary.push(book3);
    toDisplayBook();
}
function toDisplayBook(){
    myLibrary.forEach(element => {
       cardContainer.innerHTML+="<div class='card'>After</div>"; 
    });
}
