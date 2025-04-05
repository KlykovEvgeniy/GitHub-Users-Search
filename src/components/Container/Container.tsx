import React from "react";
import './Container.styled.scss'

interface ContainerProps {
    children: React.ReactNode
}

export const Container = function ({children}: ContainerProps) {
    return <div className="container">{children}</div>
}