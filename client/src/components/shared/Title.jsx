import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title = ({
    title = "Connect.io",
    description = "This is a chat app called connect.io"
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default Title