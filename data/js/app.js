import languageData from "./LanguageData.json" assert { type: "json" };

const ligthMode_button = document.querySelector("#buttons__lightMode");
const language_button = document.querySelector("button#buttons__Language");
const languageText_selector = document.querySelector(".buttons__Lang-choose");
let theme = localStorage.getItem("theme");
let Language = localStorage.getItem("Language");
let LanguageOptions = ["GB", "PL", "BY"];

// DARKMODE

if (theme === "dark") {
  document.querySelector("body").classList.add("darkmode");
  ligthMode_button.innerText = "☀️";
}
if (theme === "ligth") {
  document.querySelector("body").classList.remove("darkmode");
  ligthMode_button.innerText = "🌔";
}

ligthMode_button.addEventListener("click", () => {
  if (theme !== "dark") {
    ligthMode_button.innerText = "☀️";
    document.querySelector("body").classList.add("darkmode");
    theme = "dark";
  } else {
    ligthMode_button.innerText = "🌔";
    document.querySelector("body").classList.remove("darkmode");
    theme = "ligth";
  }

  localStorage.setItem("theme", theme);
});

// LANGUAGES

if (Language === "GB") {
  Language = "GB";
  LangOption(Language);
}
if (Language === "PL") {
  Language = "PL";
  LangOption(Language);
}
if (Language === "BY") {
  Language = "BY";
  LangOption(Language);
}

languageText_selector.addEventListener("click", (e) => {
  if (e.target.innerText === "GB") {
    Language = "GB";
    LangOption(Language);
    return localStorage.setItem("Language", Language);
  }
  if (e.target.innerText === "PL") {
    Language = "PL";
    LangOption(Language);
    return localStorage.setItem("Language", Language);
  }
  if (e.target.innerText === "BY") {
    Language = "BY";
    LangOption(Language);
    return localStorage.setItem("Language", Language);
  }
});

function LangOption(LangText) {
  // Contact section
  const langAddressTxt = document.querySelector(
    "#container__Personal-Contacts ul li:last-child span"
  );

  // Education section
  const langEducationTxt = document.querySelector(
    "#container__Education>.container__Title"
  );
  const langUniNameTxt = document.querySelector(
    ".container__Education-Container--Name"
  );
  const langFacultyTxt = document.querySelector(
    ".container__Education-Container--Faculty"
  );
  const langPeriodEdTxt = document.querySelector(
    ".container__Education-Container--Period-of-study"
  );

  // Languages section
  const langLanguagesTxt = document.querySelector(
    "#container__Languages>.container__Title"
  );
  const langLangCountTxt = document.querySelectorAll(
    "#container__Languages ul li span:first-child"
  );

  // Technology section
  const langTechTitleTxt = document.querySelector(
    "#container__Technology>.container__Title"
  );

  // Soft skills ection
  const langSoftSkillsTxt = document.querySelector(
    "#container__Soft-Skills>.container__Title"
  );
  const langSftSkCountTxt = document.querySelectorAll(
    "#container__Soft-Skills ul li"
  );

  // Projects section
  const langProjectsSectTxt = document.querySelector(
    "#container__Projects>.container__Title"
  );
  const langDescCountTxt = document.querySelectorAll(
    ".container__Projects--UnCont__Description"
  );
  const langButtonGITHUBPageTxt = document.querySelectorAll(".GitHub_page");

  // footer
  const langFooter = document.querySelector("footer");

  language_button.innerText = LangText;
  let Lang_Render = LanguageOptions.filter((name) =>
    name.indexOf(language_button.innerText)
  );
  setAllLanguages(Lang_Render);

  const langShortcut = languageData[LangText];

  langAddressTxt.innerText = langShortcut.address;

  langEducationTxt.innerText = langShortcut.education.title;
  langUniNameTxt.innerText = langShortcut.education.name;
  langFacultyTxt.innerText = langShortcut.education.faculty;
  langPeriodEdTxt.innerText = langShortcut.education.period;

  langLanguagesTxt.innerText = langShortcut.Languages.title;
  langLangCountTxt.forEach((text, index) => {
    let txtLng = `Lang_${index + 1}`;
    text.innerText = langShortcut.Languages[txtLng];
  });

  langTechTitleTxt.innerText = langShortcut.technology.title;

  langSoftSkillsTxt.innerText = langShortcut.softSkills.title;
  langSftSkCountTxt.forEach((text, index) => {
    let txtSSkl = `Skill_${index + 1}`;
    text.innerText = langShortcut.softSkills[txtSSkl];
  });

  langProjectsSectTxt.innerText = langShortcut.projects.title;
  langDescCountTxt.forEach((text, index) => {
    let txtDsc = `project_${index + 1}`;
    text.innerText = langShortcut.projects[txtDsc].description;
  });
  langButtonGITHUBPageTxt.forEach((button) => {
    button.innerText = langShortcut.projects.button_GH;
  });

  langFooter.innerText = langShortcut.footer;
}

function setAllLanguages(value) {
  languageText_selector.innerHTML = "";

  value.forEach((Lang) => {
    let LangText = `<li>${Lang}</li>`;
    languageText_selector.innerHTML += LangText;
  });
}
