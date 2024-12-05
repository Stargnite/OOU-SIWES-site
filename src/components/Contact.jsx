const Contact = () => {
  return (
    <section className="flex flex-col text-center justify-center bg-[#fec842] py-24 px-6 space-y-10">
      <h1 className="font-bold text-lg md:text-2xl">
        FOR MORE INFORMATION CONTACT THE DIRECTORATES
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-10">
        <a href="mailto:siwes@oouagoiwoye.edu.ng" className="underline">siwes@oouagoiwoye.edu.ng</a>
        <a href="mailto:internship@oouagoiwoye.edu.ng" className="underline">
          internship@oouagoiwoye.edu.ng
        </a>
      </div>
    </section>
  );
};

export default Contact;
