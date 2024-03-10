var formLoadedTime = Date.now();

formLoadedTime = new Date(formLoadedTime).toLocaleString();
document.getElementById("form").value = formLoadedTime;

