import { useEffect, useState } from "react"
import "../../Styles/Calendar.css"
import CheckDatesButton from "./Date/CheckDatesButton"
import DateCheckIn from "./Date/DateCheckIn"
import DateCheckOut from "./Date/DateCheckOut"
import useCalendarStore from "../../stores/calendar"
import Capacity from "./Date/Capacity"
import blurBox from "../../images/Blur/blurBox.webp"
import './index.css'

const NewSearchContainer = () => {
    const { selectedStart, selectedEnd, selectedCapacity } = useCalendarStore();
    const [verif, setVerif] = useState(false);
    useEffect(() => {
        if (selectedStart && selectedEnd && selectedCapacity) {
            setVerif(true);
        } else {
            setVerif(false);
        }
    }, [selectedStart, selectedEnd, selectedCapacity])
    return (
        <div className="relative w-full h-[510px] flex items-end">
            <div className="absolute w-full h-full overflow-hidden">
                <img src="/assets/images/image1.jpg" className="w-full h-full object-cover" alt="Siciliamia" />
            </div>
            <div className="relative w-full flex flex-col items-center gap-y-8 pb-10 px-10">
                <div className="text-white text-center text-lg font-bold">BOOK YOUR STAY WITH BLUE HOUSE</div>
                <div className="items-disp w-full flex items-center blur-effect lg:flex-sm-row" style={{ backgroundImage: `url(${blurBox})` }}>
                    <div className="flex w-full">
                        <DateCheckIn />
                        <DateCheckOut />
                    </div>
                    
                    <Capacity />
                    <CheckDatesButton text={'SEARCH'} style={{ border: '1px #1D3967 solid' }} className={'whitespace-nowrap'} verif={verif} />
                </div>
            </div>
        </div>
    )
}

export default NewSearchContainer