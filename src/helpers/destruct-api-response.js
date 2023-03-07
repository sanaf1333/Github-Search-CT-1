import extractDate from "./format-date";

export default function DestructAPIResponse(data, dropdownValue){
    let cardProps={};
    if(dropdownValue==="users"){
        cardProps = {
            login: data.login,
            followersURL: data.followers_url,
            followingURL: data.following_url,
            avatarURL: data.avatar_url,
            url: data.url,
            htmlURL: data.html_url,
          };
    }
    if(dropdownValue==="repositories"){
        cardProps = {
            fullName: data.full_name,
            createdAt: extractDate(data.created_at),
            forksCount: data.forks_count,
            language: data.language || "N/A",
            htmlURL: data.html_url,
            watchersCount: data.watchers_count,
          };
    }
    if(dropdownValue==="issues"){
        cardProps = {
            title: data.title,
            createdAt: extractDate(data.created_at),
            updatedAt: extractDate(data.updated_at),
            comments: data.comments,
            htmlURL: data.html_url,
            state: data.state,
          };
    }
    return cardProps;
}