import React from 'react';
import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

const MakeAPostButton = () => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button>
                Make A Post
            </Button>
        )
    )
}

export default MakeAPostButton;