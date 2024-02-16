import {useState} from 'react'
import '../Style/Chatting.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
import { IoIosSend } from "react-icons/io";
// import Avatar from '@mui/material/Avatar';
import Button from 'react-bootstrap/Button';
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";





function Chatting() {
  let [status,setstatus]=useState(true)
  return (
    <>
      <div className='header'>
        { status ? <h4> Hiii Gautam now you online..!!! </h4>:<h4>Hiii Gautam now you offline..!!</h4>}
        <Button onClick={()=>{setstatus(!status)}}>Change Status</Button>
      </div>
      <div className='main'>
        <div className='sidebar'>
          <div><button className='user'>Ankit Singh</button></div>
          <div><button className='user'>Shubhi jain</button></div>
          <div><button className='user'>Allok sharma</button></div>
          <div><button className='user'>Priya Singh</button></div>
          <div><button className='user'>vinit bhaiya</button></div>
          <div><button className='user'>anup sharma</button></div>
          <div><button className='user'>romel bhai</button></div>
          <div><button className='user'>manish bhai</button></div>
        </div>
        <div className='body'>
          <div className='head'>
            <div className='img'></div>
            <div className='headr'>
              <p>Ankit singh <br />online</p>
              <div className='iconn'>
               < IoSearchOutline className='search' />
               <CiMenuKebab />
              </div>

            </div>
          </div>
          <div className='main1'>
            <div className='chat '>
              hiii kyse ho ankit bhai kab tak aa rahe ho
            </div>
            <div className='chat1 '>
              mast first class jaldi hi aata hu bhai 
            </div>
            <div className='chat2 '>
             or padai kysi chal rahi plecement ka kya seen hai
            </div>
            <div className='chat3 '>
              abhi to tranning chal rahi hai bhai
            </div>
            <div className='chat4 '>
              tranning complete hone ke bad hi kucha honga
            </div>
            <div className='chat5 '>
              ha lage raho tab hi kucha honga bhai
            </div>
            <div className='chat6 '>
             chalo thik hai bhai fir kal bat karte hai   byy......
            </div>
            <div className='chat7 '>
              ok byyyyyyy good night bro .....!
            </div>
          </div>
          <div className='footer'>
            <div className='input'>
              <Box className='box'
                component="form"
                sx={{
                  '& > :not(style)': { m: 0, width: '60vw' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField InputProps={{style:{borderRadius:"25px"}}} className='in'  label="type-message" variant="outlined" />
                
              </Box>
            </div>
            <div  className='send'>< IoIosSend className='icon'/> </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Chatting