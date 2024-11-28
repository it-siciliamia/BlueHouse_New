const CheckDatesButton = ({ className, style, text, handleClick, verif }) => {
    return (
        <button type="button" onClick={handleClick} style={style} className={`button w-full text-white text-center capitalize font-bold p-12px mx-auto ${className} ${verif?`bg-primary`:`bg-secondary`}`}>
            {text}
        </button>
    )
}

export default CheckDatesButton