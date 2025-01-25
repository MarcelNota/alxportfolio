import Image from "next/image";

export function AboutMe() {
  return (
    <div className="flex w-full px-40 py-20 gap-x-16 bg-gray-800 text-white items-center" id="aboutme">
      <Image
        src={"/img/aboutme.jpg"}
        width={1000}
        height={1000}
        className="w-1/3 h-[420px] rounded-md"
        alt="img"
      />
      <div className="pt-5">
        <h2 className="header mb-5">About Me</h2>
        <p className="text-base  font-semibold ">
          I’m a passionate Backend Developer who loves building scalable,
          efficient, and secure server-side applications. With a strong
          foundation in APIs, databases, and system architecture, I enjoy
          solving complex problems and optimizing performance to create seamless
          user experiences. I thrive on learning new technologies and
          continuously improving my skills, whether it’s mastering the latest
          backend frameworks, enhancing database performance, or implementing
          best security practices. Collaboration is key for me—I enjoy working
          closely with frontend developers, DevOps engineers, and product teams
          to bring great ideas to life. Currently, I’m working on [mention a
          current project, like your car sales platform], where I focus on [key
          technologies like Node.js, PostgreSQL, or AWS]. When I’m not coding,
          you’ll find me [mention a hobby, like reading tech blogs, contributing
          to open-source, or gaming]. Always open to exciting opportunities and
          collaborations—let’s build something amazing!
        </p>
        <ul className="mt-5 w-96">
            <li className="flex justify-between"><b>Name: </b> Marcel Paulo Nota</li>
            <li className="flex justify-between"><b>Birthday: </b> 02/12/1991</li>
            <li className="flex justify-between"><b>Phone: </b> (+255) 84 000 0000</li>
            <li className="flex justify-between"><b>Email: </b> marceolpaulonota@mail.com</li>
            <li className="flex justify-between"><b>Country: </b> Mozambique</li>
            <li className="flex justify-between"><b>Native Langue: </b> Portuguese</li>
        </ul>
      </div>
    </div>
  );
}
