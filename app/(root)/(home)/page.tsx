import PostBannerBox from "@/components/home/postBannerBox";
import IconsWithCounters from "@/components/home/iconsWithCounters";
import TwoColumnTextWithImage from "@/components/home/twoColumnTextWithImage";
import Features from "@/components/home/Features";
import CTA from "@/components/shared/CTA";
import PracticeAreas from "@/components/home/PracticeAreas";
import BlogPosts from "@/components/home/BlogPosts";
import FAQs from "@/components/home/FAQs";
import TeamMembers from "@/components/home/TeamMembers";
import Banner from "@/components/home/banner";
import PreFooter from "@/components/shared/PreFooter";
import Testimonials from "@/components/home/Testimonials";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "TSUL CLINIC",
  description: "TSULCLINIC | Har qanday yuridik masalada biz bilan bog'laning",
};
const Home = () => {
  const { t } = getTranslation();
  return (
    <>
      <Banner />
      <PostBannerBox />
      <IconsWithCounters />
      <TwoColumnTextWithImage />
      {/*<Features />*/}
      <CTA
        headline={t("extraordinary_service")}
        buttonLink="/contact"
        buttonText={t("contact_with")}
        ctaType="withBg"
      />
      {/*<PracticeAreas />*/}
      <BlogPosts />
      <TeamMembers />
      <CTA
        headline={t("our_more_desc")}
        buttonLink="/contant"
        buttonText={t("contact_with")}
        ctaType="withImage"
      />
      <FAQs />
      <Testimonials />
      <PreFooter />
    </>
  );
};

export default Home;
