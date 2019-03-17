import React from 'react';

export const HeaderLeft = () => {
    return(<svg xmlns="http://www.w3.org/2000/svg" style={{height:22, width:'100%',background:'white'}}>
        <title>Macintosh Header</title>
        <rect x="50" y="20" width="900" height="2" />
        <rect y="20" width="24" height="2" />
        <rect x="50" y="16" width="900" height="2" />
        <rect y="16" width="24" height="2" />
        <rect x="50" y="12" width="900" height="2" />
        <rect y="12" width="24" height="2" />
        <rect x="50" y="8" width="900" height="2" />
        <rect y="8" width="24" height="2" />
        <rect x="50" y="4" width="900" height="2" />
        <rect y="4" width="24" height="2" />
        <rect x="50" width="900" height="2" />
        <rect width="24" height="2" />
        <path d="M14,0
        V22H36V0ZM34,
        20H16V2H34Z" transform="translate(12 0)" />
    </svg>);
}

export const HeaderRight = () => {
    return(<svg xmlns="http://www.w3.org/2000/svg"  style={{height:22,width:'100%', background:'white'}}>
        <title>Macintosh Header</title>
        <rect y="20" width="100%" height="2" />
        <rect y="16" width="100%" height="2" />
        <rect y="12" width="100%" height="2" />
        <rect y="8" width="100%" height="2" />
        <rect y="4" width="100%" height="2" />
        <rect y="0" width="100%" height="2" />
    </svg>);
}

export const ArrowIcon = () => {
    return(
        <svg id="Camada_1"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 13">
            <title>Arrow Icon</title>
            <g id="Arrow_Icon" data-name="Arrow Icon">
                <rect x="5" y="10" width="1" height="1"/>
                <polygon points="3 3 0 3 -0.08 3 -0.08 4 -0.08 9 -0.08 10 0 10 3 10 3 13 4 13 4 12 5 12 5 11 4 11 4 10 4 9 3 9 0 9 0 4 3 4 4 4 4 3 4 2 5 2 5 1 4 1 4 0 3 0 3 3"/>
                <rect x="6" y="9" width="1" height="1"/>
                <rect x="7" y="8" width="1" height="1"/>
                <rect x="8" y="7" width="1" height="1"/>
                <rect x="9" y="6" width="1" height="1"/>
                <rect x="8" y="5" width="1" height="1"/>
                <rect x="7" y="4" width="1" height="1"/>
                <rect x="6" y="3" width="1" height="1"/>
                <rect x="5" y="2" width="1" height="1"/>
            </g>
        </svg>
    )
}

export const ResizeIcon = () => {
    return (
        <svg id="Camada_1" data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10.99">
            <title>Resize Icon</title>
            <path id="Resize_Icon" data-name="Resize Icon" d="M2,7v4h9V2H7V0H0V7ZM6,6H1V1H6ZM7,3h3v7H3V7H7ZM3,10m7-7"/>
        </svg>
    )
}