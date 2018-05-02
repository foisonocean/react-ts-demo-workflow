import styled from 'styled-components'
import * as React from 'react'

const LovelyContainer = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: palevioletred;
    font-size: 22px;
    overflow: hidden;
`

export const HelloWorld: React.SFC<{}> = () => <LovelyContainer>hello, world</LovelyContainer>
