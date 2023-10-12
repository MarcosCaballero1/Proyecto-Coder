//console.log("asda")

const boton = document.querySelector('.btnAceptar');
let arrayUsuarios = [];
let cont = 0;

boton.addEventListener('click', () => {
    var user = {
        nombre: document.querySelector('#iNombre').value,
        apellido: document.querySelector('#iApellido').value,
        mail: document.querySelector('#iMail').value,
        pass: document.querySelector('#iPass').value,
        localidad: document.querySelector('#Localidad').value
    };

    console.log(user)
    cont++;
    console.log(arrayUsuarios)
});

for(let i = 0; i<arrayUsuarios.length; i++){
    console.log(arrayUsuarios[i])
}

function guardadoLocalStorage(user){
    localStorage.setItem('guardados', JSON.stringify(user))
}

