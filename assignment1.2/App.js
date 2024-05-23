
import ScoreKeeper from "./scorekeeper";
import UsernameInput from "./usernameinput";
import ShowHideText from "./togglemessage";
import ProfileUpdater from "./profileupdater";
import TaskManager from "./taskmanager";
function App() {
  return (
    <div className="App">
    <ScoreKeeper/>
    <UsernameInput/>
    <ShowHideText/>
    <ProfileUpdater/>
    <TaskManager/>
    </div>
  );
}

export default App;
