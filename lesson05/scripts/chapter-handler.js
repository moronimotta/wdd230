const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");
const addedChapters = [];


function createEventListeners(deleteButton, li) {
    deleteButton.addEventListener('click', () => {
        addedChapters.forEach((chapter) => {
            // remove 🔗❌ 
            li.textContent = li.textContent.replace('🔗', '');
            li.textContent = li.textContent.replace('❌', '');
            if (chapter.replace(/\s/g, '').toLowerCase() === li.textContent.replace(/\s/g, '').toLowerCase()) {
                addedChapters.splice(addedChapters.indexOf(chapter), 1);
            }
        });
        list.removeChild(li);
        input.focus();
    })

}

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

    // get all li from list
    const listItems = list.querySelectorAll('li');

    // if list has more than 10 items, alert the user
    if (listItems.length > 10) {
        alert("You can't add more than 10 chapters");
        input.value = '';
        input.focus();
        return;
    }

    // Lowercase the input value
    input.value = input.value.toLowerCase();   
    addedChapters.forEach((chapter) => {
        if (chapter.replace(/\s/g, '') === input.value.replace(/\s/g, '')) {
            alert("You can't add the same chapter more than once");
            input.value = '';
            return input.focus();
        }
    });

    // Remove the chapter number from the input value
    let { result: inputBookWihtoutChapter, chapter: chapterNumberInput } = removeChapterNumber(input.value);

    // remove the blank spaces from the input value
    inputBookWihtoutChapter = inputBookWihtoutChapter.replace(/\s/g, '');

    bookList.forEach((book) => {
        // if it's a book without chapter (e.g., "Enos")
        if (!book.section) {
            title = book.content.title;
            url = book.content.uri;
        } else {
            title = book.section.title;
            // Chapter Entries
            chapters = book.section.entries;
        }

        // Lowercase the title
        titleLowercase = title.toLowerCase();

        // remove the blank spaces from the title
        titleLowercase = titleLowercase.replace(/\s/g, '');

        if (inputBookWihtoutChapter === titleLowercase) {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            const link = document.createElement('a');
            createEventListeners(deleteButton, li);

            if (!book.section) {
                url = url;
                li.textContent = title;

            } else {
                // Number of chapter is always one less than the length of the array
                chapterCount = chapters.length - 1;

                // If the number of the chapter is greater than the number of chapters in the book, does not exist
                if (chapterNumberInput > chapterCount || chapterNumberInput < 0) {
                    alert("Chapter not found or invalid chapter number");
                    input.value = '';
                    return input.focus();
                }
                // If the chapter exists, display it
                url = chapters[chapterNumberInput].content.uri;
                li.textContent = chapters[chapterNumberInput].content.title;
            }

            // Set the values
            link.href = `https://www.churchofjesuschrist.org/study${url}?lang=eng`;
            link.textContent = '🔗';
            deleteButton.textContent = '❌';

            // Append the elements
            li.append(deleteButton);
            li.append(link);
            list.appendChild(li);

            // append the chapter to the addedChapters array
            addedChapters.push(input.value);

            // Clear the input and focus it
            input.value = '';
            input.focus();
            return;
        }
    });

}



