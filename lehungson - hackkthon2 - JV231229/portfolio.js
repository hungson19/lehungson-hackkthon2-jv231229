// function renderLanguages() {
//     const languages = JSON.parse(localStorage.getItem("data-language")) || [];
//     const languageElement = document.querySelector(".col-12 mt-5");
//     languageElement.innerHTML = "";
  
//     for (let i = 0; i < languages.length; i++) {
//       const language = languages[i];

//       const languageCard = document.createElement("div");
//       languageCard.classList.add("col-md-4");
//       languageCard.innerHTML = `
//       <div class="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
//       <div class="d-flex align-items-center">
//               <div
//                class="thumb-md d-flex flex-wrap justify-content-center align-items-center"
//                 >
//                     <img
//                       src="${language.img}"
//                       alt=""
//                       class=""
//                       height="34"
//                     />
//                   </div>
//                   <div class="ms-3">
//                     <h6 class="mb-0 fw-medium text-gray-700">${language.name}</h6>
//                     <p class="text-muted mb-0 fs-12">${language.year}</p>
//                   </div>
//                 </div>
//                 </div>
//       `;
//       languageElement.appendChild(languageCard);
//     }
//   }
// renderLanguages();









  function renderProjects() {
    const projects = JSON.parse(localStorage.getItem("data-project")) || [];
  

    const gridElement = document.getElementById("grid");
    gridElement.innerHTML = "";
  
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];

      const projectCard = document.createElement("div");
      projectCard.classList.add("col-md-4");
      projectCard.innerHTML = `
      <div class="card rounded shadow border-0 m-2">
        <div class="card-body p-4 m-2">
        <div class="media mb-3">
          <img src="${project.img}" alt="Project Image" class="thumb-md">
          <div class="media-body ms-3 align-self-center">
            <h5 class="text-dark fs-18 fw-medium m-0">${project.name}</h5>
            <span class="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">${project.tags}</span>
            <p class="text-muted mb-0 fs-13">${project.link}</p>
          </div>
          </div>
          </div>
        </div>
      `;
      gridElement.appendChild(projectCard);
    }
  }
  renderProjects();
