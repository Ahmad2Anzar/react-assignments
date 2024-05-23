import Welcome  from "./welcome";
import LoginMessage from "./loginmessage";
import FruitList from "./itemlist1";
import ToggleButton from "./togglebtn";
import Greeting from "./greeting";
import ProfileCard from "./profilecard";
import Container from "./container";
import ProductList from "./productlist";
import HighlightTaskList from "./highlighttasklist";
import NestedTaskList from "./nestedtasklist";
function App() {
  return (<>
   <Welcome/>
   <LoginMessage/>
   <FruitList/>
   <ToggleButton/>
   <Greeting/>
   <ProfileCard/>
   <Container/>
   <ProductList/>
   <HighlightTaskList/>
   <NestedTaskList/>
   </>
  );
}

export default App;
