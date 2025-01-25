"use client";

import { useState } from "react";

export function ContactMe() {
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const regex = /^[a-zA-Z0-9@.]+$/;

  const sendMessage = (e) => {
    e.preventDefault();

    // Codificando os parâmetros para garantir que caracteres especiais sejam tratados corretamente
    const encodedFrom = encodeURIComponent(from);
    const encodedMessage = encodeURIComponent(message);

    // Criando a URL mailto
    const mailtoUrl = `mailto:n3gr1t0.mn@gmail.com?subject=Message%20From%20${encodedFrom}&body=${encodedMessage}`;

    // Abrindo a URL do mailto para enviar o e-mail
    window.location.href = mailtoUrl;
  };

  return (
    <div className="escope flex-col items-center bg-primary/90" id="contactme">
      <h2 className="header mb-10">Contact Me</h2>
      <div className="flex gap-x-6 items-start pl-10">
        <p className="text-2xl  font font-semibold mt-7 w-[40%]">
          Have a project in mind or want to collaborate? Feel free to reach
          out—I’d love to connect and discuss how we can work together!
        </p>
        <form onSubmit={sendMessage}>
          <h6 className="mb-5 text-2xl font-semibold">Send Me a Message!!!</h6>
          <input
            type="text"
            className="input mb-3"
            placeholder="Message From. ex.: yourmail@gmail.com"
            onChange={(e) => {
              if (/^[^0-9]*$/.test(e.target.value)) {
                setFrom(e.target.value); // Atualiza o estado se a entrada não tiver números
              }
            }}
          />
          <textarea
            name="mensagem"
            className="input"
            rows="10"
            cols="50"
            placeholder="Write your message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="border px-10 py-3 font-semibold text-lg rounded-md border-yellow-500 hover:bg-yellow-500 ease-in duration-150 mt-3">
            Submit
          </button>
        </form>
      </div>
      <hr className="h-1 my-8 w-full" />

      <div className="flex gap-x-20 w-full justify-center">
        <article className="text-center">
          <h6 className="font-bold">Location</h6>
          <p>Maputo, Mozambique</p>
        </article>
        <article className="text-center">
          <h6 className="font-semibold">Email</h6>
          <a href="mailto:marcelnota@gmail.com">marcelnota@gmail.com</a>
        </article>
        <article className="text-center">
          <h6 className="font-bold">Phone</h6>
          <p>(+255) 84 000 0000</p>
        </article>
        <article className="text-center">
          <h6 className="font-bold">Linkedin</h6>
          <a href="linkedin.com/in/marcelnota">linkedin.com/in/marcelnota</a>
        </article>
      </div>

      <h6 className="text-center mt-8 font-bold italic">
        All Effort bring some result, so don't stop.
      </h6>
    </div>
  );
}
