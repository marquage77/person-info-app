const people = {
  "sellam abdelkarim": {
    info: "سلام عبد الكريم - عامل",
      image: "https://drive.google.com/uc?export=view&id=PASTE_IMAGE_ID"
  },
  "ayoub bennis": {
    info: "أيوب بنّيس - مهندس بيانات",
    image: "https://drive.google.com/uc?export=view&id=PASTE_IMAGE_ID"
  }
};

function showInfo() {
  const nameInput = document.getElementById("nameInput").value.toLowerCase().trim();
  const person = people[nameInput];

  const infoElement = document.getElementById("personInfo");
  const imageElement = document.getElementById("personImage");

  if (person) {
    infoElement.textContent = person.info;
    imageElement.src = person.image;
    imageElement.style.display = "block";
  } else {
    infoElement.textContent = "لا توجد معلومات عن هذا الشخص.";
    imageElement.src = "";
    imageElement.style.display = "none";
  }
}
