let count = 0

document.getElementById("incrementar").addEventListener("click", function(){ count++

document.getElementById("contador").innerHTML = count
} )
document.getElementById("decrementar").addEventListener("click", function(){if (count > 0){ count--

document.getElementById("contador").innerHTML = count
} 
} )
document.getElementById("resetear").addEventListener("click", function(){ count = 0 

document.getElementById("contador").innerHTML = count

} )
document.getElementById("desde").addEventListener("click", function(){  
     let numero = prompt("Ingrese el valor inicial:")

     if(!isNaN(numero) && numero !== null && numero !== ""){
       
     count = parseInt(numero)
     document.getElementById("contador").innerHTML = count
    }else {
        alert("Ingrese el valor en numeros")
    }

} )