// setup materialize components
const datacomefrom = document.querySelector(".datacomefrom");
const accountDetails = document.querySelector(".account-details");
function getData(data) {
  if (data.length) {
    let html = "";
    data.forEach((element) => {
      const finalData = element.data();

      let li = `  <li>
    <div class="collapsible-header grey lighten-4">${finalData.title}</div>
    <div class="collapsible-body white">${finalData.content}</div>
  </li>`;
      html += li;
    });
    datacomefrom.innerHTML = html;
  } else {
    datacomefrom.innerHTML =
      '<h5 class="center-align">Login to view Guides</h5>';
  }
}

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
  if (user) {
    const html = `<div >Logged in as<strong> : ${user.email}</strong></div>`;
    accountDetails.innerHTML = html;
    // toggle user UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    const html = "";
    accountDetails.innerHTML = html;
    // toggle user elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
