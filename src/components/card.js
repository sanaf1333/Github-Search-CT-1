import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default function CardLayout (props) {
    //console.log(props.followers);
    const name=props.name ;
    const followers=props.followers;
    const following=props.following;
    const avatar_url=props.avatar_url;
    const email=props.email;
    const profile=props.html_url;
    console.log(name+followers+following+avatar_url+email+profile);
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
                profile link: {profile}
            </div>} />
        </Card>
  </div>
     );
}
 

