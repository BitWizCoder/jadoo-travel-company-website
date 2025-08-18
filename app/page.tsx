import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Services from "./components/Services";
import Trip from "./components/Trip";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <Services />
      <Destinations />
      <Trip />
    </main>
  );
}
