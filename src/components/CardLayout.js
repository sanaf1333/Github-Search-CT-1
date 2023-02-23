import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import {  Typography } from 'antd';
const {  Link } = Typography;
export default function CardLayout (props) {
    //console.log(props);
    const name=props.login;
    const followers=props.followers_url;
    const following=props.following_url;
    const avatar_url=props.avatar_url;
    const email=props.url;
    const profile=props.html_url;
    //console.log(name+followers+following+avatar_url+email+profile);
    return ( 
        <div>
         <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img alt={name} src={avatar_url} />}
        >
            <Meta title={name}
            description={<div>
                
                followers: {followers}  <br/>
                following: {following} <br/>
                email: {email} <br/>
                profile link: <Link href={profile}>{profile}</Link>
                
            </div>} />
        </Card> 
  </div>
     );
}
 

