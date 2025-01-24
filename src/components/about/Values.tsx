
const valueItems = [
    {
        title: "Security First",
        content: "User funds and data are always protected."
    },
    {
        title: "Transparency",
        content: "Clear policies and real-time updates ensure no hidden surprises."
    },
    {
        title: "Inclusivity",
        content: "Accessible to users from all corners of India, with support in regional languages."
    },
    {
        title: "Empowerment",
        content: "Educating and enabling users to make informed financial decisions."
    }
]

const Values = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper p-[60px] mx-auto flex flex-col gap-5">
                <h2 className="text-[45px] leading-[52px] text-primaryText">
                    Our Values
                </h2>
                <div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default Values;

const Cards = () => {
    return (
        <>
            <div className="flex gap-4">

                {
                    valueItems.map((item, index) => {
                        return (
                            <div className="linearCardBg w-[343px] h-[409px] py-7 px-5 flex gap-2 flex-col justify-end" key={index}>
                                <h3 className="text-[32px] leading-[40px] text-primaryText">{item.title}</h3>
                                <h5 className="text-[22px] leading-[28px] text-secondaryText">{item.content}</h5>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}