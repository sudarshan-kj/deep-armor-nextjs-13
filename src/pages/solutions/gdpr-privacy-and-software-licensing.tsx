import Image from "next/image";
import SolutionsLayout from "src/components/SolutionsLayout";
import styles from "./SolutionItem.module.scss";
import medicinePills from "src/assets/images/medicine-pills.jpg";

const GdprPrivacyAndSoftwareLicensing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingAndImageContainer}>
        <h2>GDPR, Privacy and Software Licensing</h2>
        <div className={styles.image}>
          <Image src={medicinePills} fill={true} alt="lighthouse" />
        </div>
      </div>
      <p>
        Ullamco aliquip elit excepteur amet. Mollit cupidatat id excepteur esse
        ad sint nostrud cillum mollit cupidatat enim officia. Dolore nulla
        laborum id non cillum dolore in magna. Enim reprehenderit anim
        adipisicing pariatur dolor. Consequat nulla incididunt Lorem commodo
        cupidatat commodo est veniam ullamco irure cillum mollit ad deserunt.
        Culpa culpa fugiat tempor voluptate Lorem commodo commodo tempor ullamco
        aute eiusmod. Ullamco sit irure officia duis Lorem ex laborum amet enim
        velit.
      </p>
    </div>
  );
};
GdprPrivacyAndSoftwareLicensing.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default GdprPrivacyAndSoftwareLicensing;
