/*
    Twitter list for social/comedy

    Default list: https://twitter.com/i/lists/1430230272558223360
    You can make your own list if you have a twitter account
    just edit "ownerScreenName" and "id", the id will be the
    end of the link of your list for example the id to the
    default list above would be: 1430230272558223360
*/
import { Timeline } from 'react-twitter-widgets';
import './../../assets/css/Homepage/Twitter.css';


const TwitterSocial = () => {

    return (
        <div>
            <Timeline
                dataSource={{
                    sourceType: 'list',
                    ownerScreenName: "ProjectLynx_", // Your profile name
                    id: "1430230272558223360" // Your list id (see above)
                }}
                options={{
                    chrome: "noheader, nofooter",
                    theme: "dark",
                    width: "385",
                    height: "300"
                }}
            />
        </div>
    )

}

export default TwitterSocial;
