import { Stack, Typography } from "@mui/joy";
import PDFModal from "./PDFModal";

function Experience() {
    return (
        <div className="main-content">
            <Stack direction="row"   sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography level="title-lg">Alnylam Pharmaceuticals</Typography>
                <Typography level="body-md">January 2025 - June 2025</Typography>
            </Stack>
            <Typography>Software Engineering Co-op</Typography>
            <Typography>
                I had the opportunity to contribute to projects that made a direct impact on 
                internal teams and company-wide development practices. One of my main projects 
                involved building a full-stack web application to help internal scientists visualize 
                mass calculations for chemical compounds. This tool replaced a manual spreadsheet 
                based process, streamlining workflows and reducing the risk of human error. I worked 
                across the stack using technologies like React, Python, MySQL, and Docker, and 
                participated in planning, requirement gathering, and stakeholder communication. The 
                application was successfully deployed during my final week on the team. In another 
                project, I developed a new feature for an internal tool that's part of the CI/CD 
                pipeline. This feature allowed developers to easily redirect their remote test 
                environments from the development database to the staging database, supporting 
                production like testing workflows. Through this work, I gained hands-on experience 
                with AWS services including CodePipeline and Elastic Container Service, as well as 
                the Python AWS SDK, boto3. Beyond individual work, I also participated in multiple 
                team hackathons, collaborating closely with engineers across the team to scope, 
                develop, and deliver new features under tight timelines. These experiences 
                strengthened my ability to contribute effectively to both independent and team-based 
                development projects.
            </Typography>
            <Stack direction="row" 
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Typography level="body-sm" color="primary" variant="soft" 
                   sx={{ 
                    display: 'flex', 
                    padding: '5px',
                    alignItems: 'center',
                    marginTop: '5px'
                  }}>
                    <span style={{fontWeight: "bold"}}>Skills</span>
                    : Full Stack Development • React • Python • Flask • MySQL • AWS • Docker • Boto3 
                    • CI/CD • Stakeholder Communication
                </Typography>
                <PDFModal 
                    pdfUrl="/pdfs/alnylam-poster.pdf" 
                    projectTitle="AI-Ready: Knowledge Extraction from Archival Lab Notebooks"
                    slides={false}
                />
            </Stack>
            <hr />
            <Stack direction="row"   sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography level="title-lg">Liberty Mutual - Solaria Innovation Labs</Typography>
                <Typography level="body-md">January 2023 - June 2023</Typography>
            </Stack>
            <Typography>Full Stack Developing Co-op</Typography>
            <Typography>
                Over the course of six months, I collaborated with cross-functional teams including
                design, product and my own team. My work spanned both frontend and backend 
                development, and I grew tremendously in both my technical skills and confidence. I 
                created reusable components, responsive pages, dynamic features, and made bug fixes. 
                I worked closely with the design team to bring their Figma prototypes to life, 
                ensuring that the layout were responsive on all devices. I used Jest for snapshot 
                testing, verifying that components rendered correctly and that key UI elements 
                behaved correctly. One of my larger frontend contributions was building two 
                standalone pages for the Ting device. On the backend, I worked with Strapi, and 
                GraphQL to build, test and connect APIs. I created new collection types and wrote 
                mutation queries to interact with them, using GraphQL Playground to validate the 
                data. I also used pgAdmin to inspect database tables and debug backend issues. One
                of my favorite projects was creating a new FAQ collection type. I used pgAdmin to
                ensure all the relationships were correctly configured, and then built frontend 
                display using LMDS accordion components with custom styling in SCSS. It was 
                especially rewarding to hear in a business results meeting that this components had 
                over 400 user interaction. Throughout this co-op, I strengthened my full stack 
                development skills, deepened my interest in backend work, and learned how to 
                collaborate effectively and implementing feedback from peers, this experience gave 
                me both technical growth and real-world exposure to professional software 
                development.
            </Typography>
            <Typography level="body-sm" color="primary" variant="soft" 
                   sx={{ 
                    display: 'inline-flex', 
                    padding: '5px',
                    alignItems: 'center',
                    marginTop: '5px'
                  }}>
                    <span style={{fontWeight: "bold"}}>Skills</span>
                    : React • Javascript • GraphQL • PostgreSQL • Figma • Jest • Cross-functional 
                    Collaboration
                </Typography>
            <hr />
            <Stack direction="row"   sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography level="title-lg">Code Wiz</Typography>
                <Typography level="body-md">May 2022 - August 2022</Typography>
            </Stack>
            <Typography>Coding Coach</Typography>
            <Typography>
                I taught programming to students aged 7-15 in small group settings. I led classes 
                ranging from two to fifteen students, covering a variety of topics including 
                Scratch, Introduction to Java, and Python Game Design. My role involved creating and
                adapting lesson plans, explaining core programming concepts like variables, if 
                statements, loops, and functions, as well as more advanced topics such as nested
                loops and arrays. I worked to break down complex ideas into age-appropriate language
                 and provided personalized feedback to help students grow their problem-solving and 
                coding skills. This experience strengthened my ability to communicate technical 
                concepts clearly, think on my feet, and foster curiosity and confidence in young
                students.
            </Typography>
            <Typography level="body-sm" color="primary" variant="soft" 
                   sx={{ 
                    display: 'inline-flex', 
                    padding: '5px',
                    alignItems: 'center',
                    marginTop: '5px'
                  }}>
                    <span style={{fontWeight: "bold"}}>Skills</span>
                    :  Leadership • Management • Communication • Technical Instruction
                </Typography>
        </div>
    );
}

export default Experience;