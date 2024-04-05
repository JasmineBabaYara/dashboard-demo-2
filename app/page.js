import Nav from "./navbar/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="bg-white pl-6 pr-6">
      <Nav />
      <Dashboard />
    </div>
  );
}
