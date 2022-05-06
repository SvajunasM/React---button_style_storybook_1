import styled from "styled-components";

export const Block=styled.div`
    background: ${props => props.style.background};
    border-radius: 0.25rem;
    border: none;
    color: ${props => props.style.color};
    margin: 0.125rem;
    padding: 1rem;
`