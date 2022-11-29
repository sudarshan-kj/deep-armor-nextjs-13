import React, { useEffect, useState } from "react";
import styles from "./SolutionsLayout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { services } from "./Solutions";

const SolutionsLayout = ({ children }: any) => {
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
          <h1>Our Services</h1>
        </div>
      </div>
      <div className={styles.navbarAndMainContentContainer}>
        <div className={styles.navbarAndMainContent}>
          <nav>
            <ul>
              {services.map((service) => (
                <li
                  key={service.id}
                  className={
                    service.linkPath === selectedLink ? styles.selectedLink : ""
                  }
                >
                  <Link
                    onClick={() => setSelectedLink(service.linkPath)}
                    href={service.linkPath}
                  >
                    {service.serviceName}
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

export default SolutionsLayout;
