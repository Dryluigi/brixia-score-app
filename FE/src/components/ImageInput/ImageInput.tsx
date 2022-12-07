import { TextField, Box, Button } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

interface ImageInputProps {
    onFileChange?: (fileSrc: string) => void;
}

function ImageInput(props: ImageInputProps) {
    const [imageFile, setImageFile] = useState<FileList | null>(null);
    const submitDisabled = imageFile === null;

    const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        setImageFile(files);

        if (props.onFileChange) {
            if (files) {
                const url = URL.createObjectURL(files[0]);
                props.onFileChange(url);
            }
        }
    }

    const submitHandler = () => {
        console.log(imageFile);
    }


    return (
        <Box>
            <TextField
                type="file"
                name="brixia-image"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                onChange={fileChangeHandler}
            />
            <Button
                variant="contained"
                disabled={submitDisabled}
                onClick={submitHandler}
            >
                Submit
            </Button>
        </Box>
    )
}

export default ImageInput