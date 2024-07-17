// let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
//   fetch("http://localhost:3000/toys")
//     .then((response) => response.json())
//     .then((data) => {
//       const toys = data;
//       const toyCollection = document.getElementById("toy-collection");
//       toys.forEach((toy) => {
//         //Create the toy card
//         const toyCard = document.createElement("div");
//         toyCard.className = "card";
//         //Create and add the toy name element
//         const toyName = document.createElement("h2");
//         toyName.textContent = toy.name;
//         toyCard.appendChild(toyName);
//         //Create and add the toy image element
//         const toyImage = document.createElement("img");
//         toyImage.src = toy.image;
//         toyImage.className = "toy-avatar";
//         toyCard.appendChild(toyImage);
//         //Create and add the toy like element
//         const toyLikes = document.createElement("p");
//         toyLikes.textContent = `${toy.likes} Likes`;
//         toyCard.appendChild(toyLikes);
//         //Append the toy card to the collection
//         toyCollection.appendChild(toyCard);
//       });
//     })
//     .catch((error) => console.log("Error fetching toys: ", error));
//   const configurationObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },

//     body: JSON.stringify({
//       name: "Jessie",
//       image:
//         "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
//       likes: 0,
//     }),
//   };

//   fetch("http://localhost:3000/toys", configurationObj)
//     .then((response) => response.json())
//     .then((toy) => {
//       addToytoDom(toy);
//       form.reset();
//     })
//     .catch((error) => console.log("Error adding toy: ", error));

//   const form = document.querySelector(".add-toy-form");

//   function addToytoDom(toy) {
//     const toyCollection = document.getElementById("toy-collection");
//     const toyCard = document.createElement("div");
//     toyCard.className = "card";

//     const toyName = document.createElement("h2");
//     toyName.textContent = toy.name;
//     toyCard.appendChild(toyName);

//     const toyImage = document.createElement("img");
//     toyImage.src = toy.image;
//     toyImage.className = "toy-avatar";
//     toyCard.appendChild(toyImage);

//     const toyLikes = document.createElement("p");
//     toyLikes.textContent = `${toy.likes} Likes`;
//     toyCard.appendChild(toyLikes);

//     toyCollection.appendChild(toyCard);
//   }
// });
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const form = document.querySelector(".add-toy-form");

  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    toyFormContainer.style.display = addToy ? "block" : "none";
  });

  fetch("http://localhost:3000/toys")
    .then((response) => response.json())
    .then((data) => {
      const toys = data;
      const toyCollection = document.getElementById("toy-collection");
      toys.forEach((toy) => {
        addToyToDom(toy);
      });
    })
    .catch((error) => console.log("Error fetching toys: ", error));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const toyNameInput = form.querySelector("input[name='name']").value;
    const toyImageInput = form.querySelector("input[name='image']").value;

    const newToy = {
      name: toyNameInput,
      image: toyImageInput,
      likes: 0,
    };

    const configurationObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newToy),
    };

    fetch("http://localhost:3000/toys", configurationObj)
      .then((response) => response.json())
      .then((toy) => {
        addToyToDom(toy);
        form.reset();
      })
      .catch((error) => console.log("Error adding toy: ", error));
  });

  function addToyToDom(toy) {
    const toyCollection = document.getElementById("toy-collection");
    const toyCard = document.createElement("div");
    toyCard.className = "card";

    const toyName = document.createElement("h2");
    toyName.textContent = toy.name;
    toyCard.appendChild(toyName);

    const toyImage = document.createElement("img");
    toyImage.src = toy.image;
    toyImage.className = "toy-avatar";
    toyCard.appendChild(toyImage);

    const toyLikes = document.createElement("p");
    toyLikes.textContent = `${toy.likes} Likes`;
    toyCard.appendChild(toyLikes);

    toyCollection.appendChild(toyCard);
  }
});
