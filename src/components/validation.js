const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function validation(input){
    const errors={};
    
    if(!input.username){
        errors.username ='ingrese username'
    }
    else if(!regexUsername.test(input.username)){
        errors.username ='username debe ser un correo electrónico'
    }
    else if(input.username.length > 35){
        errors.username ='username no puede contener más de 35 caracteres'
    }
    else if(!input.password){
        errors.password='ingrese password'        
    }
    else if(!regexPassword.test(input.password)){
        errors.password = 'El password debe tener al menos un caracter especial, un numero y debe tener más de 6 caracteres y menos de 10'
    }
    return errors
}