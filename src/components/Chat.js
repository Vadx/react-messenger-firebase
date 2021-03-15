import React, { useContext, useState } from 'react'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar, Box, Button, Container, Grid, Card, CardHeader, CardContent, Typography, Paper } from '@material-ui/core'
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
    <Container maxWidth='lm'>
      <Grid
        container
        spacing={3}
        style={{ height: window.innerHeight - 40, marginTop: 20 }}
      >
        <Grid item xs={8} >
          <Paper style={{ height: '80vh', overflowY: 'auto' }}>
            {messages.map(message =>
              <Card
                style={{
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
                />
                <CardContent>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {message.text}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            rowsMax={2}
            variant='outlined'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Box pt={1}>
            <Button onClick={sendMessage} variant='contained' color='primary'>Send</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
