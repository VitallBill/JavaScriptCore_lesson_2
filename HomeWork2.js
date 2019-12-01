
function showResult(x) {
    console.log(x)
}
var InsertVariable =   0   ;





if (InsertVariable > 0) {
    showResult(1)
} else if (InsertVariable < 0)
    showResult(-1)
        else
            showResult(InsertVariable);


var login;
var password;


login = prompt("Who's there", "login or Cancel");

if (login == 'Cancel' || login == 'cancel') {
      showResult('Canceled');
    }
else if (login == 'Other' || login == 'other') {
    showResult("I don't know you");
    }
else if (login == 'Admin' || login == 'admin') { 
    password = prompt('Andmin',"Password?");
        if (password == "TheMaster") 
            showResult('Welcome');
        else if (password == "Other" || password == "other")
            showResult('Wrong password');
        else 
            showResult('Canceled');
    }
else  {
    showResult('Somesing Wrong');
      }





















