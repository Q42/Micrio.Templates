import {Link} from "react-router-dom";

function Root() {
    const githubRoot = 'https://github.com/Q42/Micrio.Templates/tree/main/client/5.0/react';

    return (
        <>
            <main className="grid">
                <div className="col-12">
                    <h1>React examples</h1>

                    <h2>Demo</h2>
                    <span>
                        <Link to="/demo">View demo</Link> | <a href={githubRoot + "/src/examples/demo"}>View source</a>
                    </span>
                </div>
            </main>
        </>
    )
}

export default Root
