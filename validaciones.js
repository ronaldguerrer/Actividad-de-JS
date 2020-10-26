function validar() {
     var nombre, password,expresion;
     nombre= document.getElementById("nombre").value;
     password= document.getElementById("password").value;
     expresion=/@/;
     
     if(password==="" || nombre.length==0){
          alert("Todos los campos son obligatorios");
          return false;
     }else if(!expresion.test(nombre)){
          alert("El nombre de usuario no posee @");
          return false;
     }
}