import styled from "styled-components";

const LayoutStyles = styled.div`
    /* display: grid;

    grid-template-columns: [left-start] repeat(2, minmax(13rem, auto)) [left-end 
                            center-start] repeat(8, [col-start] minmax(13rem, auto) [col-end]) [center-end 
                            right-start] repeat(2, minmax(13rem, auto)) [right-end];  */

    display: grid;
    grid-template-rows: 20vh 80vh max-content 40vw min-content 40vw min-content max-content min-content;
    grid-template-columns: [left-start] minmax(6rem, 1fr) [left-end 
                            center-start] repeat(10, [col-start] minmax(min-content, 14rem) [col-end]) [center-end 
                            right-start] minmax(6rem, 1fr) [right-end]; 
`

export default LayoutStyles;