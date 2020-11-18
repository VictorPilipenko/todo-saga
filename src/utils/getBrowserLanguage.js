
const getBrowserLanguage = () => {
  const language = window.navigator.language || window.navigator.userLanguage;

  if (language) return language.split("-")[0];

  return "none";
};

export { getBrowserLanguage };
