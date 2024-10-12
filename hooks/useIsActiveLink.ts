import { IFooterLinks } from "@/types/footer";
import { useEffect, useMemo } from "react";
import useIsActivePage from "@/store/page/page";

export const useIsActiveLink = () => {
  const { isActive, fetchReq } = useIsActivePage();

  const headerLinks = useMemo<IFooterLinks[]>(() => {
    return [
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
        name: "achievement",
        link: "/achievement",
      },
      {
        name: "projects",
        link: "/projects",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ];
  }, []);

  useEffect(() => {
    const docsLink = {
      name: "order_document",
      link: "/order_document",
    };
    !isActive
      ? fetchReq().then((res) => {
          if (res?.ok && res.response) {
            const docsLinkExists = headerLinks.some(
              (item) => item.name === "order_document",
            );
            if (!docsLinkExists) {
              headerLinks.splice(3, 0, docsLink);
            }
          }
        })
      : null;
  }, [fetchReq]);

  return { headerLinks, isActive };
};
