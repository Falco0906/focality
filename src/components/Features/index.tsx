import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-[#050505] py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What we do"
            paragraph="We deliver end-to-end solutions — from intelligent automations and agentic workflows to modern websites and cutting-edge tech."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, i) => (
              <SingleFeature key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
