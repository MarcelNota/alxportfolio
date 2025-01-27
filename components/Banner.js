"use client";

import styles from "./banner.module.css";
import { NavBar } from "./my_components/navbar";

export default function Banner() {
  const downloadCv = () => {
    const pdfUrl = "/files/cv.pdf"; // Caminho relativo ao public
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Meu_CV.pdf"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full text-white" id="banner">
      <div className={`${styles.banner} h-screen`}>
        <NavBar />
        <h1 className="text-center text-[50px] mt-44">
          Hi, Im <strong className="text-yellow-500">Marcel Paulo Nota</strong>
        </h1>
        <div className="flex items-center mt-7 flex-col gap-y-3">
          <p className="text-slate-400 w-2/3 text-center">
            Passionate and results-driven Backend Developer with experience in
            building scalable, efficient, and secure server-side applications.
            Skilled in designing RESTful APIs, managing databases, and
            optimizing system performance. Enthusiastic about learning new
            technologies, solving complex problems, and collaborating with
            cross-functional teams to deliver high-quality software solutions.
          </p>
          <button
            className="border px-10 py-3 font-semibold text-lg rounded-md border-yellow-500 hover:bg-yellow-500 ease-in duration-150"
            onClick={downloadCv}
          >
            Downloa My CV
          </button>
          <div className="flex gap-x-3 ">
          <a href="https://www.linkedin.com/in/marcelnota" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/Yeahpzy/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://github.com/MarcelNota" target="_blank" rel="noopener noreferrer">GitHub</a>

          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
