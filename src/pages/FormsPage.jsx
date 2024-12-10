import Card from "../components/Card";

const formsData = [
  {
    title: "Sign up for the 3 months program",
    link: "",
  },
  {
    title: "Sign up for the 6 months program",
    link: "",
  },
  {
    title: "SIWES proposal letter",
    link: "/siwes-proposal-letter.pdf",
  },
  {
    title: "SIWES supervision assessment form",
    link: "/siwes-supervision-assessment-form.pdf",
  },
  {
    title: "SIWES coordinating unit form",
    link: "/siwes-coordinating-unit-form.pdf",
  },
  {
    title: "SIWES coordinating unit form 2",
    link: "/coordinating-unit-form-2.pdf",
  },
  {
    title: "SIWES program report sheet",
    link: "/siwes-program-report-sheet.pdf",
  },
  {
    title: "Directory of ITF headquarters",
    link: "/directory-of-ITF-headquarters.pdf",
  },
  {
    title: "students commencement of attachment form",
    link: "/students-commencement-of-attachment-form.pdf",
  },
  
];

const FormsPage = () => {

  const handleDownload = (pdfUrl) => {
    // Create a temporary <a> element for triggering the download
    if(pdfUrl === "") {
      alert("Form not added yet, please check back later.")
      return;
    }
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "SIWES-form.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after download
  };

  return (
    <div className="mx-auto flex items-center justify-center text-center py-12">
      <div className="">
        <div className="pb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 px-5">
            PRINT YOUR FORMS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {formsData.map((form, index) => (
            <div className="" key={index} onClick={()=> handleDownload(form.link)}>
              <Card link={""} title={form.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
