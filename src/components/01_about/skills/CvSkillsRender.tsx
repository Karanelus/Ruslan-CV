import CvLanguages from "./CvLanguages";
import CvTechstack from "./CvTechstack";

const CvSkillsRender = () => {
  return (
    <div className=" md:px-12 md:py-6 px-8 py-4 md:mb-12 mb-8 rounded-2xl bg-gradient-to-r bg-orange-200 w-section grid md:grid-cols-2 grid-cols-1 gap-8 justify-start items-start animate-opening">
      <CvTechstack />
      <CvLanguages />
    </div>
  );
};

export default CvSkillsRender;
