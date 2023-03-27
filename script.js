const section = document.querySelector(".section"),
  btn = document.querySelector(".lidark"),
  qos = document.querySelector(".qos"),
  qosh = document.querySelector(".qosh"),
  search = document.querySelector(".search"),
  searchb = document.querySelector(".searchb"),
  blck = document.querySelectorAll(".blck"),
  msg = document.querySelector(".msg"),
  nonem = document.querySelectorAll(".nonem"),
  img2 = document.querySelectorAll(".img2"),
  light = document.querySelector(".light"),
  light2 = document.querySelector(".light2"),
  inp = document.querySelector(".input"),
  btnn = document.querySelector(".btn"),
  div = document.querySelector(".divv")

img2.forEach((item) => {
  btn.addEventListener("click", () => {
    item.classList.toggle("nonem");
  });
});

nonem.forEach((itemm) => {
  btn.addEventListener("click", () => {
    itemm.classList.toggle("show");
  });
});

blck.forEach((item) => {
  btn.addEventListener("click", () => {
    item.classList.toggle("clr");
  });
});

function qoshh() {
  light.classList.toggle("nonem");
  section.classList.toggle("white");
  qos.classList.toggle("clr");
  qosh.classList.toggle("clr");
  search.classList.toggle("shadow");
  searchb.classList.toggle("white");
  msg.classList.toggle("white");
}

btn.addEventListener("click", qoshh);

let inpval;
btnn.addEventListener("click", (e) => {
  inpval = inp.value;
  e.preventDefault();
  getTodos();
  inp.value = "";
  console.log(aniq);
});

let aniq = true;




async function getTodos() {
  if (aniq === true) {
    div.classList.add("css")
  } else {
    div.classList.remove("css")
  }
  try {
    const res = await fetch(`https://api.github.com/users/${inpval}`);
    const data = await res.json();
    console.log(data);
    if (res.status > 399) {
      alert("mavjud bolmagan user kiritilgan");
      window.location.reload();
    }
    if (data.bio == null) {
      document.querySelector(".bio").textContent = "bio mavjud emas";
    } else {
      document.querySelector(".bio").textContent = data.bio;
    }

    if (data.created_at == null) {
      document.querySelector(".data").textContent = "data mavjud emas";
    } else {
      document.querySelector(".data").textContent = data.created_at;
    }
    
    if (data.followers == null) {
      document.querySelector(".folers").textContent = "followers mavjud emas";
    } else {
      document.querySelector(".folers").textContent = data.followers;
    }
    aniq = false;
    
    if (data.following == null) {
      document.querySelector(".folow").textContent = "following mavjud emas";
    } else {
      document.querySelector(".folow").textContent = data.following;
    }

    document.querySelector(".imags").src = data.avatar_url;
    document.querySelector(".h22").textContent = data.name;

    if (data.location == null) {
      document.querySelector(".loc").textContent = "location mavjud emas";
    } else {
      document.querySelector(".loc").textContent = data.location;
    }

    if (data.twitter_username == null) {
      document.querySelector(".twi").textContent = "twitter mavjud emas";
    } else {
      document.querySelector(".twi").textContent = data.twitter_username;
    }

    if (data.html_url == null) {
      document.querySelector(".git").textContent = "git mavjud emas";
    } else {
      document.querySelector(".git").textContent = data.html_url;
    }

    if (data.public_repos == null) {
      document.querySelector(".rep").textContent = "public repos mavjud emas";
    } else {
      document.querySelector(".rep").textContent = data.public_repos;
    }
  } catch (error) {
    console.log(aniq);
  }
  if (aniq === true) {
    div.classList.add("css")
  } else {
    div.classList.remove("css")
    aniq = true
  }
  console.log(aniq);
}
