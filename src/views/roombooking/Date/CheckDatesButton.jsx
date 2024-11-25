const CheckDatesButton = ({ className, text, handleClick, verif }) => {
    return (
        <button type="button" onClick={handleClick} className={`button w-full text-white text-center capitalize font-bold py-2 px-4 mx-auto bg-primary ${className}`}>
            {text}
        </button>
    )
}

export default CheckDatesButton