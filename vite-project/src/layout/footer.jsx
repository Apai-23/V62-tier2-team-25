// export const Footer = () => {
//   return (
//     <footer className="w-full bg-[#F0EFED] py-6 px-8 shadow-sm">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center text-center gap-4">
//         <a
//           href="https://github.com/chingu-voyages/V62-tier2-team-25"
//           className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight"
//         >
//           View Team Github Repository
//         </a>
//       </div>
//     </footer>
//   );
// };

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  const openInNewTab = () => {
    window.open(
      "https://github.com/chingu-voyages/V62-tier2-team-25",
      "_blank",
      "noreferrer",
    );
  };

  const teamMembers = [
    {
      id: 1,
      name: "Adewale Agboke",
      role: "Scrum Master",
      linkedInURL: "https://www.linkedin.com/in/adewaleagboke",
      gitHubURL: "https://github.com/Adewal246",
    },
    {
      id: 2,
      name: "Francisco Arce Aguilar",
      role: "Shadow Scrum Master / Product Owner",
      linkedInURL: "https://linkedin.com/in/francisco-arce-aguilar",
      gitHubURL: "https://github.com/Apai-23",
    },
    {
      id: 3,
      name: "Ling Dong",
      role: "UX/UI Designer",
      linkedInURL: "https://www.linkedin.com/in/ling-dong-801b131aa/",
      gitHubURL: "https://github.com/Luna4423-arch",
    },
    {
      id: 4,
      name: "Eleazer Abbey",
      role: "Developer",
      linkedInURL: "https://linkedin.com/in/eleazer-abbey",
      gitHubURL: "https://github.com/abbey-eleazer",
    },
    {
      id: 5,
      name: "Damaris Saavedra",
      role: "Developer",
      linkedInURL: "https://www.linkedin.com/in/damaris-saavedra/",
      gitHubURL: "https://github.com/damarisaavedra25",
    },
    {
      id: 6,
      name: "Jose Cruz",
      role: "Developer",
      linkedInURL: "https://www.linkedin.com/in/jose-cruz-6056322b3",
      gitHubURL: "https://github.com/cruz3196",
    },
    {
      id: 7,
      name: "Matthew Neie",
      role: "Developer",
      linkedInURL: "https://www.linkedin.com/in/matthew-neie",
      gitHubURL: "https://github.com/MatthewNeie",
    },
    {
      id: 8,
      name: "Nnaemeka Noble Nana",
      role: "Developer",
      linkedInURL: "https://www.linkedin.com/in/n-noble",
      gitHubURL: "https://github.com/Noble-Nana7",
    },
  ];

  return (
    <div className="h-auto py-12 sm:min-h-[20vh] bg-[#FBEBD7] flex flex-col items-center text-center justify-center rounded-2xl shadow-sm">
      <div
        className="mb-[30px] flex items-center text-center hover:cursor-pointer"
        onClick={openInNewTab}
      >
        <GitHubIcon />
        <p className="ml-[4px] underline">GitHub Repository</p>
      </div>
      <div className="sm:w-[800px] md:w-[800px] lg:w-[1200px] flex flex-col sm:flex-row justify-center">
        <div className="w-[300px] sm:w-[440px] md:w-[620px] lg:w-[900px] flex flex-col text-center text-[12px] lg:text-[16px]">
          <div className="underline text-[12px] lg:text-[14px] mt-[20px] sm:mt-[0px]">
            Team Members
          </div>
          <div className="team-grid mt-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-xl bg-white p-4 text-center shadow-md transition hover:bg-gray-200"
                >
                  <h3 className="mb-2 text-lg font-semibold">{member.name}</h3>

                  <p className="mb-4 text-sm text-gray-400 italic">
                    {member.role}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <LinkedInIcon
                      className="hover:cursor-pointer text-blue-400 hover:text-blue-300"
                      onClick={() => {
                        window.open(member.linkedInURL, "_blank", "noreferrer");
                      }}
                    />

                    <GitHubIcon
                      className="hover:cursor-pointer text-blue-400 hover:text-blue-300"
                      onClick={() => {
                        window.open(member.gitHubURL, "_blank", "noreferrer");
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="mr-[3vw]"></div>
    </div>
  );
};
