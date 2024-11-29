'use client';

const items = [1, 2, 3, 4];

const listItems = [
    { emoji: "💥", text: "App Launch" },
    { emoji: "🏡", text: "Kitchen Reno" },
    { emoji: "🧘", text: "Daily Habits" },
    { emoji: "🍔", text: "Recipes" },
    { emoji: "✏️", text: "Design Work" },
]

export const List = () => {
    return(
        <section className="px-10">
            <div className="flex gap-2 mt-[75px] p-3 border-2 rounded-[44px]">
                <div className="flex flex-col p-6 border-2 rounded-[32px]">
                    <div className="flex flex-wrap gap-2">
                        {items.map((item , index) => (
                            <div
                            key={index}
                            className="flex-1 h-[62px] bg-customBg rounded-[20px]"
                            ></div>
                        ))}
                    </div>
                    <div>
                        <p className="mt-[30px] text-sm text-ListsColor font-bold">Lists</p>
                        <ul className="mt-[11px]">
                            {listItems.map((item , index) => (
                                <li
                                key={index}
                                className="py-[7px] text-ListsText font-medium">
                                    {item.emoji}{item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span></span>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}