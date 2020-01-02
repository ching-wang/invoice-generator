const selectTitle = () => document.querySelector("h1");
selectTitle();

const selectNewInvBtn = () => document.querySelector("#new-invoice");

const invoiceUl = document.querySelector("#invoice-ul");
const invoiceNumLi = document.createElement("li");

const invoiceCardBody = document.querySelector("#invoice-card-body");

const invContainer = document.querySelector("#invoice-container");

const showInvDetail = document.querySelector("#show-inv-detail");

const logoImg = document.createElement("img");
logoImg.classList.add("card-img-top");

const invNum = document.createElement("p");
invNum.id = "inv-num";

const invDate = document.createElement("p");
invDate.id = "inv-date";

const invDueDate = document.createElement("p");
invDueDate.id = "inv-due-date";

const userName = document.createElement("h5");

const userAddr = document.createElement("p");

const userCardBody = document.createElement("div");
userCardBody.classList.add("card-body");

const userCard = document.createElement("div");
userCard.classList.add("card");

const buyerName = document.createElement("h5");
const buyerAddr = document.createElement("p");
const buyerCardBody = document.createElement("div");

const buyerCard = document.createElement("div");
buyerCard.classList.add("card");
