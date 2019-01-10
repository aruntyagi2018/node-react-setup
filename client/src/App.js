import React from 'react';
import ReactDOM from 'react-dom';
import TestComp from './components/testComponent';

const App = () => {
return(
    <div>
        <TestComp />
    </div>
);
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));