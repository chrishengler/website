import { Typography } from "@mui/material";

function Page() {
    return (
        <>
            <Typography variant="body1">
                What I love about software development is problem solving. The process of identifying a problem, and finding the best way to solve it.
                The problem itself doesn't necessarily have to be exciting to me. If I can see that what I'm doing is making a difference - whether that's
                by keeping a system running, making a website more responsive, or saving users time and effort - that's what I find satisfying.
            </Typography>

            <Typography variant="body1">
                Another aspect I enjoy is the variety it offers. I'm always happy to step out of my comfort zone and learn new skills. As a result I've been
                able to work with many different technologies at different levels of abstraction, doing everything from manual pointer manipulation and C-style
                network sockets, through streamlined modern C++ with heavy use of the std::algorithm library, to managing cloud infrastructure on GCP and optimising
                REST API response times in a large Django (Python) codebase. I enjoy the process of learning and in my experience I can quickly become productive
                in new technologies.
            </Typography>
        </>
    )
}

export default Page;