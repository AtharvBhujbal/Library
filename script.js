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
};
function toAddBook(){
    newBookDialog.showModal();
}
function toDisplayBook(){
    cardContainer.innerHTML = ""; 
    myLibrary.forEach((book,index) => {
        const card=document.createElement('div');
        card.classList.add('card');
        card.innerHTML=`
        <h3>${book.title}</h3> 
        <p>Author: ${book.author}</p> 
        <p>Pages: ${book.pages}</p> 
        <p>Status: ${book.read ? 'Read' : 'Not read'}</p>
        <button class="removeBtn" data-index='${index}'>Remove</button>`;
        cardContainer.appendChild(card);

        const removeBtn=document.querySelectorAll('.removeBtn');
        removeBtn.forEach(button=>{
            button.addEventListener('click',toDeleteCard);
        })

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
function toDeleteCard(event){
    const index=event.target.getAttribute('data-index');
    myLibrary.splice(index,1);
    toDisplayBook();
}