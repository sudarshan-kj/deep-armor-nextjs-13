import AboutUsItemLayout from "src/components/AboutUsItemLayout";
import AboutUsNavigationLayout from "src/components/AboutUsNavigationLayout";
import styles from "src/styles/pages/AboutUs.module.scss";
import LeaderCard from "src/components/aboutUs/LeaderCard";
import hardware from "src/assets/images/hardware.jpg";

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
    thumbnail: hardware,
    name: "Sumanth",
    designation: "CEO",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Ipsum voluptate ad enim commodo ad sit deserunt duis. Cupidatat sit sit veniam aute sunt deserunt nulla consequat laboris. Cillum nostrud sint do labore aliqua irure ullamco reprehenderit consequat. Eu elit proident tempor sint est et anim sunt officia excepteur.",
  },
  {
    id: 1,
    thumbnail: hardware,
    name: "Srinivas",
    designation: "Trust and Safety Manager",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Ex eiusmod deserunt pariatur deserunt labore do consectetur ullamco. Aute dolor magna magna id dolor velit in anim eu magna sit qui anim aute. Culpa anim occaecat eiusmod ad deserunt ipsum officia esse ullamco sunt in. Reprehenderit eu cupidatat irure veniam et elit ipsum qui exercitation.",
  },
  {
    id: 2,
    thumbnail: hardware,
    name: "Sunil",
    designation: "Security Expert",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Enim esse incididunt in labore. Sunt do sint proident ex aliquip reprehenderit aliquip labore et Lorem. Fugiat dolore sunt consectetur amet mollit do in exercitation Lorem. In culpa consequat nulla mollit ad. Lorem veniam est velit irure tempor ut dolore sunt sunt ea.",
  },
  {
    id: 3,
    thumbnail: hardware,
    name: "Nikhil",
    designation: "Developer",
    linkedinLink: "https://www.deeparmor.com",
    description:
      "Sit excepteur officia ipsum tempor culpa aliquip laboris commodo quis veniam. Culpa voluptate consequat nisi fugiat quis. Dolor ut voluptate aute laboris laboris exercitation elit adipisicing veniam consequat ex id fugiat aute. Quis incididunt exercitation mollit Lorem cillum amet. Aliqua esse sunt ut duis Lorem id do laboris.",
  },
];

const Leadership = () => {
  return (
    <div className={styles.leadershipContainer}>
      {leaders.map((leader) => (
        <LeaderCard {...leader} />
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
