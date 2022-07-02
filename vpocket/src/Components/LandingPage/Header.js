import Button from '../UI/Button';

const LoginHandler=(event)=>{
  return;
}

function Header() {
  return (
    <div class="mx-12 my-8">
      <div class="flex flex-row md:flex-row flex-nowrap">
        <div class="flex-auto">
          <h2 class="font-extrabold">vPocket.com</h2>
        </div>
        <div>
          <Button class="btn-green" type="" onClick={LoginHandler}>Login</Button>
        </div> 
      </div>
    </div>
    
  );
}

export default Header;
