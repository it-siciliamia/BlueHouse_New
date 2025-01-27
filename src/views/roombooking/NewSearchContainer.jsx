import "../../Styles/Calendar.css"
import CheckDatesButton from "./Date/CheckDatesButton"
import DateCheckIn from "./Date/DateCheckIn"
import DateCheckOut from "./Date/DateCheckOut"


const NewSearchContainer = () => {
    return (
        <div className="relative w-full h-[510px] flex items-end">
            <div className="absolute w-full h-full overflow-hidden">
                <img src="/assets/images/image1.jpg" className="w-full h-full object-cover" alt="Siciliamia" />
            </div>
            <div className="relative w-full flex flex-col items-center gap-y-8 pb-10 px-10">
                <div className="text-white text-center text-lg font-bold">BOOK YOUR STAY WITH BLUE HOUSE</div>
                <div className="w-full flex items-center blur-effect">
                    <DateCheckIn />
                    <DateCheckOut />
                    <CheckDatesButton text={'SEARCH'} className={'whitespace-nowrap'} /> 
                </div>
            </div>
        </div>
    )
}

export default NewSearchContainer