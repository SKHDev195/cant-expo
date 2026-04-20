import ArtworkPage from "./components/ArtworkPage";
import { artworks } from "./data/artworks";

export default function Home() {
  return <ArtworkPage artworks={artworks} />;
}