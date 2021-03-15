import React, { useContext, useState } from 'react'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar, Box, Button, Container, Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './Loader'
import firebase from 'firebase'

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Grid
        container
        justify='center'
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <Box style={{ width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto' }}>
          {messages.map(message =>
            <Card style={{
              margin: 10,
              border: user.uid === message.uid ? '1px solid green' : '1px dashed red',
              marginLeft: user.uid === message.uid ? 'auto' : '10px',
              width: 'fit-content',
              padding: 5
            }}
            >
              <CardHeader
                avatar={
                  <Avatar src={message.photoURL} />
                }
                title={message.displayName}
                // subheader={message.createdAt}
              > 
              </CardHeader>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {message.text}
                </Typography>
                {console.log(message.createdAt.seconds)}
              </CardContent>
            </Card>
          )}
        </Box>
        <Grid
          container
          direction='column'
          alignItems='flex-end'
          style={{ width: '80%' }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant='outlined'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant='contained' color='primary'>Go</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
