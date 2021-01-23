import React from 'react';
import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

const CreateAPoster = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button>
                Create A Poster
            </Button>
        )
    )
}

export default CreateAPoster;