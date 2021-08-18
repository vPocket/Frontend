import React from 'react';

function Landing() {
  return (
    <div>
      <div>
        <div>
          <p>vPocket.com</p>
          <button class="btn-green">Login</button>
        </div>

        <div>
          <h2>Welcome to vPocket.com</h2>
          <p>
            The most intelligent way to create your own stack of vocabulary.
          </p>
          <p>
            vPocket.com is not a extension Lorem ipsum dolor sit amet,
            consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
          <button class="btn-green">Add to your Browser</button>
        </div>

        <div>
          <img alt="logo" />
        </div>
      </div>

      <div>
        <div>
          <h2>Stuck at some word?</h2>

          <div>
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
            <button class="btn-green">Explore Dictionary</button>
          </div>
        </div>

        <div>
          <h2>Some words can be tricky!</h2>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem
            </p>
            <img alt="logo" />
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua.
              <br></br>Lorem ipsum dolor sit amet, consectetur adipisci elit,
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
            <button class="btn-green">Find your Key</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2>Last, but not least</h2>
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
        <button class="btn-green">Get started!</button>
        <div>{/* include logos from social media */}</div>
      </div>
    </div>
  );
}

export default Landing;
