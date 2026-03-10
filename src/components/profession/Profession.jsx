import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "I craft seamless and intuitive web experiences by deeply understanding user behavior and needs. Leveraging data-driven insights and advanced prototyping techniques, I ensure every MERN Stack application I build maximizes usability, engagement, and efficiency.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I design visually striking and consistent interfaces that align with user expectations and business goals. My focus on layout, color, typography, and micro-interactions ensures MERN Stack applications are not only functional but also highly engaging.",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    description:
      "As a full-fledged MERN Stack Developer since 2019, I build high-performance, scalable, and maintainable web applications using MongoDB, Express.js, React.js, and Node.js. From concept to deployment, I integrate best coding practices, optimized workflows, and modern architecture to deliver enterprise-level solutions.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing seamless user experiences, creating engaging interfaces, and developing robust MERN Stack web applications that deliver real value and exceptional usability. My approach blends creativity with deep technical expertise, ensuring every solution is both visually compelling and highly performant.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
