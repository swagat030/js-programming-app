import fetch from "node-fetch";

function makeAPICall1(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            callback(data);
        });
}


function makeAPICall2(callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            callback(data);
        });
}

function makeAPICall3(callback) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            callback(data);
        });
}

makeAPICall1(function (response1) {
    makeAPICall2(function (response2) {
        makeAPICall3(function (response3) {
            // Continue with data from all three API calls
            console.log('Data from API Call 1:', response1);
            console.log('Data from API Call 2:', response2);
            console.log('Data from API Call 3:', response3);
        });
    });
});
