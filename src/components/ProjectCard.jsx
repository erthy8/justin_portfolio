const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1d1836] rounded-lg overflow-hidden hover:scale-110 hover:shadow-xl hover:shadow-indigo-600/50 transition-scale duration-300 ease-in-out w-[18rem] md:w-[22rem] flex flex-col items-center gap-4 shadow-md shadow-indigo-600/50">
      <div className="w-full h-44 bg-white rounded-t-md overflow-hidden flex justify-center items-center ">
        <img
          src={project.image}
          alt={project.name}
          className="object-cover"
          draggable="false"
        />
      </div>
      <div className="h-fit px-6 pb-6">
        <div>
          <i className={`text-${project.type.color} text-sm`}>
            {project.type.name}
          </i>
          <h3 className="text-lg font-semibold mb-2 -mt-1 text-white">{project.name}</h3>
        </div>
        <p className="text-[.8rem] text-white">{project.description}</p>

        <div className="flex flex-wrap aligns-center mt-4 gap-y-2 ">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className={`inline-block text-xs font-medium mr-2 px-3 py-1 rounded-full bg-${
                skill.color}-200 text-${skill.color}-800 text-`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
