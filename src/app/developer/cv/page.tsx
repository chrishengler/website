import CvEntry from "@/components/cv_entry";
import { List, ListItem } from "@mui/material";

export default function Page(){
    return ( <>
            <List sx={{ padding: 2 }}>
                <ListItem>
                    <CvEntry
                        employer="Normalis"
                        position="Software Developer"
                        timePeriod="2024-present"
                        description={`Development of C++-based software on a variety of projects for external customers`}
                        keyAchievements={['Full stack C++ development of a system simulator using GLStudio']}
                    />
                </ListItem>
                <ListItem>
                    <CvEntry
                        employer="Evernest"
                        position="Senior Software Developer"
                        timePeriod="2022-2024"
                        description={`Backend Python development for a real estate CRM using Django, REST API development with Django REST Framework, cloud infrastructure with Google Cloud Platform`}
                        keyAchievements={[
                            "Implemented syncing of contacts from platform to users' Google accounts",
                            "Enabled exporting from CRM to external real estate portals via REST and OpenImmo interfaces",
                            "Improved response times of multiple API endpoints from >0.5s to <0.2s by optimising DB queries and serialisation"
                        ]}
                    />
                </ListItem>
                <ListItem>
                    <CvEntry
                        employer="SkySails Group"
                        position="Software Developer"
                        timePeriod="2019-2022"
                        description={`C++ backend software for innovative wind power systems and full stack development of ship performance optimisation software with C++/Qt`}
                        keyAchievements={[
                            "Implemented communication between system components over multiple protocols (TCP, Websocket, serial port)",
                            "Significant refactoring of classes with significant code duplication following the principle 'prefer composition over inheritance', simplifying code structure and improving readability and maintainability"
                        ]}
                    />

                </ListItem>
                <ListItem>
                    <CvEntry
                        employer="pdv Financial Software"
                        position="Software Developer"
                        timePeriod="2016-2019"
                        description={`Backend C++ development for financial trading software`}
                        keyAchievements={[
                            "Development of bespoke data integrity validation tools for customer systems",
                            "Implemented major feature allowing for received orders matching certain criteria to be quarantined for manual review"
                        ]}
                    />
                </ListItem>
                <ListItem>
                    <CvEntry
                        employer="DESY/Universität Hamburg"
                        position="PhD Student"
                        timePeriod="2011-2017"
                        description={`Thesis: Measurement of the fiducial differential Higgs cross-section with respect to pT using the diphoton decay channel at sqrt(s)=8 TeV with ATLAS (published 2017)
                Public-speaking to both expert and non-expert audiences`}
                        keyAchievements={[
                            "Measurement of cutting edge particle physics phenomena",
                            "Data-driven measurement of photon identification efficiency in the ATLAS detector using the electron extrapolation method",
                            "Presented 'Reconstruction and Identification of Electrons and Photons with the ATLAS Detector' on behalf of ATLAS Collaboration at ICNFP 2014"
                        ]}
                    />
                </ListItem>
            </List>
        </>
    )
}