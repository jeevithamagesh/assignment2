var slideIndex = 0;
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    modal.style.display = "block";



}

var btn1 = document.getElementById("openform");
if (btn1 != null) {
    btn1.onclick = function() {
        modal.style.display = "block";

    }
}


showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds

}

function user() {
    var name1 = document.getElementById('name').value;
    if (name1 == '') {
        document.getElementById("first").innerHTML = "*required";
    } else if (name1.length > 26) {
        document.getElementById("first").innerHTML = "*not more than 26 characters";
    } else {
        document.getElementById("first").innerHTML = "";
    }
}


function myfunction() {
    var mail = document.getElementById('email').value;
    if (mail == '') {
        document.getElementById("Message3").innerHTML = "*required";
    } else if ((mail.charAt(mail.length - 4) != '.') && (mail.charAt(mail.length - 3) != '.')) {
        document.getElementById("Message3").innerHTML = "*Invalid";
    } else if (mail.indexOf('@') <= 0) {
        document.getElementById("Message3").innerHTML = "*Invalid @ position";
        return false;
    } else {
        document.getElementById("Message3").innerHTML = "";
    }




}

function confirm() {
    var mail = document.getElementById('email').value;
    var email1 = document.getElementById('confirmemail').value;

    if (email1 == '') {
        document.getElementById("message").innerHTML = "*required";
    } else {
        document.getElementById("message").innerHTML = "";
    }

    if (mail != email1) {
        document.getElementById("message").innerHTML = "*email should match";
    }
}

function confirmpassword() {

    var cpwd = document.getElementById("password2").value;

    var pwd = document.getElementById("password1").value;
    if (pwd != cpwd) {
        document.getElementById("msgcpsw").innerHTML = "*password should match"
    } else {
        document.getElementById("msgcpsw").innerHTML = "";
    }
    if (cpwd == '') {
        document.getElementById("msgcpsw").innerHTML = "required";
    }
}
//psw
function password() {
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var pwd = document.getElementById("password1").value;
    if (pwd == '') {
        document.getElementById("msgpsw").innerHTML = "required";
    } else {
        document.getElementById("msgpsw").innerHTML = "";
    }

    myInput.onblur = function() {
        document.getElementById("message").style.display = "block";

    }

    myInput.onblur = function() {
        document.getElementById("message").style.display = "none";
    }


    myInput.onkeyup = function() {

        var lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }


        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }


        if (myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

    }
}

//dob

function agecount() {
    var date1 = new Date();
    var dob = document.getElementById("dob").value;
    var date2 = new Date(dob);
    var y1 = date1.getFullYear();
    var y2 = date2.getFullYear();
    var age = y1 - y2;
    console.log(age);
    document.getElementById("age").value = age;
    if (dob == '') {

        document.getElementById("dob1").innerHTML = "*required";
    } else {
        document.getElementById("dob1").innerHTML = "";
    }

}
//mobile number
function mobile() {
    var a = document.getElementById("mobilenumber").value;
    if (a == "") {
        document.getElementById("messages").innerHTML = "*enter this field";
        return false;
    }
    if (isNaN(a)) {
        document.getElementById("messages").innerHTML = "*enter only numbers";
        return false;
    }
    if (a.length < 10) {
        document.getElementById("messages").innerHTML = "*enter 10 digits";
        return false;
    }
    if (a.length > 10) {
        document.getElementById("messages").innerHTML = "*mobile number must be 10 digits";
        return false;
    }
    if ((a.charAt(0) != 9) && (a.charAt(0) != 8) && (a.charAt(0) != 7)) {
        document.getElementById("messages").innerHTML = "*mobile number must start with 9 8 and 7";
        return false;
    } else {
        document.getElementById("messages").innerHTML = "";
    }
}
//location
function getData() {
    var weather = new XMLHttpRequest();
    var loc = 'bangalore';
    var l;
    if (l == "") {
        document.getElementById("loct").innerHTML = "*enter this field";

    }
    console.log("http://api.wunderground.com/api/df3f2ab5e1db8f97/conditions/q/karnataka/" + loc + ".json");

    weather.open("GET", "http://api.wunderground.com/api/df3f2ab5e1db8f97/conditions/q/karnataka/" + loc + ".json", false);
    weather.send(null);
    var r = JSON.parse(weather.response);

    document.getElementById("loct").value = r.current_observation.observation_location.city;
    if (r == '') {
        document.getElementById("loct").innerHTML = "*required";
    }


}

//storing data 

function accept() {
    var fname = document.getElementById("name").value;
    var mail1 = document.getElementById("email").value;
    var email1 = document.getElementById("confirmemail").value;
    var a = document.getElementById("mobilenumber").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var pwd = document.getElementById("password1").value;
    var cpwd = document.getElementById("password2").value;
    var loc = document.getElementById("loct").value;
    var accept;
    accept = new FormData(document.forms.myform);
    for (let value of accept.values()) {
        if (value == "") {
            document.getElementById("first").innerHTML = "*required";
        }
        myObj = { "Firstname": fname, "email": mail1, "confirmemail": email1, "mobilenumber": a, "dob": dob, "age": age, "password1": pwd, "password2": cpwd, "loct": loc };
        myJSON = JSON.stringify(myObj);
        localStorage.setItem("testJSON", myJSON);
    }
}

function fetch() {


    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("name").value = obj.Firstname;
    document.getElementById("email").value = obj.email;
    document.getElementById("confirmemail").value = obj.confirmemail;
    document.getElementById("mobilenumber").value = obj.mobilenumber;
    document.getElementById("dob").value = obj.dob;
    document.getElementById("age").value = obj.age;
    document.getElementById("password1").value = obj.password1;
    document.getElementById("password2").value = obj.password2;
    document.getElementById("loct").value = obj.loct;

}

function reset() {
    document.getElementById("myform").reset();
}