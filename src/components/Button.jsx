// import "./Button.css"
import styled from "styled-components"

const Button = styled.button`
    margin-left: 20px;
    background-color: ${({theme}) => theme === "light" ? "orange" : "green"};
    color: ${({theme}) => (theme === "light" ? "orange" : "green")}
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    &:hover {
        color: orange;
        background-color: black;
    }
`

// export const Button = ({children}) => {
//     return(
//         <button className="mybutton">{children}</button>
//     )
// }

export {Button}