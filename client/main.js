
const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const Name = document.getElementById("Name");
    const Phone = document.getElementById("Phone");
    const Email = document.getElementById("Email");
    const Msg = document.getElementById("Msg");

    const baseUrl = "https://dreamy-wedding-api.onrender.com/interests/"
    const posting = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name: Name.value,
            phone: Phone.value,
            email: Email.value,
            msg: Msg.value
        })
    })
    if (posting.ok == true) {
        alert("Your response recorded succesfully")
    }
})