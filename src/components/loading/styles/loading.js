import styled, { createGlobalStyle } from 'styled-components/macro'


export const LockBody = createGlobalStyle`
body {
    oveflow: hidden;
}
`

export const ReleaseBody = createGlobalStyle`
body {
    overflow: visible;
}
`

export const Sppinner = styled.div`
position: fixed;
width: %100;
height: %100;
background-color: black;
`