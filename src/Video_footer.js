import React from 'react'
import "./Video_footer.css"
import Ticker from 'react-ticker'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
function Video_footer({channel,description,song}) {
    return (
        <div className="videoFooter">
            <div className="footer_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="footer_ticker">
                    <MusicNoteIcon className="footer_icon"/>
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>

            </div>     
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt="" />
        </div>

        
    )
}

export default Video_footer
