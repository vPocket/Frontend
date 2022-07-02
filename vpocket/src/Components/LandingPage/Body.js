import React,{Fragment} from 'react';
import Button from '../UI/Button';
import '../styles/landingpage.css';
import ReactDom from 'react-dom';


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
    <>
      {ReactDom.createPortal(<h1 class="portal-word">No more googling to get meaning</h1>, document.getElementById('background-text1'))}
      {ReactDom.createPortal(<h1 class="portal-word">No more overlook for uncommon words</h1>, document.getElementById('background-text2'))}
      {ReactDom.createPortal(<h1 class="portal-word">No more bored learning methods!!</h1>, document.getElementById('background-text3'))}

      <div class="two-partition">

        <div>
          <h1>Welcome to vPocket.com</h1>
          <h2 class="my-6">
            The most intelligent way to create your own stack of vocabulary.
          </h2>
          <p class="my-14">
            vPocket.com is not just a extension, it provide a platform
            to learn, remember and frame a wordby getting its meaning
            which comes from collection of world largest and smartest dictonary
            with an adaptive learning game help you to master words out of your pocket.
            <br />
            <br />
            So, start filling your pocket.
          </p>

          <Button class="btn-green" type="" onClick={addToBrowserHander}>Add to your Browser</Button>
        </div>
        <div class="flex items-center justify-end">
          <span class="vdo-box">
            <img alt="logo" />
          </span>
        </div>


      </div>



      <h2 class="text-center my-20">Stuck at some word out of your vocabulary?</h2>
      <div class="two-partition">

        <div class="flex items-center justify-start">
          <span class="vdo-box">
            <img alt="logo" />
          </span>
        </div>

        <div>
          <p class="my-14">
            We all are humans, not a machine. Our brain will stuck at words which are out of box for our brain.
            Here we need a stack of good vocablary having a meaningful example of each word for better grasp on that and prevent to stuck next time...

            <br />
            <br />
            <br />
            vPocket have its own smart dictonary which is a combination of world largest and refined dicticnory which not only provide you a meaning also teach pronounciation of word.
          </p>
          <Button class="btn-green my-10 mx-52" type="" onClick={exploreDictHander}>Explore Dictionary</Button>
        </div>

      </div>


      <h2 class="my-20 mx-36">Some words can be tricky to memorise!</h2>

      <div class="two-partition">

        <div>
          <p>
            Reading some blog, article or a book and found a word which you have seen before somewhere and feels ‘Deja vu’ with meaning, trying to remembering the meaning but found nothing....
          </p>
          <div class="flex items-center justify-start">
            <span class="vdo-box my-10">
              <img alt="logo" />
            </span>
          </div>

        </div>

        <div>
          <p class="my-10">
            What’s the problem?
            <br /><br />
            vPocket have a solution for your problem, by using machine-learing vPocket helps you to not only provide the exact meaning, it also provide you the synonymy and antonym to create a bunch of keys related to your word.
            <br /><br />
            Why?
            <br /><br />
            Key, is the solution to open the lock of your brain running behind to get the single meaning of word.You have bunch of similar and disimilar easy words helps you to reachout your goal.
            <br /><br />
            Cool!!
          </p>
          <Button class="btn-green my-10 mx-56" type="" onClick={findKeyHander}>Find your Key</Button>
        </div>

      </div>

      <h2 class="text-center my-20">Bored of old school method of learning things?</h2>

      <div class="two-partition">

        <div class="flex items-center justify-start">
          <span class="vdo-box my-10">
            <img alt="logo" />
          </span>
        </div>

        <div>
          <p class="my-10">
          Don’t you think, boring method of learing is a great barrier in path of developing skills?That’s why, we introduce a method of learning used for toddlers, to increase a productivity of learning in short span of time.
          <br />
          <br />
          Why’s  that?
          <br />
          <br />
          Games!!
          <br />
          <br />
          Exactly, games helps to keep involve ourse Exactly, games helps to keep involve ourselves in learning and provide a push to our goals which are levels of learning and also earn ranks for completing your stack levels of vocab.
          </p>

          <Button class="btn-green my-10 mx-60" type="" onClick={playGameHander}>Play Now!!</Button>
        </div>

      </div>


      <h2 class="mx-36">Want a brushup of vocab?</h2>

      <div class="two-partition">
        <div>
          <p class="my-10">
          vPocket provides you a daily local challenges,  vPocket provides you a daily local challenges, which brushup your
          vobalary pocket helps to build a strong stack of words, i.e. no chance of forgetting words and loosing a word from your vocab.
          </p>

          <Button class="btn-green my-10 mx-40" type="" onClick={dareToChallengeHander}>Dare to complete challenge?</Button>
        </div>
        <div>
          <p class="my-24">
          Join weekly global contest, where you can play with your friends and peoples like you, to earn global ranks and get to know your height of stack by using your shelves of pocket.
          <br />
          Begin your Journey today!!
          </p>
        </div>

      </div>
        
      <div class="grid grid-cols-5 gap-8 mx-32 my-10 p-4">
        <div class="col-span-1 m-6">
          <h1 class="text-7xl text-gray-700">Last, but not least</h1>
        </div>
        <div class="col-span-2 mt-5">
          <p>
          We are going to start learing english for our premium users, any user feels himself behind in a journey of learning global language English, 
          </p>
        </div>
        <div class="col-span-2 mt-24">
          <p>
          The program is just for you, where you start from a very beginning level and with patience and time you will become master in speaking and writing your own words.
          </p>
        </div>
      </div>

      <div class="flex items-align justify-center my-20">
        <Button class="btn-green" type="" onClick={grabSeatHander}>Get started!</Button>
      </div>

    </>
  );
}

export default Body;
