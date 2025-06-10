import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { ProjectSidebar } from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = {
    selectedProjectId: undefined,
    projects: [],
  };

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
