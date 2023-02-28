import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import styles from "src/styles/pages/AboutUs.module.scss";
import LeaderCard from "src/components/aboutUs/LeaderCard";

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
    thumbnail:
      "https://media.licdn.com/dms/image/C4E03AQFZiieYZEkNDw/profile-displayphoto-shrink_200_200/0/1538019535371?e=1683158400&v=beta&t=fEsU3jtQVlDYqpeKD3-qT7TbMzeg-im_rWIZc5dcZUo",
    name: "Sumanth",
    designation: "Founder and CEO",
    linkedinLink: "https://www.linkedin.com/in/snaropanth",
    description: "",
  },
  {
    id: 1,
    thumbnail:
      "https://media.licdn.com/dms/image/C5103AQEwqm5Zu0e8MA/profile-displayphoto-shrink_200_200/0/1556669260558?e=1683158400&v=beta&t=H530ZOnxWhYz0hPuvYPvVoi2mt0W2a7VTzp9m7Z-3i8",
    name: "Sridhar",
    designation: "Advisor",
    linkedinLink: "https://www.linkedin.com/in/sridhar-s-60b3326",
    description: "",
  },
  {
    id: 2,
    thumbnail:
      "https://media.licdn.com/dms/image/C5103AQF4Qg4dD-T90g/profile-displayphoto-shrink_200_200/0/1521623097173?e=1683158400&v=beta&t=20_J21c4HwILgX48iu-7-Oz7ueDbUbzGd44zTzieBkQ",
    name: "Nitin Lakshmanan",
    designation: "AVP Security Expert",
    linkedinLink: "https://www.linkedin.com/in/nitin-lakshmanan-66088075",
    description: "",
  },
  {
    id: 3,
    thumbnail:
      "https://media.licdn.com/dms/image/C5103AQGIdPNEIqqgWQ/profile-displayphoto-shrink_200_200/0/1581318076473?e=1683158400&v=beta&t=NVLWtC5Vv6iVqtCNKA-DC5poa2EWSjn4nQZM0fjqr60",
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
