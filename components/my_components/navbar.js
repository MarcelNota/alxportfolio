export function NavBar(){
    return(
        <nav className="flex justify-center gap-x-3 py-4">
            <a href="#banner"className="navLink">Home</a>
            <a href="#aboutme" className="navLink">ABout Me</a>
            <a href="#skills" className="navLink">Skills</a>
            <a href="#contactme" className="navLink">Contact Me</a>
        </nav>
    )
}