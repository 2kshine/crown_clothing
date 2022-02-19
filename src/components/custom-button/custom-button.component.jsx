import React  from "react";
import './custom-button.styles.scss'
//children is the value which is inbetween the tags.. <CustomButton>children></CustomButton>
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;