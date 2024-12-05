import Card from "../components/Card";

const formsData = [
  {
    title: "Sign up for the 3 months program",
    link: "#",
  },
  {
    title: "Sign up for the 6 months program",
    link: "#",
  },
];

const PlacementFormPage = () => {
  return (
    <div className="mx-auto flex items-center justify-center text-center py-12">
      <div className="">
        <div className="pb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
            CHOOSE YOUR SIWES DURATION
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {formsData.map((form, index) => (
            <div className="" key={index}>
              <Card link={form.link} title={form.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementFormPage;
