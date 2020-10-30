import React from 'react'
import { Container } from '../accordion/styles/accordion';

export default function Header({ bg = true, children, ...restProps }) {
return bg ? <Background {...restProps }>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
return <Container {...restProps }>{children}</Container>
}

Header.Logo = function HeaderLogo({})