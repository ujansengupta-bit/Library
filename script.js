const myLibrary = [];

function Book(title, author, pages, color) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = color;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  let new_book = document.querySelector(".pop_up");
  let title_input = document.querySelector(".title").value;
  let author_input = document.querySelector(".author").value;
  let pages_input = document.querySelector(".pages").value;
  let read_input = document.querySelector(".read");
  
  let bgcolor = read_input.style.backgroundColor;
  let add = new Book(title_input, author_input, pages_input, bgcolor); 
  new_book.style.display = "none";
  title_input.value = "";
  author_input.value = "";
  pages_input.value = "";
}


let book = document.querySelector("#add")
book.addEventListener("click", function (){
    let new_book = document.querySelector(".pop_up");
    new_book.style.display = "block";
})
let read_input = document.querySelector(".read");
read_input.addEventListener("click", function(){
  let bgcolor = read_input.style.backgroundColor;
  if(bgcolor === "red"){
    read_input.style.backgroundColor = "green";
    read_input.textContent = "Read";
  }
  else{
    read_input.style.backgroundColor = "red";
    read_input.textContent = "Not Read";
  }
})

let enter = document.querySelector(".submitting");
enter.addEventListener("submit", function(){
  event.preventDefault();
  addBookToLibrary();
})