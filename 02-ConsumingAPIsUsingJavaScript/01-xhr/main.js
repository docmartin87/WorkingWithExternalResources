var xhr = new XMLHttpRequest();                                             // Creates a new instance of XMLHttpRequest object

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");                     // Open method with first argument of GET (used for retrieving) followed by the URL
xhr.send();                                                                 // Sends the request

xhr.onreadystatechange = function() {                                       // 
    if (this.readyState == 4 && this.status == 200) {                       // xhr ready state of 4 means operation is complete && http status code 200 means OK
        document.getElementById("data").innerHTML = this.responseText;      // gets the element by id of data from the dom and change the inner html to the response text
    }
};
