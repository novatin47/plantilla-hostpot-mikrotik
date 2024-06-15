if(loginError.includes("username doesn't exist:")){
	loginError = "radius: usuario o contraseña no valido";
}else if(loginError=="no valid profile for this user"){
	loginError = "radius: perfil no valido";
}else if(loginError.includes("simultaneous")){
	loginError = "radius: en uso, no mas sesiones";
}else if(loginError=="Uptime limit reached"){
	loginError = "radius: se agoto el tiempo";
}else if(loginError != ""){
	loginError = "radius: " + loginError;
}