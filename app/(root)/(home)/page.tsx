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

export const metadata: Metadata = {
  title: "TSUL CLINIC",
  description: "Your one stop solution for legal matters",
};
const Home = () => {
  return (
    <>
      <Banner />
      <PostBannerBox />
      <IconsWithCounters />
      <TwoColumnTextWithImage />
      {/*<Features />*/}
      <CTA
        headline="Eng murakkab huquqiy masalalar bo'yicha maslahat oling."
        buttonLink="/contact"
        buttonText="Biz bilan bog'laning"
        ctaType="withBg"
      />
      {/*<PracticeAreas />*/}
      <BlogPosts />
      <TeamMembers />
      <CTA
        headline="Biz har bir ishni bir xil e'tibor va fidoyilik bilan ko'rib chiqamiz, chunki har bir mijoz muhim."
        buttonLink="#"
        buttonText="Request Consultation"
        ctaType="withImage"
      />
      <FAQs />
      <Testimonials />
      <PreFooter />
    </>
  );
};

export default Home;
