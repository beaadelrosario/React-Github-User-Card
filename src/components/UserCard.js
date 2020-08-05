import React from 'react'

const UserCard = props => {
    return (
        <>
            <div class="card">
                <h1>Welcome, {props.user.name}! </h1>
                <img width='200px' src={props.user.avatar_url} alt='user profile img'/>
                <div class="card-info">
                    <h3 class="name">Your Name: {props.user.name}</h3>
                    <p class="username">Username: {props.user.login}</p>
                    <p class="location">Location: {props.user.location}</p>
                    <p class="profile">Profile: <a href={props.user.url}>{props.user.url}</a></p>
                    <p class="followers">Followers: {props.user.followers}</p>
                    <p class="following">Following: {props.user.following}</p>
                    <p class="bio">Bio: {props.user.bio}</p>
                    <p class='repo'>Repositories: {props.user.public_repos}</p>
                </div>
            </div>
        </>
    )
}

export default UserCard;

