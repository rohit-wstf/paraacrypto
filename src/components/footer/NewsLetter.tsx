
const NewsLetter = () => {
    return (
        <>
            <div className=" md:max-w-[316px] w-full flex flex-col gap-3 flex-1">
                <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
                    Subscribe to our Newsletter
                </h4>
                <div className="flex w-full ">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="flex-1 sm:flex-grow-0 border border-[#C8D4D9] text-tertiaryText p-2 rounded-l-[4px] sm:rounded-l-lg focus:outline-none"
                    />
                    <button className="bg-[#00B073] text-white px-5 py-2 hover:bg-[#2d9e77] rounded-r-[4px] sm:rounded-r-lg">
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter