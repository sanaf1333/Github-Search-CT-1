import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const CardLayout = (props) => {
    console.log(props.followers);
    const name=props.name ;
    const followers=props.followers;
    const following=props.following;
    const avatar_url=props.avatar_url;
    const email=props.email;
    const profile=props.html_url;
    return ( 
        <div>
        
        <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img alt="example" src={avatar_url} />}
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
 
export default CardLayout;
