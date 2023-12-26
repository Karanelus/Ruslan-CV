import CvLanguages from "./CvLanguages";
import CvTechstack from "./CvTechstack";

const CvSkillsRender = () => {
  return (
    <div className="mb-8 grid w-section animate-opening grid-cols-1 items-start justify-start gap-8 rounded-2xl bg-orange-200 bg-gradient-to-r px-8 py-4 md:mb-12 md:grid-cols-2 md:px-12 md:py-6">
      <CvTechstack />
      <CvLanguages />
    </div>
  );
};

export default CvSkillsRender;
