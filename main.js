function akanName() {
    var input = document.getElementById("result").value;
    var d = new Date(input);
yyyy = d.getFullYear();
mm = d.getMonth();
mm = mm+1;
dd = d.getDate();
var gender= document.querySelector('input[name="Gender"]:checked').value;
var c =(yyyy-1)/100+1;
var cc = parseFloat(c);
var day = parseFloat(( ((cc/4) -2*cc-1) + ((5*yyyy/4)) + ((26*(mm+1)/10)) + dd )) % 7;
day = day.toFixed(0);
var days =['sunday','monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
document.getElementById('akan').innerHTML=akan;
if (input='' && gender==''){
    alert("enter values for akan");
 }

else if(day == 0 && gender == "Male"){
document.getElementById("akan").innerHTML = "kwasi";
}
else if(day == 1 && gender == "Male"){
    document.getElementById("akan").innerHTML = "Kwadwo";
}
else if(day == 2 && gender == "Male"){
    document.getElementById("akan").innerHTML = "kwabena";
}
else if(day == 3 && gender == "Male"){
    document.getElementById("akan").innerHTML = "Kwaku";
}
else if(day == 4 && gender == "Male"){
    document.getElementById("akan").innerHTML = "Yaw";
}
else if(day == 5 && gender == "Male"){
    document.getElementById("akan").innerHTML = "Kofi";
}
else if(day == 6 && gender == "Male"){
    document.getElementById("akan").innerHTML = "Kwame";
}
else if(day == 0 && gender == "Female"){
    document.getElementById("akan").innerHTML = "Akosua";
}
else if(day == 1 && gender == "Female"){
    document.getElementById("akan").innerHTML = "Adwoa";
}
else if(day == 2 && gender == "Female"){
    document.getElementById("akan").innerHTML = "Abenaa";
}
else if(day == 3 && gender == "Female"){
    document.getElementById("akan").innerHTML = "Akua";
}
else if(day == "4" && gender == "Female"){
    document.getElementById("akan").innerHTML = "Yaa";

}
else if(day == 5 && gender == "Female"){
    document.getElementById("akan").innerHTML = "Afua";
}
else if(day == 6 && gender == "Female"){
    document.getElementById("akan").innerHTML = "Ama";
}

}
