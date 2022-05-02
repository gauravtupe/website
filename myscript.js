$(document).ready(function (){

    $("#sub-btn").click(function (){
        function getUserData() {

            let student = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#email").val(),
                password: $("#password").val(),
              };
              $("#form")[0].reset();
              return student;

        }

        function storeDataToLocalStorage() {
            if (!localStorage.getItem("student")) {
              localStorage.setItem("student", JSON.stringify(getUserData()));
            } else {
              localStorage.removeItem("student");
              localStorage.setItem("student", JSON.stringify(getUserData()));
            }
        }

        function sendData() {
            let xhr = new XMLHttpRequest();
            let data = JSON.stringify(getUserData());
            xhr.open("POST", "http://localhost:4000/storedata", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data);
        }
      
        //call storeDataToLocalStorage and sendData functions
        storeDataToLocalStorage();
        // sendData();
        window.location.href="display-data.html"

    });

});