
var startBid = 500;

function education() {
    var selectedValue = document.getElementById("1").value;

    switch (selectedValue) {
        case "1.1":
            startBid *= 1.5;
            break;
        case "1.2":
            startBid *= 1.2;
            break;
        case "1.3":
            startBid *= 1.05;
            break;
        case "1.4":
            startBid *= 0.9;
            break;
      
    }
}

function netWorth() {
    var selectedValue = document.getElementById("2").value;

    switch (selectedValue) {
        case "2.1":
            startBid *= 2;
            break;
        case "2.2":
            startBid *= 1.5;
            break;
        case "2.3":
            startBid *= 1.2;
            break;


    }

}

function checked(id) {
    var s = document.getElementsByName(id);
    var i;
    for (i = 0; i < s.length; i++) {
        if (s[i].checked) {
            if (id == "skills") {
                skills(Number(s[i].value));
            }
            else if (id == "reputation") {
                reputation(Number(s[i].value));
            }
            else if (id == "age") {
                forRadio(Number(s[i].value));
            }
        }
    }
}





    function skills(a) { 
        startBid += a;
    }
    function forRadio(k) {
        startBid *= k;
    }
    function reputation(a) { 
        if (a == 0.85 || a == 0.9) {
            startBid  *= a;
        }
        else {
            startBid -= a;
        }
    }

    function msg() {
        education();
        netWorth();
        checked("skills");
        checked("age");
        checked("reputation");
        alert(startBid + "$");
        startBid=500;
    }
