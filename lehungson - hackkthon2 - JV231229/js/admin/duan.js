const nameInput = document.querySelector(".input-field.name");
const imgInput = document.querySelector(".input-field.img");
const linkInput = document.querySelector(".input-field.link");
const tagsInput = document.querySelector(".input-field.tags");
const form = document.querySelector("form");
const btnSubmit = document.querySelector(".new-project");
const tbodyTable = document.querySelector("#data-project");

// Theo dõi chỉ mục sản phẩm được chỉnh sửa
let editedProjectIndex = -1;

function renderProjects() {
    const projects  = JSON.parse(localStorage.getItem("data-project")) || [];
    let html = "";
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      html += `
        <tr>
          <td>${i + 1}</td>
          <td>${project.name}</td>
          <td><img src="${project.img}" alt="Project Image" width="50" height="50"></td>
          <td>${project.link}</td>
          <td>${project.tags}</td>
          <td>
            <button onclick="deleteProject(${i})" style="background-color: #DC3545;" >Xóa</button>
            <button onclick="editProject(${i})" style="background-color: #198754;">Sửa</button>
          </td>
        </tr>
      `;
    }
    tbodyTable.innerHTML = html;
  }
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const project = {
      id: Date.now(),
      name: nameInput.value,
      img: imgInput.value,
      link: linkInput.value,
      tags: tagsInput.value
    };
    let projects = JSON.parse(localStorage.getItem("data-project")) || [];
    if (editedProjectIndex !== -1) {
      projects[editedProjectIndex] = project; // Đã sửa ở đây
      editedProjectIndex = -1;
      btnSubmit.textContent = "+ New Project";
    } else {
      projects.push(project);
    }
    localStorage.setItem("data-project", JSON.stringify(projects));
    renderProjects();
    resetForm();
  });

function resetForm() {
  nameInput.value = "";
  imgInput.value = "";
  linkInput.value = "";
  tagsInput.value = "";
}


window.deleteProject = function(index) {
    const projects = JSON.parse(localStorage.getItem("data-project"));
    projects.splice(index, 1);
    localStorage.setItem("data-project", JSON.stringify(projects));
    renderProjects();
}

window.editProject = function(index) {
    const projects = JSON.parse(localStorage.getItem("data-project"));
    nameInput.value = projects[index].name;
    imgInput.value = projects[index].img;
    linkInput.value = projects[index].link;
    tagsInput.value = projects[index].tags;
    editedProjectIndex = index;
    btnSubmit.textContent = "Update";
  }

renderProjects();
