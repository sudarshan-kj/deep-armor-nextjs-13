import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import styles from "src/styles/pages/AboutUs.module.scss";
import LeaderCard from "src/components/aboutUs/LeaderCard";
import SumanthDP from "src/assets/images/man-sumanth.jpeg";
import SridharDP from "src/assets/images/man-sridhar.jpeg";
import NitinDP from "src/assets/images/man-nitin.jpg";
import SunilDP from "src/assets/images/man-sunil.jpg";

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
    thumbnail: SumanthDP,
    name: "Sumanth",
    designation: "Founder and CEO",
    linkedinLink: "https://www.linkedin.com/in/snaropanth",
    description: "",
  },
  {
    id: 1,
    thumbnail: SridharDP,
    name: "Sridhar",
    designation: "Advisor",
    linkedinLink: "https://www.linkedin.com/in/sridhar-s-60b3326",
    description: "",
  },
  {
    id: 2,
    thumbnail: NitinDP,
    name: "Nitin Lakshmanan",
    designation: "AVP Security Expert",
    linkedinLink: "https://www.linkedin.com/in/nitin-lakshmanan-66088075",
    description: "",
  },
  {
    id: 3,
    thumbnail: SunilDP,
    name: "Sunil Kumar",
    designation: "AVP Security Research",
    linkedinLink: "https://www.linkedin.com/in/sunil-kumar-b4a2616b",
    description: "",
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
