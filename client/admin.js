const entries = document.getElementById('entries');
const baseUrl = "https://dreamy-wedding-api.onrender.com/interests/"
window.onload = async() =>{
    const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        },
    })
    const interests = await response.json()
    interests.forEach(element => {
        // console.log(element)
        entries.innerHTML += entryTemplate(element)
    });
}

function entryTemplate({name, phone, email, msg="", _id}){
    return '<div class="entry">'+
        '<div class="name-data">'+name+'</div>'+
        '<div class="phone-data">'+phone+'</div>'+
        '<div class="email-data">'+email+'</div>'+
        '<div class="message-data">'+msg+'</div>'+
        '<div>'+
        '<button onclick= "DEL('+"'"+_id+"'"+')" id="buttonDelete">Delete</button>'+
        '<button onclick= "accept('+"'"+_id+"'"+')" id="buttonAccept">Accept</button>'+
        '<button onclick= "reject('+"'"+_id+"'"+')" id="buttonReject">Reject</button>'+
        '</div>'+
    '</div>'
}
async function DEL(_id){
    let areYouSure = confirm("Are you sure to delete the record?")
    if(!areYouSure)return;
    let url = baseUrl+_id;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": 'application/json'
        },
    })
    const result = await response.json()
    location.reload()
}
async function accept(_id){
    let url = baseUrl+'accept/'+_id;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        },
    })
    const result = await response.json()
    location.reload()
}
async function reject(_id){
    let url = baseUrl+'reject/'+_id;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        },
    })
    const result = await response.json()
    location.reload()
}
