// Add your code here
function submitData(name, email) {
    const formData = {
        name :'Steve',
        email : 'steve@steve.com',
    }
    const congiObj = {
        method : "POST", 
        headers : {
        "Content-Type" : "application/json",
        "accept" : "application/json",
        },
        body : JSON.stringify(formData),
    }
    return fetch ('http://localhost:3000/users', congiObj)
    .then ((resp => resp.json()))
    .then((obj) => {
        const id = obj.id;
        document.body.innerHTML =+ id;
    })

    .catch ((error) => document.body.innerHTML += error.message)
}
submitData();