// import MarketingPage from "./marketing/page";

// export default function Home() {
//   return <MarketingPage />;
// }

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/marketing");
}
