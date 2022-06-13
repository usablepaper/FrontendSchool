function App() {
    // const Test = <h1>hello 1</h1>;
    // console.log(Test);
    function Test(props) {
        console.log(props);
        return <h1>hello Test</h1>;
    }
    return (
        <div className="App">
            {[
                <h1 key="1">hello 1</h1>,
                <h1 key="2">hello 2</h1>,
                <h1 key="3">hello 3</h1>,
                <h1 key="4">hello 4</h1>,
                <h1 key="5">hello 5</h1>,
                <Test key="6" a="10" b="10" c="30">
                    <h1 key="1">hellnnpmo 1</h1>
                    <h1 key="2">hello 2</h1>
                    <h1 key="3">hello 3</h1>
                </Test>,
            ]}
        </div>
    );
}

export default App;
