import { Link } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            {/*Link to instead of <a href> will keep the page from reloading the browser everytime a link is clicked*/}
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
