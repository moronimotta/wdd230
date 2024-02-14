const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");
const li = document.createElement('li');
const deleteButton = document.createElement('button')


deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
})

button.addEventListener('click', () => {
    if (!input.value) {
        alert("You cant submit a blank chapter")
        return input.focus()
    }
    handleInput();
})

function handleInput() {
    // removes the first element of the array
    bookList.shift();

    bookList.forEach((book)=>{
        title = book.section.title;

        // Lowercase the title and the input value
        title = title.toLowerCase();
        input.value = input.value.toLowerCase();

        // Remove the chapter number from the input value
        inputBookWihtoutChapter = input.value.replace(/^(\d+\s\w+)\s\d+/, '');

        // Chapter Entries
        chapters = book.section.entries;

        if(titleBookWithoutChapter === inputBookWihtoutChapter){
            // Keeps only the number from the input value
            chapterInput = input.value.replace(/\D/g,'');

            // Number of chapter is always one less than the length of the array
            chapterCount = chapters.length - 1;
           
            // If the number of the chapter is greater than the number of chapters in the book, does not exist
            if(chapterInput > chapterCount){
                alert("Chapter not found");
                return input.focus();
            }else {
                // If the chapter exists, display it
                li.textContent = chapter[chapterInput].content.title;
                deleteButton.textContent = '❌'
                li.append(deleteButton)
                list.append(li)
                input.value = '';
                input.focus()
            }
           
        }
    }
    )
    alert("Book not found");
    return input.focus();

}


