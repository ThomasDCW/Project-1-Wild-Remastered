import HomeCard from "@components/HomeCard";
import SNavigationHome from "./style";

const datas = [
  {
    id: 1,
    label: "Du sale",
    picture: "src/assets/home/dusale.jpeg",
  },
  {
    id: 2,
    label: "Summer body",
    picture: "src/assets/home/summerbody.jpg",
  },
  {
    id: 3,
    label: "Pas le temps",
    picture: "src/assets/home/pasletemps.jpg",
  },
  {
    id: 4,
    label: "Du sale",
    picture: "src/assets/home/mangerliquide.jpg",
  },
];
export default function NavigationHome() {
  return (
    <SNavigationHome>
      {datas.map((data) => {
        return (
          <HomeCard key={data.id} label={data.label} picture={data.picture} />
        );
      })}
    </SNavigationHome>
  );
}
