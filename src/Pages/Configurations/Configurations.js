import React, {useEffect} from "react";

function Configurations() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className="configurations">
            <h1>Configurations</h1>
        </div>
    )
}

export default Configurations