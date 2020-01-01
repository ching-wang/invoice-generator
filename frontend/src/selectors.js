const selectTitle = () => document.querySelector("h1");
selectTitle();

const selectNewInvBtn = () => document.querySelector("#new-invoice");
selectNewInvBtn();

const invoiceUl = document.querySelector("#invoice-ul");
const invoiceNumLi = document.createElement("li");

const invContainer = document.querySelector("#invoice-container");

const showInvDetail = document.querySelector("#show-inv-detail");
showInvDetail.classList.add("card");

const logoImg = document.createElement("img");
logoImg.classList.add("card-img-top");
logoImg.style.width = "30%";
logoImg.style.height = "auto";

const invNum = document.createElement("p");
invNum.id = "inv-num";



const userAddr = document.createElement("p");

const userCardBody = document.createElement("div");

const userCard = document.createElement("div");
userCard.classList.add("card");
userCard.style.width = "18rem";

const buyerName = document.createElement("h5");
const buyerAddr = document.createElement("p");
const buyerCardBody = document.createElement("div");

const buyerCard = document.createElement("div");
buyerCard.classList.add("card");
buyerCard.style.width = "18rem";
