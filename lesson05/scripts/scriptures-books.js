var bookList =  [];

const request = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
     },
     mode : 'cors',
     cache: 'default'
}

fetch("https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/dynamic?lang=eng&uri=/scriptures/bofm", request)
.then((response)=>{
    return response.json();
}).then((data)=>{
    bookList = data.toc.entries;
}).catch((error)=>{
    alert(error);
});





