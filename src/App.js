import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Offer from "./Offer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Wystąpił błąd</h1>,
    children: [
      { index: true, element: <div>home</div> },
      { path: "/oferta/:id", element: <Offer /> },
      { path: "/kontakt", element: <div>kontakt!</div> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div>
      <HerosesContextProvider>
        <Search />
        <Outlet />
      <HerosesContextProvider>
    </div>
  );
}
*/

/*
w Search:
  import {redirect} from 'react-router-dom'
  const { addHero  } = useContext(HerosesContext)

 const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await searchByName(userInput);
      const usersHero = data.results[0];

      if (usersHero) {
        isDuplicate = newHeroes.find((hero) => hero.id === usersHero.id);

        if (!isDuplicate) {
          -------  setNewHeroes([...newHeroes, usersHero]); // usuwamy z kodu
          addHero(usersHero) // to dodajemy
          redirect('/heroses-list') // przenosimy usera na komponent HerosesList
        }
      }
    } catch (error) {
      console.error(error);
    }
    setUserInput("");
  };

*/

/*
w HerosesList:

const {heroses, removeHero} = useContext(HerosesContext)

<div>
 {heroses.map(hero => <div>
    <p>{hero.title}</p>
    <button onClick={() => removeHero(hero.id)}>Usuń</button>
  </div>)}
</div>

*/
