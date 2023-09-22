import { useAuthContext } from '@asgardeo/auth-react';
import './App.css';

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <>
      {
        state.isAuthenticated
          ? (
            <div>
              <ul>
                <li>{state.username}</li>
              </ul>

              <button onClick={() => signOut()}>Logout</button>
            </div>
          )
          : <button onClick={() => signIn()}>Login</button>
      }
    </>
  )
}

export default App
