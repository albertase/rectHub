import React from 'react'
import Box from '../../Base/box'
import { P } from '../../Base/text'
import { Button } from '../../Base/button'

const Join = () => {
  return (
    <div>
        <Box bg="#02052F" margin="0px 12%" pad="30px" align="center" join>
            <P sec color="white" fs="29px" pad="20px 0" width="100%" margin="0 auto" join><b>Join companies leveraging our data teams today and bring your product to life.</b></P>
            <a href="https://calendly.com/elishatofunmi" target="_blank" rel="noreferrer"><Button primary>Talk to us</Button></a>
        </Box>
    </div>
  )
}

export default Join