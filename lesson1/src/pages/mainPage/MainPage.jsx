import React from 'react';
import About from "../../components/About/About";
import Title from "../../components/title/Title";

function MainPage() {
    return (
        <div>
            <About info={{title: "Some Title", body:"Some body"}} />
            <Title text="Hello world" color="red"  />
        </div>
    );
}

export default MainPage;