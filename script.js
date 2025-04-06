const people = {
  "hicham tadi": {
    info: "Hicham Tadi - Responsable Amélioration Continue",
    image: "https://drive.google.com/uc?export=view&id=1YPWWF4ezEEy8zBWi8sJpnX4VfTuygJ9a/view"
  },
  // يمكنك إضافة أشخاص آخرين هنا
};

function showInfo() {
  const name = document.getElementById("nameInput").value.toLowerCase().trim();
  const person = people[name];

  const infoBox = document.getElementById("infoBox");
  const personInfo = document.getElementById("personInfo");
  const personImage = document.getElementById("personImage");

  if (person) {
    personInfo.textContent = person.info;
    personImage.src = person.image;
    personImage.style.display = "block";
  } else {
    personInfo.textContent = "لا توجد معلومات عن هذا الشخص.";
    personImage.style.display = "none";
  }
}
