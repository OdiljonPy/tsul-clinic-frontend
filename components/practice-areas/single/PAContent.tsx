import PrimaryHeadline from "@/components/global/primary-headline";
import Image from "next/image";
import paimage1 from "@/public/assets/pa-img-5.jpg";

const PAContent = () => {
  return (
    <div className="container py-16 lg:py-24">
      <div className="flex flex-wrap gap-0 lg:flex-nowrap lg:gap-10">
        <div className="basis-full lg:basis-4/6">
          <PrimaryHeadline
            text="Huquqiy Maslahat Berish"
            additionalClass="primary-headline-left"
          />
          <p className="mb-5 text-base text-[#333]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt expedita magnam maiores sed? Iusto modi mollitia necessitatibus numquam quas qui, quidem quo quos tempore temporibus. Commodi delectus distinctio dolore doloremque dolores ex laboriosam officia, pariatur rerum sapiente ullam voluptas voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem consequuntur eveniet illo iste quidem reiciendis rerum voluptas. Accusantium blanditiis commodi consequatur cum cupiditate dolor ea, facere impedit ipsum libero maiores molestias nisi quos sequi similique soluta suscipit, ut, vitae.
          </p>
          <p className="mb-5 text-base text-[#333]">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cumque nam neque perferendis, quae quos! Consequuntur deleniti dolor fugit in nihil pariatur provident quam ratione unde, voluptatibus. Autem commodi cum cupiditate, dolorem dolores eligendi eos, ex harum ipsum laboriosam magni molestias neque nostrum nulla obcaecati omnis pariatur quod similique vero vitae. Dolorum harum ipsam laudantium maxime molestiae quidem saepe?
          </p>
        </div>
        <div className="basis-full pt-7 lg:basis-1/3 lg:pt-0">
          <Image
            src={paimage1}
            alt="Practice Area Image"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PAContent;
