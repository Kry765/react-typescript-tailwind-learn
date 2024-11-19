import Navbar from "@/scenes/navbar";
import { useState } from "react";

enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </>
  );
}

export default App;
