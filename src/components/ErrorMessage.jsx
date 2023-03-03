import React from 'react'

const ErrorMessage = ({ msg, bgColor }) => {
    let styles = {
        padding: "0.4rem",
        paddingTop: "20px",
        marginTop: "7rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
        borderRadius: "10px",
    };

    return (
        <div style={styles}>
            <p dangerouslySetInnerHTML={{ __html: msg }} />
        </div>
    )
}

export default ErrorMessage