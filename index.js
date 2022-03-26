// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//         "Accept": "application/json"
//     },
//     /* Your data goes here */
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// };
let formData = {
    name: "Steve",
    email: "steve@steve.com"
}

const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept":  'application/json'
    },
    body: JSON.stringify(formData)
};


function submitData(formData) {
 
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        debugger;
        document.body.innerHTML = object[ "id" ]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}