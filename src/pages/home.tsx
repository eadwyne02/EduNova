import Carousel from "../components/carousel"
import LatestNews from "../components/latest_news"
import Program from "../components/programs"
import FuturePrograms from "../components/future_programs"
export default function Home(){
    return(
        <>
            <div>
                <Carousel />
                <div className="pt-8 bg-[#F6F6F2]">
                    <h2 className="text-[#14263F] text-3xl text-center font-bold font-serif lg:mt-6">Latest News</h2>
                    <div className=" pt-1">
                        <div className="mx-5 mt-3 ">
                            <LatestNews />
                        </div>
                    </div>
                    <h2 className=" mt-14 text-[#14263F] text-3xl text-center font-bold font-serif">Edunova's Programs</h2>
                    <Program />
                    <FuturePrograms />
                </div>
            </div>
        </>
    )
}