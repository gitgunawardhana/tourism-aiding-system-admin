import React, {useEffect} from "react";

function Home() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className="home">
            <h1>Home</h1>

        </div>
    )
}

export default Home