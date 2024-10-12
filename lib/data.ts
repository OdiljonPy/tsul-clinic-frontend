import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
import teammember1 from "@/public/assets/team-member-1.jpg";
import teammember2 from "@/public/assets/team-member-2.jpg";
import teammember3 from "@/public/assets/team-member-3.jpg";
import teammember4 from "@/public/assets/team-member-4.jpg";
import teammember5 from "@/public/assets/team-member-5.jpg";

import {
  FAQsProps,
  TeamMembersProps,
  attorneyEducatonProps,
  blogCategoriesProps,
  blogPostsProps,
} from "@/types";

import { IFooterLinks } from "@/types/footer";
import { IOrderDocument } from "@/types/order-document";


// Data for Blog Posts
export const blogPosts: blogPostsProps[] = [
  {
    id: 1,
    featuredImage: {
      node: {
        mediaItem: homeblog1,
      },
    },
    linkHref: "/blog/1",
    title: "When to seek legal help? Important to know when",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 1,
  },
  {
    id: 2,
    featuredImage: {
      node: {
        mediaItem: homeblog2,
      },
    },
    linkHref: "/blog/2",
    title: "Seek immediate legal advice when most needed",
    excerpt:
      "Every person have suffered from violence at work, home, school or any other place at least once in their life time. Most people dont share their experiences as they think this will be inappropriate to...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 3,
    featuredImage: {
      node: {
        mediaItem: homeblog3,
      },
    },
    linkHref: "/blog/3",
    title: "What it takes to be a lawyer (the untold story)",
    excerpt:
      "Emergency can be caused anywhere and can happen to anybody. People in the US have Emergency coverage provided by the government but it involves filling your case with great attention and need to be persuaded...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 4,
    featuredImage: {
      node: {
        mediaItem: homeblog4,
      },
    },
    linkHref: "/blog/4",
    title: "When to seek legal help? Important to know when",
    excerpt:
      "Whenever you are involved in an accident always avoid giving any statement before contacting you attorney. Legal advise is really important in these matters and your initial reaction can be make or break for your...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 5,
    featuredImage: {
      node: {
        mediaItem: homeblog5,
      },
    },
    linkHref: "/blog/5",
    title: "Seek immediate legal advice when most needed",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 6,
    featuredImage: {
      node: {
        mediaItem: homeblog6,
      },
    },
    linkHref: "/blog/6",
    title: "When to seek legal help? Important to know when",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 2,
  },
];

// Data for FAQs
export const FAQData: FAQsProps[] = [
  {
    id: 1,
    question: "Do I Have A Case?",
    answer:
      "The answer of this question depends upon situation to situation. The best answer can only be achieved once you contact one of attorney who will guide you.",
  },
  {
    id: 2,
    question: "Do Hiring You Guarantee Results?",
    answer:
      "The short answer to this question is No. Every case is different and prior results although show very high success rate but it still doesnt guarantee the same outcome.",
  },
  {
    id: 3,
    question: "What Is Your Consultation Fees?",
    answer:
      "The consultation is absolutely free. Yes you have read it right absolutely free. Once you hire us for your case we only charge then.",
  },
  {
    id: 4,
    question: "Which Areas Do You Cover?",
    answer:
      "We cover multiple areas mainly involving Family Law, Child Law, Emergency Law and Business Law. The complete list of all the practice areas can be found on this website.",
  },
  {
    id: 5,
    question: "What Is Attorney Customer Relationship?",
    answer:
      "The initial consultation doesnt include Attorney Customer relationship. Only once you hire us then the attorney customer relationship is built.",
  },
  {
    id: 6,
    question: "Do You Screen All The Information You Get?",
    answer:
      "At lawyero we treat privacy very strictly. All the information that you provide is confidential and wont be leaked under any circumstances.",
  },
];

// Data for Team Members
export const TeamMembers: TeamMembersProps[] = [
  {
    id: 1,
    image: teammember1,
    href: "#",
    name: "Robert Darren",
    designation: "CEO",
  },
  {
    id: 2,
    image: teammember2,
    href: "#",
    name: "Tady Walsh",
    designation: "CTO",
  },
  {
    id: 3,
    image: teammember3,
    href: "#",
    name: "Alanna",
    designation: "Manager",
  },
  {
    id: 4,
    image: teammember4,
    href: "#",
    name: "Frank Moses",
    designation: "Injury Expert lawyer",
  },
  {
    id: 5,
    image: teammember5,
    href: "#",
    name: "John Doe",
    designation: "International Law lawyer",
  },
];





// Data for Team Member Education
export const attorneyEducaton: attorneyEducatonProps[] = [
  {
    id: 1,
    title: "Attorney of Law",
    details: [
      {
        id: 11,
        text: "Texas Southern University – Thurgood Marshall School of Law, Juris Doctor (J.D.), Houston, TX",
      },
      {
        id: 12,
        text: "Paul Quinn College, Bachelor of Science (B.S.), Dallas, TX",
      },
    ],
  },
  {
    id: 2,
    title: "Admission Bar",
    details: [
      {
        id: 21,
        text: "State Bar of Texas, 2010",
      },
      {
        id: 22,
        text: "U.S. District Court – Northern District of Texas",
      },
    ],
  },
  {
    id: 3,
    title: "Bar Membership",
    details: [
      {
        id: 31,
        text: "Texas Trial Lawyer’s Association",
      },
      {
        id: 32,
        text: "Dallas Association of Young Lawyers",
      },
    ],
  },
];


//Data for footer link
export const footerLinks: IFooterLinks[] = [
  {
    name: "about",
    link: "/about",
  },
  {
    name: "services",
    link: "/services",
  },
  {
    name: "news",
    link: "/blog",
  },
  {
    name: "partners",
    link: "/partners",
  },
  {
    name: "FAQ",
    link: "/faqs",
  },
];

export const headerLinks: IFooterLinks[] = [
  {
    name: "about",
    link: "/about",
  },
  {
    name: "services",
    link: "/services",
  },
  {
    name: "order_document",
    link: "/order-document",
  },
  {
    name: "news",
    link: "/blog",
  },

  {
    name: "contact",
    link: "/contact",
  },
];

