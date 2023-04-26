console.log("hello");

var cl = console.log;

const allTabHeads = [...document.querySelectorAll(".mytabHeading li")]
const tabContentArray = [...document.querySelectorAll(".tabContent")]

const onTabHeadClick = (eve) => {
    let getId = eve.target.getAttribute('data-id');
    cl(getId);

    tabContentArray.forEach(div => div.classList.remove("active"))
    document.getElementById(getId).classList.add("active");
    allTabHeads.forEach(li => li.classList.remove("active"));
    eve.target.classList.add("active")
}

allTabHeads.forEach(li => {
    li.addEventListener("click", onTabHeadClick)
})

