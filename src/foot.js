export default (function () {
  const da = document.write(new Date().getFullYear());
  document.querySelector(".footer").innerHTML = `
<div class="anis"><p>
Copyright ©
${da}
assinscreedFC
</p>
<a href="https://github.com/assinscreedFC" target="_blank">
<img src="./github.svg" alt="popo" 
></a></div>`;

  const load = document.createElement("div");
  load.innerHTML = `
<span class="lettre">C</span>
<span class="lettre">H</span>
<span class="lettre">A</span>
<span class="lettre">R</span>
<span class="lettre">G</span>
<span class="lettre">E</span>
<span class="lettre">M</span>
<span class="lettre">E</span>
<span class="lettre">N</span>
<span class="lettre">T</span>
`;
  load.classList.add("loader");
  const charment = document.querySelector(".flou");
  charment.after(load);

  const loader = document.querySelector(".loader");

  window.addEventListener("load", () => {
    load.remove();
    document.querySelector(".footer").innerHTML = `<div class="anis">
    <p>
    Copyright ©
    ${da}
    assinscreedFC
    </p>
    <a href="https://github.com/assinscreedFC" target="_blank">
    <img src="./github.svg" alt="popo"
    ></a> </div>`;
  });
  const header = document.querySelector("header");
  let one = 0;
  const burgeur = `<input id="toggleChecker" type="checkbox" />
  <label id="togglerLable" for="toggleChecker">
    <div class="checkboxtoggler">
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
    </div>
  </label>`;

  if (window.innerWidth <= 550) {
    if (one === 0) {
      header.innerHTML += burgeur;
      one++;
      leur();
    }
  } else {
    header.innerHTML = `<img src="./rangement/6921-removebg-preview.png" alt="" />
    <nav>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./menu.html">menu</a></li>
        <li><a href="./about.html">about us</a></li>
        <li><a href="./contact.html">contact</a></li>
      </ul>
    </nav>`;
    one = 0;
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 550) {
      if (one === 0) {
        header.innerHTML += burgeur;
        one++;
        leur();
      }
    } else {
      header.innerHTML = `<img src="./rangement/6921-removebg-preview.png" alt="" />
      <nav>
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./menu.html">menu</a></li>
          <li><a href="./about.html">about us</a></li>
          <li><a href="./contact.html">contact</a></li>
        </ul>
      </nav>`;
      one = 0;
    }
  });
  function leur() {
    const check = document.querySelector("#toggleChecker");

    check.addEventListener("change", function () {
      console.log(check.checked);
      const nav = document.querySelector("nav");
      const box = document.querySelector(".checkboxtoggler");
      box.classList.add("active");

      nav.classList.toggle("active");
    });
  }
})();
