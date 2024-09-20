

function Skills({skill}){
    return(
        <div className="flex flex-row justify-center">
            <h1  className="mr-6  text-xl font-secondary text-black">{skill.name}</h1>
            <h1 className="mt-[12px] text-xl font-bold text-blue-900">{skill.icon}</h1>

        </div>
    );
}

export default Skills;