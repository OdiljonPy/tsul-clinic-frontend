import { BannerIconBoxes } from "@/lib/dataWithJSX";
import IconBox from "../shared/IconBox";
import { getTranslation } from "@/i18n";

const PostBannerBox = () => {
  const { t } = getTranslation();
  return (
    <div className="container relative z-[3] px-0 md:mt-0 lg:-mt-36 lg:px-8">
      <div className="flex flex-wrap lg:flex-nowrap">
        {BannerIconBoxes.map((item) => {
          return (
            <IconBox
              key={`box${item.id}`}
              iconName={item.iconName}
              content={t(item.content)}
              headline={t(item.headline)}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostBannerBox;
