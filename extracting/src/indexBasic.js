import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
    return (
        <header className="App-header">
            {props.text}
        </header>
    );
}

const Main = (props) => {
    return (
        <main className="App-main">
            <div className="App-sidebar">
                {props.texts.sidebar}
            </div>
            <div className="App-content">
                {props.texts.content}
            </div>
        </main>
    );
}

const Footer = (props) => {
    return (
        <footer className="App-footer">
            {props.texts.text} {props.texts.year}
        </footer>
    );
}



function App() {

    const componentTexts = {
        header: "Header",
        main: {
            sidebar: "sidebar",
            content: "Content",
        },
        footer: {
            text: "Footer",
            year: "2019"
        }
    }

    return (
        <div className="App">
            <Header text={componentTexts.header}/>
            <Main texts={componentTexts.main} />
            <Footer texts={componentTexts.footer} />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
