import React from "react";

function StateBox({ answers }) {
    return (
        <div>
            {answers?.map((e, i) => (
                <span className="box" key={i}>
                    {e == 0
                        ? "A"
                        : e == 1
                        ? "B"
                        : e == 2
                        ? "C"
                        : e == 3
                        ? "D"
                        : null}
                </span>
            ))}
        </div>
    );
}

StateBox.propTypes = {};

export default StateBox;
