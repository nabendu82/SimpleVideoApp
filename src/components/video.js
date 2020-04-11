import React, { useEffect } from 'react'
import TwilioVideo from "twilio-video"

const Video = ({ token }) => {
    useEffect(() => {
        TwilioVideo.connect(token, { video: true, audio: true, name: "SVA" }).then(
            result => {
                console.log("Successfully joined room", result);
            })

    },[token])

    return (
        <div>
            Video
        </div>
    )
}

export default Video;
