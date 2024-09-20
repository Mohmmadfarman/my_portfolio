

function Nav({data}){
   console.log(data);
   
    
    return(
        <div className="w-full h-20 bg-red-300  flex flex-row items-center">
            <h1 className="flex flex-col">
                <div>{data.name}</div>
            </h1>

        </div>
    );
}
export default Nav;