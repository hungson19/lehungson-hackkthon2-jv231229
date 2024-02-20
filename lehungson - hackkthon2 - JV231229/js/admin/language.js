const nameInput = document.querySelector(".input-field.name");
const imgInput = document.querySelector(".input-field.img");
const yearInput = document.querySelector(".input-field.year");
const form = document.querySelector("form");
const btnSubmit = document.querySelector(".new-project");
const tbodyTable = document.querySelector("#data-language");

// Theo dõi chỉ mục sản phẩm được chỉnh sửa
let editedProjectIndex = -1;

function renderLanguages() {
    const languages  = JSON.parse(localStorage.getItem("data-language")) || [];
    let html = "";
    for (let i = 0; i < languages.length; i++) {
      const language = languages[i];
      html += `
        <tr>
          <td>${i + 1}</td>
          <td>${language.name}</td>
          <td><img src="${language.img}" alt="Project Image" width="50" height="50"></td>
          <td>${language.year}</td>
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
  
    const language = {
      id: Date.now(),
      name: nameInput.value,
      img: imgInput.value,
      year: yearInput.value,
      
    };
    let languages = JSON.parse(localStorage.getItem("data-language")) || [];
    if (editedProjectIndex !== -1) {
      languages[editedProjectIndex] = language; // Đã sửa ở đây
      editedProjectIndex = -1;
      btnSubmit.textContent = "+ New Project";
    } else {
        languages.push(language);
    }
    localStorage.setItem("data-language", JSON.stringify(languages));
    renderLanguages();
    resetForm();
  });

function resetForm() {
  nameInput.value = "";
  imgInput.value = "";
  yearInput.value = "";

}


window.deleteProject = function(index) {
    const languages = JSON.parse(localStorage.getItem("data-language"));
    languages.splice(index, 1);
    localStorage.setItem("data-language", JSON.stringify(languages));
    renderLanguages();
}

window.editProject = function(index) {
    const languages = JSON.parse(localStorage.getItem("data-language"));
    nameInput.value = languages[index].name;
    imgInput.value = languages[index].img;
    yearInput.value = languages[index].year;
    editedProjectIndex = index;
    btnSubmit.textContent = "Update";
  }

renderLanguages();
