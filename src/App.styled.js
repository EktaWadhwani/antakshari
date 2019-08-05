import styled from 'styled-components';

export const Button = styled.button`
    padding: 1em;
    background-color: green;
`;

const getImage = ({ show, imageNo }) => {
    if (show) {
        if (Number(imageNo) === 1) {
            return "url('/media/prop1.png') no-repeat";
        }
        if (Number(imageNo) === 2) {
            return "url('/media/prop2.png') no-repeat";
        }
        if (Number(imageNo) === 3) {
            return "url('/media/prop3.png') no-repeat";
        }
        if (Number(imageNo) === 4) {
            return "url('/media/prop4.png') no-repeat";
        }
        if (Number(imageNo) === 5) {
            return "url('/media/prop5.png') no-repeat";
        }
        if (Number(imageNo) === 6) {
            return "url('/media/prop6.png') no-repeat";
        }
        if (Number(imageNo) === 7) {
            return "url('/media/prop7.png') no-repeat";
        }
        if (Number(imageNo) === 8) {
            return "url('/media/prop8.png') no-repeat";
        }
        if (Number(imageNo) === 9) {
            return "url('/media/prop9.png') no-repeat";
        }
    }

    return 'lightblue';
};

export const Wrapper = styled.div`
    position: relative;
    text-align: center;
    /* background: lightblue; */
    background: url('/media/balloon.png') no-repeat;
    width: 100%;
    height: 100%;
    min-height: 600px;
    h1 {
        color: blue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .red {
        color: red;
    }

    img {
        width: 400px;
        height: 400px;
        border-radius: 50%;
    }

    button {
        min-width: 0;
    }
`;

export const TeamStyled = styled.div`
    background-color: lightcyan;
    position: relative;
    margin-top: -4.5em;
    box-shadow: 3px 4px 10px -8px rgba(0, 0, 0, 0.29);
    padding-bottom: 1em;

    h3,
    p {
        margin: 0;
    }
    p {
        font-weight: bold;
    }

    .timer {
        margin: auto;
        color: red;
        font-weight: bold;
        background-color: yellow;
        border: 1px solid red;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        text-align: center;
        padding: 15px;
    }
`;

export const Box = styled.div`
    margin: auto;
    vertical-align: middle;
    border-radius: 4px;
    width: 150px;
    height: 150px;
    border: 1px solid gray;
    /* padding: 2em; */
    font-weight: bold;
    background: ${getImage};
    background-size: 150px 150px;
    margin-bottom: 1em;
    font-size: 2em;
`;

export const BigBox = styled(Box)`
    width: 250px;
    background: ${(props) => (props.show ? 'red' : 'lightblue')};
    color: ${(props) => (props.show ? 'white' : 'black')};
    padding: 1em;

    text-align: ${(props) => (props.show ? 'left' : 'center')};
    font-size: 1.2em;
`;

export const TransitonWrapper = styled.div`
    animation: moveFromBottom 0.6s ease both, opacity 0.6s linear;

    @keyframes moveFromBottom {
        from {
            transform: translateY(100%);
        }
    }
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const ButtonWrapper = styled.div`
    margin: 1em 1em 1em 0;
    float: ${(props) => (props.right ? 'right' : 'left')};
`;
