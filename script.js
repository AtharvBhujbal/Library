let myLibrary=[];
const addBtn=document.querySelector('.addBtn');
addBtn.addEventListener('click',toAddBook);
const cardContainer=document.querySelector('.cardContainer');
const newBookDialog=document.querySelector('.newBookDialog');
const submitBtn=document.querySelector('.submitBtn');


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
}
function toDisplayBook(){
    cardContainer.innerHTML = ""; 
    myLibrary.forEach(book => {
        const card=document.createElement('div');
        card.classList.add('card');
        card.innerHTML=`<h3>${book.title}</h3> <p>Author: ${book.author}</p> <p>Pages: ${book.pages}</p> <p>Status: ${book.read ? 'Read' : 'Not read'}</p>`;
        cardContainer.appendChild(card);
    });
}
submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const title=newBookDialog.querySelector('input[name="title"]').value;
    const author=newBookDialog.querySelector('input[name="author"]').value;
    const pages=newBookDialog.querySelector('input[name="pages"]').value;
    const read=document.querySelector('input[name="read"]').checked;
    const newBook=new Book(title,author,pages,read);
    myLibrary.push(newBook);
    newBookDialog.close();
    toDisplayBook();
})
newBookDialog.addEventListener('click', (event) => {
    if (event.target === newBookDialog) {
        newBookDialog.close();
    }
});
