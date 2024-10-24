import { formatDate } from "@/lib/utilFunctons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

interface BlogCardProps {
  imageURL: StaticImageData | string;
  date: string;
  linkHref: string;
  title: string;
}

const BlogCard = ({ imageURL, date, linkHref, title }: BlogCardProps) => {
    const router = useRouter()
  return (
    <div className="group basis-1/3 cursor-pointer" onClick={()=>router.push(`${linkHref}`)}>
      <div className="overflow-hidden">
        <Image
          src={imageURL}
          width={800}
          height={500}
          alt="Home BLog Post"
          className="scale-110 w-full h-[400px] transition-transform duration-500 ease-in-out group-hover:scale-100 object-cover"
        />
      </div>
      <div className="bg-white p-4">
        <span className="mb-2 inline-block text-sm text-primary-main">
          {formatDate(date)}
        </span>
        <h3>
          <Link
            href={linkHref}
            className="inline-block cursor-pointer text-base font-semibold text-background hover:text-primary-main line-clamp-2"
          >
            {title}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
