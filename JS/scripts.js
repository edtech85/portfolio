
const buttonLangEn = document.getElementById("langEn");
buttonLangEn.addEventListener("click", changeLanguageEn);

function changeLanguageEn() {
  const activeEn = document.querySelector("#aboutMeHistoryEn");
  activeEn.setAttribute("style", "display: block");

  const inactivePt = document.querySelector("#aboutMeHistoryPt");
  inactivePt.setAttribute("style", "display: none");

  const inactiveEs = document.querySelector("#aboutMeHistoryEs");
  inactiveEs.setAttribute("style", "display: none");

  const skillsEn = document.querySelector("#skillsEn");
  skillsEn.setAttribute("style", "display: block");

  const skillsPt = document.querySelector("#skillsPt");
  skillsPt.setAttribute("style", "display: none");

  const skillsEs = document.querySelector("#skillsEs");
  skillsEs.setAttribute("style", "display: none");

}



const buttonLangPt = document.getElementById("langPt");
buttonLangPt.addEventListener("click", changeLanguagePt);

function changeLanguagePt() {
  const activePt = document.querySelector("#aboutMeHistoryPt");
  activePt.setAttribute("style", "display: block");

  const inactiveEn = document.querySelector("#aboutMeHistoryEn");
  inactiveEn.setAttribute("style", "display: none");

  const inactiveEs = document.querySelector("#aboutMeHistoryEs");
  inactiveEs.setAttribute("style", "display: none");

  const skillsEn = document.querySelector("#skillsEn");
  skillsEn.setAttribute("style", "display: none");

  const skillsPt = document.querySelector("#skillsPt");
  skillsPt.setAttribute("style", "display: block");

  const skillsEs = document.querySelector("#skillsEs");
  skillsEs.setAttribute("style", "display: none");
}



const buttonLangEs = document.getElementById("langEs");
buttonLangEs.addEventListener("click", changeLanguageEs);

function changeLanguageEs() {
  const activeEs = document.querySelector("#aboutMeHistoryEs");
  activeEs.setAttribute("style", "display: block");

  const inactiveEn = document.querySelector("#aboutMeHistoryEn");
  inactiveEn.setAttribute("style", "display: none");

  const inactivePt = document.querySelector("#aboutMeHistoryPt");
  inactivePt.setAttribute("style", "display: none");

  const skillsEn = document.querySelector("#skillsEn");
  skillsEn.setAttribute("style", "display: none");

  const skillsPt = document.querySelector("#skillsPt");
  skillsPt.setAttribute("style", "display: none");

  const skillsEs = document.querySelector("#skillsEs");
  skillsEs.setAttribute("style", "display: block");
}
