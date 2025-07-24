import { Stack } from "@mui/joy";
import LabNotebooks from "./LabNotebook";
import CodeQuest from "./CodeQuest";
import { useState } from "react";
import CookingGame from "./CookingGame";
import Kanbas from "./Kanbas";

function Projects() {
    const [labNotebooksExpanded, setLabNotebooksExpanded] = useState<boolean>(true);
    const [codequestExpanded, setCodequestExpanded] = useState<boolean>(true);
    const [cookinggameExpanded, setCookinggameExpanded] = useState<boolean>(true);
    const [kanbasExpanded, setKanbasExpanded] = useState<boolean>(true);

    return (
        <div className="main-content">
            <Stack direction={"column"} spacing={2}>
                <Stack direction={
                        labNotebooksExpanded || codequestExpanded ? 
                        "column" : "row"} spacing={2}>
                    <LabNotebooks rowToggle={setLabNotebooksExpanded} />
                    <CodeQuest rowToggle={setCodequestExpanded} />
                </Stack>
                <Stack direction={
                        cookinggameExpanded || kanbasExpanded ? 
                        "column" : "row"} spacing={2}>
                    <CookingGame rowToggle={setCookinggameExpanded} />
                    <Kanbas rowToggle={setKanbasExpanded} />
                </Stack>
            </Stack>
        </div>
    );
}
export default Projects;