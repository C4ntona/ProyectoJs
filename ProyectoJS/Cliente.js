class Cliente{

    constructor(dni,nombre,apellidos,email,membresia,edad,icon){
        this.DNI = dni;
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.Email = email;       
        this.Membresia = membresia;
        this.Edad = edad;
        this.Icon = icon || "bobo";
    }
    
    mayor18(){
        let adult = false;
        if(this.Edad>=18){
            adult = true;
        }
        return adult;
    }
    
    cambiaMembresia(membresia){
        this.Membresia = membresia;
        }
    
        cambiaNombre(nombre){
        this.nombre = nombre;
    }
    
}
