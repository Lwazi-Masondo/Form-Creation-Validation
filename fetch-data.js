async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";

    const userList = document.createElement("ul");

    users.forEach(function (user) {
      const userName = document.createElement("li");
      userName.textContent = user.name;
      userList.appendChild(userName);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);

//if (!response.ok){
// throw new Error("Network response was not ok");
//}This line of code is to check for an usuccessful response and you'll add it just below the fetch function
