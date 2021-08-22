import Reading from "./Progress/Reading";
import Vocablary from "./Progress/Vocablary";
import Challenges from "./Progress/Challenges";

function Progress(){
    return(
        <div>
        <Reading/>
        <Vocablary/>
        <Challenges/>
        </div>
    );
}

export default Progress;