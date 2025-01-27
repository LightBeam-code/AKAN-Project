

document.addEventListener("DOMContentLoaded", function(){
    //
    document.getElementById("akanForm").addEventListener("submit", function(event){
        event.preventDefault()
        usersinput()
    })
})

function usersinput(){
    
    const UserName= document.getElementById("fname").value;
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.getElementById("genderselect").value;

    if (!UserName || !birthDate || !gender){
        alert('Please fill in all details')
        return
    }

    const[year,month,day] = birthDate.split("-").map(Number)

    console.log(year,month,day);

    if( day<=0 || day >31 || month <=0 || month >12){
        alert("Invalid date of birth given")
        return

        
    }

    determineAkanName(year,month,day,gender)

}

function determineAkanName(year,month,day,gender){


    let Dayoftheweek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7



    if ( document.getElementById('genderselect').getElementById('Male') ){


    
    console.log("From the determineAkanName function ", year,month,day,gender);
    
}}