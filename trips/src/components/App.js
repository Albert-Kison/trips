import Header from "./Header";
import ResultsMain from "./Main/ResultsMain";
import WelcomeMain from "./Main/WelcomeMain";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={WelcomeMain} />
                    <Route path="/results" exact component={ResultsMain} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;