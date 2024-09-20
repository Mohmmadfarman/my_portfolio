

function Address({data}){
    return(
        <div className="flex flex-row mt-4">
            <div>
            <h1 className="mt-6 text-2xl text-pink-600">{data.icon}</h1>
            </div>
            <div>
                <h1 className="mt-4 ml-6 text-yellow-600 font-bold">{data.title}</h1>
                <h1 className="ml-2 text-xl w-[280px] mobile:text-[20px] ">{data.desc}</h1>
            </div>
           

        </div>
    );
}

export default Address;