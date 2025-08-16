import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <Services />
      <Destinations />
    </main>
  );
}
