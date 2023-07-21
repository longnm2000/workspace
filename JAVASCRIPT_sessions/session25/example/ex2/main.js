const divGoc = document.querySelector(".goc");
const divThayThe = document.querySelector(".thaythe");
const nameDiv = divGoc.getAttribute("name");
const tuoi = divGoc.getAttribute("tuoi");
const job = divGoc.getAttribute("job");
console.log(nameDiv, tuoi, job);
divThayThe.setAttribute("name2", nameDiv);
divThayThe.setAttribute("tuoi2", tuoi);
divThayThe.setAttribute("job2", job);
