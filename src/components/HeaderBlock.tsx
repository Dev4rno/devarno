import React from "react";

interface PropTypes {
    plainText: string;
    colorText: string;
    bgText: string;
}

export const HeaderBlock: React.FC<PropTypes> = (props) => {
    return (
        <div className="title-section text-center text-sm-center">
            <h1>
                {props.plainText} <span>{props.colorText}</span>
            </h1>
            <span className="title-bg">{props.bgText}</span>
        </div>
    );
};
