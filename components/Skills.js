export function Skills() {
  return (
    <div className="escope justify-center flex-col bg-primary" id="skills">
      <h2 className="header text-center">My Skills</h2>
      <div className="flex gap-x-20 mt-10">
        <div className="w-[90%]">
          <h6 className="font-bold text-2xl text-justify">
            All the skills that i hvae inn thatr filed of work are mentioned
          </h6>
          <p>
            Backend Developer – [Company Name] | [Location] | [Start Date] –
            Present Developed and maintained RESTful APIs used by thousands of
            users daily. Optimized database queries, reducing response times by
            30%. Implemented authentication and security best practices,
            improving system integrity. Integrated third-party services (payment
            gateways, external APIs). Collaborated with frontend developers and
            DevOps teams to improve deployment efficiency. Backend Developer
            Intern – [Company Name] | [Location] | [Start Date] – [End Date]
            Assisted in building microservices for a scalable backend
            architecture. Wrote unit and integration tests, increasing test
            coverage by 20%. Researched and implemented caching strategies,
            improving API performance.
          </p>
        </div>
        <div>
          <ul className="list-disc flex flex-col gap-y-3 text-xl">
            <li>
              Programming Languages: JavaScript (Node.js), Python, Java, PHP,
              Go, etc.
            </li>
            <li>
              Frameworks & Tools: Express.js, NestJS, Django, Spring Boot,
              Laravel, etc.
            </li>
            <li>
              Databases: PostgreSQL, MySQL, MongoDB, Redis APIs & Web Services:
              REST, GraphQL, WebSockets Cloud & DevOps: AWS, Docker, Kubernetes,
              CI/CD (GitHub Actions, Jenkins)
            </li>
            <li>
              Security & Performance: Authentication (JWT, OAuth), SQL
              Optimization, Caching
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
