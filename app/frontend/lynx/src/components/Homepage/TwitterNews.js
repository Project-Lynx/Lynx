/*
    Twitter list for news

    Default list: https://twitter.com/i/lists/1430053486146859046

    You can make your own list if you have a twitter account
    just edit "ownerScreenName" and "id", the id will be the
    end of the link of your list for example the id to the
    default list above would be: 1430053486146859046
*/
import { Timeline } from 'react-twitter-widgets';
import './../../assets/css/Homepage/twitter.css';

const TwitterNews = () => {
    
    return (
        <div>
            <Timeline
                dataSource={{
                    sourceType: 'list',
                    ownerScreenName: "ProjectLynx_", // Your profile name
                    id: "1430053486146859046" // Your list id (see above)
                }}
                options={{ 
                    chrome: "noheader, nofooter",
                    theme: "dark", 
                    width: "385", 
                    height: "352" 
                }}
            />
        </div>
    )

}

export default TwitterNews;