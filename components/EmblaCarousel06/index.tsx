import dynamic from "next/dynamic";

const EmblaCarousel = dynamic(() => import("./EmblaCarousel"), {
  ssr: false,
});
const imageUrls = [
  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg03.jpg",

  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg05.jpg",
  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg04.jpg",
  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg03.jpg",

  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg05.jpg",
  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg04.jpg",
  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg03.jpg",

  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg05.jpg",
  "https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg04.jpg",
];

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <div className="p-10">
    <EmblaCarousel slides={imageUrls} />
  </div>
);

export default App;
