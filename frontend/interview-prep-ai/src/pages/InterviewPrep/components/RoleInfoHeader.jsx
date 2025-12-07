import React from 'react'

const RoleInfoHeader = ({
    role,
    topicsToFocus,
    experience,
    questions,
    description,
    lastUpdated
}) => {
  return (
    <div className="bg-white relative">
        <div className="container mx-auto px-10 md:px-0">
            <div className="h-[200px] flex flex-col justify-center relative z-10">
                <div className="flex items-start">
                    <div className="flex-grow">
                        <div className="flex justify-between items-start">
                            <div className="">
                                <h2 className="">{role}</h2>
                                <p className="">
                                    {topicsToFocus}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        Experience: {experience} {experience === 1 ? "year" : "years"}
                    </div>
                    <div className="">
                        {questions} Q&A
                    </div>
                    <div className="">
                        Last Updated: {lastUpdated}
                    </div>
                </div>  
            </div>

            <div className="">
                <div className="" />
                <div className="" />
                <div className="" />
                <div className="" />
            </div>
        </div>
    </div>
  )
}

export default RoleInfoHeader