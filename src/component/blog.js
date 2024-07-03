import React from 'react';
import Card from 'react-bootstrap/Card'
import GoodreadsBookshelf from "react-goodreads-shelf";

const stravaWidget = `<iframe height='160' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/76050644/activity-summary/3980a9962055399838958fe8cc2af66ba05a8c80'></iframe>`
const stravaWidget2 = `<iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/76050644/latest-rides/3980a9962055399838958fe8cc2af66ba05a8c80'></iframe>`
const imdbWidget = `<iframe height='160' width='300' frameborder='0' allowtransparency='true' scrolling='yes' src='https://www.imdb.com/user/ur178165761/ratings/?ref_=ext_shr_lnk&view=grid'></iframe>`

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='page'>
                <div className='h1Wrapper'>
                    <h1 className='typeWriter'>Blog</h1>
                </div>

                <div className='goodreads'>
                    <h3>Recent Reads</h3>
                    <GoodreadsBookshelf 
                        userId="67403431" 
                        sort="date_added" 
                        limit={10}
                        width={100} 
                        displayOptions={{
                            hideBackgroundImages: undefined,
                            hideDetails: {
                              subtitle: true,
                              author: true,
                              title: true
                            }
                          }}
                    />
                </div>

                <div className='strava'>
                    <h3>Recent Runs</h3>
                    <div className='stravaWidget' dangerouslySetInnerHTML={{__html: stravaWidget}} />
                    <div className='stravaWidget' dangerouslySetInnerHTML={{__html: stravaWidget2}} />
                </div>

                {/* <div className='imdb'>
                    <h3>Recent Watches</h3>
                    <div dangerouslySetInnerHTML={{__html: imdbWidget}} />
                </div> */}
                <Card.Footer className="text-muted footer">Ali Qasimi</Card.Footer>
            </div>
        )
    }
}

export default Blog;