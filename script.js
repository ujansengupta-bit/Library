const myLibrary = [];

function Book(title, author, pages, color) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = color;

  myLibrary.push(this);
  display(myLibrary);
}

function display(){
  let library_book = document.querySelector(".library");
  library_book.innerHTML= "";
  for(let i =0; i< myLibrary.length; i++){

      let book = myLibrary[i];

      let card = document.createElement("div");
      card.classList.add("book_card");

      card.innerHTML =`
      <button class="remove">Remove</button>
      <button class="edit">Edit</button>
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <button class="read-btn">${book.read === 'green'? 'Read' : 'Not Read'}</button>`

      let btn = card.querySelector(".read-btn");
      let rem = card.querySelector(".remove");
      let ed = card.querySelector(".edit");
      
      rem.addEventListener("click", function(){
        myLibrary.splice(i, 1);
        display();
      })

      ed.addEventListener("click", function(){
        editIndex = i; 

        document.querySelector(".pop_up").style.display = "block";
        document.querySelector("#title").value = book.title;
        document.querySelector("#author").value = book.author;
        document.querySelector("#pages").value = book.pages;

        let readToggle = document.querySelector(".read");
        readToggle.style.backgroundColor = `book.read`;
        readToggle.textContent = (book.read === "green") ? "Read" : "Not Read";
      })

      btn.style.backgroundColor = `${book.read}`;

      btn.addEventListener("click", function() {
        if (this.style.backgroundColor === "green") {
          this.style.backgroundColor = "red";
          this.textContent = "Not Read";
          book.read = "red"; 
        } else {
          this.style.backgroundColor = "green";
          this.textContent = "Read";
          book.read = "green"; 
        }
      });
    library_book.appendChild(card);
  }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  let new_book = document.querySelector(".pop_up");
  let title_input = document.querySelector("#title");
  let author_input = document.querySelector("#author");
  let pages_input = document.querySelector("#pages");
  let read_input = document.querySelector(".read");
  
  let bgcolor = read_input.style.backgroundColor;
  let add = new Book(title_input.value, author_input.value, pages_input.value, bgcolor); 
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

let enter = document.querySelector(".pop_up");
enter.addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
})