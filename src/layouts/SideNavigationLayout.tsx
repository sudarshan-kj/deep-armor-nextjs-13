import React, { useEffect, useState, useRef } from "react";
import styles from "./SideNavigationLayout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { SideNavigationItemType } from "src/types";

interface ISideNavigationLayout {
  children: React.ReactNode;
  items: Array<SideNavigationItemType>;
  header: string;
}

const SideNavigationLayout = ({
  children,
  items,
  header,
}: ISideNavigationLayout) => {
  const router = useRouter();
  /*link path is chosen and not id because it lets us use the pathname as the identifier when the component first mounts ( in this case loads ).
   Else we will have to loop through the list once more*/
  const [selectedLink, setSelectedLink] = useState(router.pathname);

  useEffect(() => {
    /*when 'solutions' is clicked from nav bar, there is mismatch between what is shown as selected 
    vs what is present as path in the url. To counter that, we explicitly make sure that the link and the selected item from 
    menu are always in sync
    */
    if (router.pathname != selectedLink) setSelectedLink(router.pathname);
  }, [router.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h1>{header}</h1>
        </div>
      </div>
      <div className={styles.navbarAndMainContentContainer}>
        <div className={styles.navbarAndMainContent}>
          <nav>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.linkPath === selectedLink ? styles.selectedLink : ""
                  }
                >
                  <Link
                    onClick={() => setSelectedLink(item.linkPath)}
                    href={item.linkPath}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mainContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationLayout;
