import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link } = Typography;
import { Suspense, lazy } from "react";
const LazyImage = React.lazy(() => import("../user-card-image"));

export default function CardLayout(props) {
  const {
    login: name,
    followers_url: followers,
    following_url: following,
    avatar_url: avatar_url,
    url: email,
    html_url: profile,
  } = props;

  //console.log(name+followers+following+avatar_url+email+profile);
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <Suspense
            fallback={
              <img
                src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
                alt="dummy image"
              />
            }
          >
            <LazyImage src={avatar_url} alt={name} />
          </Suspense>
        }
      >
        <Meta
          title={name}
          description={
            <div>
              followers: {followers} <br />
              following: {following} <br />
              email: {email} <br />
              profile link: <Link target="_blank" href={profile}>{profile}</Link>
            </div>
          }
        />
      </Card>
    </div>
  );
}
