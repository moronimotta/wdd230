const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");
const li = document.createElement('li');
const deleteButton = document.createElement('button')
const link = document.createElement('a');


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

function removeChapterNumber(inputString) {
    let chapter;
  
    // Use a regular expression to match the second digit and space
    const regexWithChapter = /^(\d+\s\w+)\s(\d+)/;
    const regexWithoutChapter = /^(\w+)\s(\d+)/;
  
    // Determine which regex to use based on the pattern
    const regexToUse = inputString.match(/^\d+/) ? regexWithChapter : regexWithoutChapter;
  
    // Replace the matched pattern with the content of the capturing group
    const result = inputString.replace(regexToUse, (_, book, ch) => {
      chapter = parseInt(ch, 10);
      return book;
    });
  
    return { result, chapter };
  }

function handleInput() {
    // removes the first element of the array
    bookList.shift();

    // Lowercase the input value
    input.value = input.value.toLowerCase();

    // Remove the chapter number from the input value
    let { result: inputBookWihtoutChapter, chapter: chapterNumberInput } = removeChapterNumber(input.value);


    // remove the blank spaces from the input value
    inputBookWihtoutChapter = inputBookWihtoutChapter.replace(/\s/g, '');

    bookList.forEach((book) => {
        // if it's book wihtout chapter
        if (!book.section) {
            title = book.title;
        }
        title = book.section.title;

        // Lowercase the title
        titleLowercase = title.toLowerCase();

        // remove the blank spaces from the title
        titleLowercase = titleLowercase.replace(/\s/g, '');


        // Chapter Entries
        chapters = book.section.entries;

        if (inputBookWihtoutChapter === titleLowercase) {
            // Number of chapter is always one less than the length of the array
            chapterCount = chapters.length - 1;

            // If the number of the chapter is greater than the number of chapters in the book, does not exist
            if (chapterNumberInput > chapterCount) {
                alert("Chapter not found");
                return input.focus();
            } else {
                // If the chapter exists, display it
                let url = chapters[chapterNumberInput].content.uri;
                li.textContent = chapters[chapterNumberInput].content.title;
                link.href = `https://www.churchofjesuschrist.org/study/${url}?lang=eng`;
                link.textContent = '🔗';
                deleteButton.textContent = '❌'
                li.append(deleteButton)
                li.append(link);
                list.appendChild(li)
                input.value = '';
                input.focus()
            }

        }
    }
    )
    alert("Book not found");
    return input.focus();

}


