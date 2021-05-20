function control() {
    var username = document.getElementById('user').value;
    if (username !== null || username !== '') {
        document.getElementById('logIn').disabled = false;
    }

}

function save() {
    localStorage.clear()
    var username = document.getElementById('user').value;
    if (username === null || username === '') {
        document.getElementById('logIn').disabled = true;
        document.getElementById('logOut').disabled = true;
        alert('Devi inserire il nome Utente');
    }
    else {
        localStorage.setItem('Utente', username);
        document.getElementById('logIn').disabled = true;
        document.getElementById('logOut').disabled = false;
    }
}




function cancella() {
    localStorage.clear();
    document.getElementById('logOut').disabled = true;
}


