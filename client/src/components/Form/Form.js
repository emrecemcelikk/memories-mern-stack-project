import React,{useState} from 'react';

import { TextField,Button,Typography,Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './style';

const Form =()=>{
    const [postData,setPostData] = useState({creator:'',title:'',message:'',tags:'',selecetedFile:''})
    const classes= useStyles();
    const handleSubmit =()=>{

    }
    
    const clear =()=>{

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Memory</Typography>
                <TextField name="creator" variant="outlined"
                label="Creator" fullWidth value={postData.creator}
                onChange={(e)=> setPostData({creator: e.target.value})}/>
                <TextField name="title" variant="outlined"
                label="Title" fullWidth value={postData.title}
                onChange={(e)=> setPostData({title: e.target.value})}/>
                <TextField name="message" variant="outlined"
                label="Message" fullWidth value={postData.message}
                onChange={(e)=> setPostData({message: e.target.value})}/>
                <TextField name="tags" variant="outlined"
                label="Tags" fullWidth value={postData.tags}
                onChange={(e)=> setPostData({tags: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,selecetedFile: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;