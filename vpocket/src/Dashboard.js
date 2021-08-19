import Date from "./Dashboard/Date";
import Dictionary from "./Dashboard/Dictionary";
import Streak from "./Dashboard/Streak";
import Reading from "./Dashboard/Reading";
import Homework from "./Dashboard/Homework";
import Challenge from "./Dashboard/Challenge";
import Game from "./Dashboard/Game";
import Profile from "./Dashboard/Profile";

function Dashboard(){
    return(
        <div>
        <Date/>
        <Dictionary/>
        <Streak/>
        <Reading/>
        <Homework/>
        <Challenge/>
        <Game/>
        <Profile/>
        </div>
    );
}

export default Dashboard;