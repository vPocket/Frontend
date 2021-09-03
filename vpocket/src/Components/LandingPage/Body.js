import React from 'react';
import Button from '../UI/Button';


function Body() {
  const addToBrowserHander=(event)=>{
    return;
  }
  const exploreDictHander=(event)=>{
    return;
  }
  const findKeyHander=(event)=>{
    return;
  }
  const playGameHander=(event)=>{
    return;
  }
  const dareToChallengeHander=(event)=>{
    return;
  }
  const grabSeatHander=(event)=>{
    return;
  }

  return (
    <div>
      <div class="two-partition">

        <div>
          <h1>Welcome to vPocket.com</h1>
          <h2>
            The most intelligent way to create your own stack of vocabulary.
          </h2>
          <p>
            vPocket.com is not a extension estas ocupada mucho Lorem ipsum dolor sit amet,
            consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
          <Button class="btn-green" type="" onClick={addToBrowserHander}>Add to your Browser</Button>
        </div>

        <div class="vdo-box">
          <img alt="logo" />
        </div>

      </div>

  

      <h2>Stuck at some word?</h2>
        <div class="two-partition">

          <div class="vdo-box">
            <img alt="logo" />
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Button class="btn-green" type="" onClick={exploreDictHander}>Explore Dictionary</Button>
          </div>

        </div>


        <h2>Some words can be tricky!</h2>

        <div class="two-partition">
          
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem
            </p>
            <div class="vdo-box">
              <img alt="logo" />
            </div>
            
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua.
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipisci elit,
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
            <Button class="btn-green" type="" onClick={findKeyHander}>Find your Key</Button>
          </div>

        </div>

      <h2>Bored of old school method of learning things?</h2>

      <div class="two-partition">

        
        <div>
          <img class="vdo-box" alt="logo"/>
        </div>

        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
          </p>

          <Button class="btn-green" type="" onClick={playGameHander}>Play Now!</Button>
        </div>

      </div>

      <h2>Want a brushup of vocab?</h2>

      <div class="two-partition">
      
        
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit</p>

          <Button class="btn-green" type="" onClick={dareToChallengeHander}>Dare to complete challenge?</Button>

        </div>
        
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit
          </p>
        </div>

      </div>

      <div class="two-partition">
        <div>
          <h1>Last, but not least</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <Button class="btn-green" type="" onClick={grabSeatHander}>Get started!</Button>

    </div>
  );
}

export default Body;
