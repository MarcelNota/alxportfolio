export function NavBar(){
    return(
        <nav className="flex justify-center gap-x-3 py-4">
            <a href="#banner"className="navLink">Home</a>
            <a href="#about" className="navLink">ABout Me</a>
            <a href="#skills" className="navLink">Skills</a>
            <a href="#contgact-me" className="navLink">Contact Me</a>
        </nav>
    )
}