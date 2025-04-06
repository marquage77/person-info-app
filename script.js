const people = {
  "hicham tadi": {
    info: "هشام تادي - مسؤول التحسين المستمر",
    image: "https://drive.google.com/file/d/1YPWWF4ezEEy8zBWi8sJpnX4VfTuygJ9a/view?usp=sharing" // <-- عوض هذا بالـ ID ديال الصورة
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
