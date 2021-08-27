let obj = {}

// Add your code here
function submitData(name, email) {

    obj.name = name
    obj.email = email

    let url = "http://localhost:3000/users"
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        accept: "application/json", },
        body:JSON.stringify(obj)
    })
    .then(Response  => Response.json())
    .then(body => {

        console.log(body.id)
        let p = document.createElement('p')
        p.innerHTML = body.id
        document.body.appendChild(p)
        
    })
    .catch (function (error) {
        let p = document.createElement('p')
        console.log(error.message)
        p.innerHTML = error.message
        document.body.appendChild(p)

     })

    
}




    pa = document.createElement('p')
    pa.innerText = "got"
    pa.addEventListener('click', submitData)
    document.body.appendChild(pa)

    
