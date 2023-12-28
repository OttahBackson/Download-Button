const btn = document.querySelector(".btn");

// Google drive link imported(to be donwload after a clicked event)
const fileLink = `https://drive.google.com/file/d/1oOjJnsvWbOJuIJpY_XvPlJ5L4sc5dH2A/view`;


const initTimer = () => {
    if(btn.classList.contains("disable-timer"));
    return (location.href = fileLink);

// getting data-timer attribute from html
    let timer = btn.dataset.timer;
    btn.classList.add("active-timer");
    btn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;


    const initCounter = setInterval(() =>{
        if(timer > 0) {
            timer--; //replacing text in the html btn hardcode
           return (btn.innerHTML = `Your file will download in <b>${timer}</b> seconds`);
        }
        clearInterval(initCounter);
        location.href = fileLink;
        btn.textContent = `Your file is downloading!`;
        setTimeout(() => {
            btn.classList.replace("active-timer", "disable-timer");
            btn.innerHTML = `<span><i class="fa-solid fa-download"></i></span>
            <span class="text">Download Again</span>`
        },2000)
    }, 1000)
}
btn.addEventListener("click", initTimer);