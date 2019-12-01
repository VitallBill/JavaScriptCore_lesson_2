//Переписати завдання 2 використовуючи конструкцію switch. 


function showResult(x) {
    console.log(x)
}



var login;
var password;

login = prompt("Who's there", "login or Cancel");

switch (login) {
        case 'Cancel' :{
        showResult('Canceled');
        break;
        }
        
        case 'cancel' :{
        showResult('Canceled');
        break;
        }
        
        case 'Other' :{
        showResult("I don't know you");
        break;
        }
        
          case 'other' :{
        showResult("I don't know you");
        break;
        }
        
           case 'admin' :{
        password = prompt('Andmin',"Password?");
               
               switch (password) {
                   case "TheMaster" : {
                       showResult('Welcome');
                        break;
                   }
                       case "Other" : {
                             showResult('Wrong password');
                            break;
                       }
                            default : {
                                showResult('Canceled');
                                 break;
                            }
               }
        break;
        }
}












