import React from "react";

const TestimonialCard = () => {
    return (
        <div className="mx-8 md:mx-32 my-8">
            <div className="flex items-center ">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    {" "}
                    <img
                        className="w-100 h-100 object-cover"
                        src="/profile1.jpg"
                        alt="profile"
                    />
                </div>
                <div className="pl-4">
                    <h4 className="font-medium">Annette Black</h4>
                    <p className="text-grey">UX / UI Designer</p>
                </div>
            </div>
            <p className="font-medium my-8 tracking-wide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                cumque quas adipisci a. Similique inventore suscipit quidem
                debitis, accusamus! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Fuga cumque quas adipisci a. Similique
                inventore suscipit quidem debitis, accusamus!
            </p>
        </div>
    );
};

export default TestimonialCard;
