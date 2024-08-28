import PrimaryHeadline from "../global/primary-headline";
import { HomepagePAs } from "@/lib/dataWithJSX";
import IconCardWithLink from "../shared/IconCardWithLink";

const PracticeAreas = () => {
  return (
    <div className="container smpt-20 pt-16 lg:pb-32 sm:pb-20 pb-16 relative">
      <PrimaryHeadline text="Practice Areas" />
      <div className="flex flex-wrap -mx-2">
        {HomepagePAs.map((item, index) => (
          <IconCardWithLink
            key={`PA${item.id}`}
            link={item.link}
            pa={item.PA}
            iconName={item.iconName}
            cardBgClass={index % 2 === 0 ? "bg-background" : "bg-primary-main"}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeAreas;
