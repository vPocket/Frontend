import Date from "./Dashboard/date.js";
import Dictionary from "./Dashboard/Dictionary";
import Streak from "./Dashboard/Streak";
import Reading from "./Dashboard/Reading";
import Homework from "./Dashboard/Homework";
import Challenge from "./Dashboard/Challenge";
import Games from "./Dashboard/Game";
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
        <Games/>
        <Profile/>
        </div>
    );
}

export default Dashboard;