console.log("salom");
let btn = document.querySelector("#btn");
let btns = document.querySelectorAll(".delete");

btn.addEventListener("click", (event) => {
  //   event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let lastname = document.querySelector("#lastname").value;
  console.log(lastname, name, email);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: name,
    lastname: lastname,
    email: email,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:7777/user/", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      location.reload();
      console.log(result);
    })
    .catch((error) => console.error(error));
});

for (let button of [...btns]) {
  button.addEventListener("click", () => {
    let id = button.getAttribute("id");
    console.log(id);
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:7777/user/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((error) => console.error(error));
  });
}
