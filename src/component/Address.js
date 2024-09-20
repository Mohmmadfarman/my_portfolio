

function Address({data}){
    return(
        <div className="flex flex-row mt-4">
            <div>
            <h1 className=" md:mt-6 text-2xl sm:text-2xl text-pink-600 mobile:text-xl mt-6">{data.icon}</h1>
            </div>
            <div>
                <h1 className="mt-4 ml-6 text-yellow-600 font-bold">{data.title}</h1>
                <h1 className=" md:ml-2 text-xl w-[280px] sm:text-xl mobile:text-[17px] ">{data.desc}</h1>
            </div>
           

        </div>
    );
}

export default Address;