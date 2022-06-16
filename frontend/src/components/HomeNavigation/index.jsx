import HomeCard from "@components/HomeCard";
import { Link } from "react-router-dom";
import SNavigationHome from "./style";

const datas = [
  {
    id: 1,
    label: "Du sale",
    picture: "src/assets/home/dusale.jpeg",
    link: "/dusale",
  },
  {
    id: 2,
    label: "Summer body",
    picture: "src/assets/home/summerbody.jpg",
    link: "/summerbody",
  },
  {
    id: 3,
    label: "Pas le temps",
    picture: "src/assets/home/pasletemps.jpg",
    link: "/pasletemps",
  },
  {
    id: 4,
    label: "Du sale",
    picture: "src/assets/home/mangerliquide.jpg",
    link: "/dusale",
  },
];
export default function NavigationHome() {
  return (
    <SNavigationHome>
      {datas.map((data) => {
        return (
          <Link to={data.link}>
            <HomeCard key={data.id} label={data.label} picture={data.picture} />
          </Link>
        );
      })}
    </SNavigationHome>
  );
}
