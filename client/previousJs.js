
const serviceBlocks = document.querySelectorAll(".service-block");

serviceBlocks.forEach((serviceBlock) => {
    const services = serviceBlock.querySelectorAll(".service");
    services.forEach(service => {
        document.addEventListener('scroll', () => {
            let DisplayPosition = serviceBlock.firstElementChild.getBoundingClientRect().top;
            let myPosition = service.getBoundingClientRect().top;
            if (DisplayPosition == myPosition) {
                service.style.opacity = "1"
            } else {
                service.style.opacity = "0"
            }
        })
    })
});


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

// #services{
//     margin-bottom: 300px;
// }
// #services h1{
//     position: sticky;
//     top: 10%;
//     font-family: HeadingFont;
//     color: var(--text);
//     width: fit-content;
//     margin: 80px auto;
// }
// #services-wrapper{
//     display: flex;
//     justify-content: space-around;
//     width: var(--img-size-pc);
//     margin: 0 auto;
// }
// .service-block{
//     color: white;
//     width: 200px;

// }

// .service{
//     position: sticky;
//     top: 30%;
//     width: 10px;
//     height: 100px;
//     opacity: 0;
// }
// .service-block .service:nth-child(1){
//     opacity: 1;
// }
// .service .service-img-c{
//     position: relative;
//     width: 200px;
//     height: 300px;
//     transform: rotate(var(--rotation));
//     border-radius: 10px;
//     overflow: hidden;
// }
// .service h2{
//     position: absolute;
//     font-family: BoldFont;
//     top: 45%;
//     left: 50%;
//     transform: translate(-50%, -45%);
//     z-index: 10;
// }
// .service h3{
//     position: absolute;
//     font-family: ContentFont;
//     top: 55%;
//     left: 50%;
//     transform: translate(-50%, -55%);
//     z-index: 10;
// }
// .service .service-img-c img{
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: brightness(0.5);
// }