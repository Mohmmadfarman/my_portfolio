
function Pro({pro}){
    return(
        <div className="flex  justify-center">
            <h1 className="mr-10 text-xl text-black font-secondary">{pro.name}</h1>
            <h1 className="mt-1 text-xl text-blue-900">{pro.icon}</h1>
         
        </div>
    );
}

export default Pro;