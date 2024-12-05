import Card from "../components/Card";

const directoratesData = [
	{
		title: "Directorate of Entrepreneurship And Innovation",
		link: "#",
	},
	{
		title: "Directorate of Linkages And Partnerships",
		link: "#",
	},
	{
		title: "Directorate of Research",
		link: "#",
	},
	{
		title: "Directorate of Business School",
		link: "#",
	},
	{
		title: "Directorate of Distance Learning",
		link: "#",
	},
	{
		title: "Directorate of Student Industrial Work Experience Scheme",
		link: "#",
	}
]

const DirectoratesPage = () => {
  return (
    <div className="mx-auto flex items-center justify-center text-center py-12">
      <div className="">
        <div className="pb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">DIRECTORATES</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
					{directoratesData.map((directorate, index) => (
						<div className="" key={index}>
							<Card link={directorate.link} title={directorate.title} />         
						</div>
					))}
        </div>
      </div>
    </div>
  );
};

export default DirectoratesPage;
