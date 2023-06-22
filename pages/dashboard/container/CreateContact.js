import React from 'react'

// Components
import ContentBlock from '@/common/components/ContentBlock';
import Button from "@/common/components/Button";
import Typography from "@/common/components/Typography";

const CreateContact = () => {
    return (
        <ContentBlock sx={{ p: 2, height: "150px" }}>
            <Typography mb variant="h6" >
                Create Contact
            </Typography>
            <Typography mb variant="h6" sx={{ fontWeight: 400 }}>
                Add colleagues/individuals to your contact list
            </Typography>
            <Button>Add Contact</Button>
        </ContentBlock>
    )
}

export default CreateContact