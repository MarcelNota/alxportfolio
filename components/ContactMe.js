export function ContactMe() {
  return (
    <div className="escope flex-col items-center bg-primary" id="contactme">
      <h2 className="header mb-10">Contact Me</h2>
      <div className="flex gap-x-6 items-start pl-10">
        <p className="text-2xl  font font-semibold mt-7 w-[40%]">
          Have a project in mind or want to collaborate? Feel free to reach
          out—I’d love to connect and discuss how we can work together!
        </p>
        <form>
          <h6 className="mb-5 text-2xl font-semibold">Send Me a Message!!!</h6>
          <input type="text" className="input mb-3" placeholder="Message To" />
          <textarea
            name="mensagem"
            className="input"
            rows="10"
            cols="50"
            placeholder="Write your message"
          ></textarea>
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

      <h6 className="text-center mt-8 font-bold italic">All Effort bring some result, so don't stop.

      </h6>
    </div>
  );
}
