import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import styles from "src/styles/pages/AboutUs.module.scss";
import LeaderCard from "src/components/aboutUs/LeaderCard";
import hardware from "src/assets/images/hardware.jpg";
import sumanth from "src/assets/images/man-sumanth.png";
import sridhar from "src/assets/images/man-sridhar.jpg";

type LeadersType = {
  id: number;
  thumbnail: any;
  name: string;
  designation: string;
  linkedinLink: string;
  description: string;
};

const leaders: LeadersType[] = [
  {
    id: 0,
    thumbnail: sumanth,
    name: "Sumanth",
    designation: "Founder and CEO",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Ipsum voluptate ad enim commodo ad sit deserunt duis. Cupidatat sit sit veniam aute sunt deserunt nulla consequat laboris. ",
  },
  {
    id: 1,
    thumbnail: sridhar,
    name: "Sridhar",
    designation: "Advisor",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Ex eiusmod deserunt pariatur deserunt labore do consectetur ullamco. Aute dolor magna magna id dolor velit in anim eu magna sit qui anim aute. ",
  },
  {
    id: 2,
    thumbnail: hardware,
    name: "Sunil",
    designation: "Security Expert",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Enim esse incididunt in labore. Sunt do sint proident ex aliquip reprehenderit aliquip labore et Lorem. ",
  },
  {
    id: 3,
    thumbnail: hardware,
    name: "Nikhil",
    designation: "Developer",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Sit excepteur officia ipsum tempor culpa aliquip laboris commodo quis veniam. Culpa voluptate consequat nisi fugiat quis. ",
  },
];

const Leadership = () => {
  return (
    <div className={styles.leadershipContainer}>
      {leaders.map((leader) => (
        <LeaderCard key={leader.id} {...leader} />
      ))}
    </div>
  );
};

Leadership.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Leadership">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default Leadership;
