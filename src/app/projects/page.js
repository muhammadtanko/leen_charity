import { NavBar } from "@comp/NavBar"
import { ProjectsSumarry } from "@comp/projects"

const Gallery = () => {
    return (
        <div className="">
            <NavBar />
            <main>
                <h1 className="ml-[50px] font-normal text-primary text-[24px] leading-[28px]">Projects | All Projects</h1>
                <ProjectsSumarry />
            </main>
        </div>
    )
}

export default Gallery;