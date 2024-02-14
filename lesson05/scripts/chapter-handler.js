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
    bookList.shift();
    bookList.forEach((book)=>{
        title = book.content.section.title;
        title = title.toLowerCase();
        input.value = input.value.toLowerCase();
        chapters = book.section.entries;
    
        if(title.includes(input.value)){
            chapterInput = title.replace(/\D/g,'');
            chapterCount = chapters.length - 1;
           
            if(chapterInput > chapterCount){
                alert("Chapter not found");
                return input.focus();
            }
            li.textContent = chapter[chapterInput].content.title;
            deleteButton.textContent = '❌'
            li.append(deleteButton)
            list.append(li)
            input.value = '';
            input.focus()
        }else {
            alert("Book not found");
            return input.focus();
        }
    }
    )

}


