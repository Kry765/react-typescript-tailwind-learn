import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponrosForbes from "@/assets/SponrosForbes.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
 
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return <section id="home" className="gap-16 bg-gray-20 pb-10 py-10 md:h-full md:pb-0">
    {/* IMAGE AND MAIN HEADER */}
      <div>
        {/* MAIN HEADER */}
        <div>
        {/*HEADINGS */}
          <div>
            <div>
              <img src={HomePageText} alt="home-page-text" />
            </div>
          </div>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
          </p>
            {/*ACTIONS */}
            <div>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500
              "
              onClick={() =>setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </div>

        </div>

        {/*IMAGE */}
        <div>
          <img alt="home-pageGraphic" src={HomePageGraphic}/>
        </div>
      </div>
    </section>
  
}

export default Home