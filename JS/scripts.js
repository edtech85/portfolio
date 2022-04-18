
const buttonLangEn = document.getElementById("langEn");
buttonLangEn.addEventListener("click", changeLanguageEn);

function changeLanguageEn() {
  const activeEn = document.querySelector("#aboutMeEn");
  activeEn.setAttribute("style", "display: block");

  const inactivePt = document.querySelector("#aboutMePt");
  inactivePt.setAttribute("style", "display: none");

  const inactiveEs = document.querySelector("#aboutMeEs");
  inactiveEs.setAttribute("style", "display: none");


  const skillsEn = document.querySelector("#curriculumEn");
  skillsEn.setAttribute("style", "display: block");

  const skillsPt = document.querySelector("#curriculumPt");
  skillsPt.setAttribute("style", "display: none");

  const skillsEs = document.querySelector("#curriculumEs");
  skillsEs.setAttribute("style", "display: none");


  const footerEn = document.querySelector("#footerEn");
  footerEn.setAttribute("style", "display: block");

  const footerPt = document.querySelector("#footerPt");
  footerPt.setAttribute("style", "display: none");

  const footerEs = document.querySelector("#footerEs");
  footerEs.setAttribute("style", "display: none");

}



const buttonLangPt = document.getElementById("langPt");
buttonLangPt.addEventListener("click", changeLanguagePt);

function changeLanguagePt() {
  const activePt = document.querySelector("#aboutMePt");
  activePt.setAttribute("style", "display: block");

  const inactiveEn = document.querySelector("#aboutMeEn");
  inactiveEn.setAttribute("style", "display: none");

  const inactiveEs = document.querySelector("#aboutMeEs");
  inactiveEs.setAttribute("style", "display: none");


  const skillsEn = document.querySelector("#curriculumEn");
  skillsEn.setAttribute("style", "display: none");

  const skillsPt = document.querySelector("#curriculumPt");
  skillsPt.setAttribute("style", "display: block");

  const skillsEs = document.querySelector("#curriculumEs");
  skillsEs.setAttribute("style", "display: none");


  const footerEn = document.querySelector("#footerEn");
  footerEn.setAttribute("style", "display: none");

  const footerPt = document.querySelector("#footerPt");
  footerPt.setAttribute("style", "display: block");

  const footerEs = document.querySelector("#footerEs");
  footerEs.setAttribute("style", "display: none");
}



const buttonLangEs = document.getElementById("langEs");
buttonLangEs.addEventListener("click", changeLanguageEs);

function changeLanguageEs() {
  const activeEs = document.querySelector("#aboutMeEs");
  activeEs.setAttribute("style", "display: block");

  const inactiveEn = document.querySelector("#aboutMeEn");
  inactiveEn.setAttribute("style", "display: none");

  const inactivePt = document.querySelector("#aboutMePt");
  inactivePt.setAttribute("style", "display: none");


  const skillsEn = document.querySelector("#curriculumEn");
  skillsEn.setAttribute("style", "display: none");

  const skillsPt = document.querySelector("#curriculumPt");
  skillsPt.setAttribute("style", "display: none");

  const skillsEs = document.querySelector("#curriculumEs");
  skillsEs.setAttribute("style", "display: block");


  const footerEn = document.querySelector("#footerEn");
  footerEn.setAttribute("style", "display: none");

  const footerPt = document.querySelector("#footerPt");
  footerPt.setAttribute("style", "display: none");

  const footerEs = document.querySelector("#footerEs");
  footerEs.setAttribute("style", "display: block");
}
