import React from 'react'

const FollowersCard = props => {
    return (
        <>
            <div class="card">
                <img width='200px' src={props.user.avatar_url} alt='user profile img'/>
                <div class="card-info">
                    <h3 class="name">{props.user.name}</h3>
                    <p class="username">{props.user.login}</p>
                </div>
            </div>
        </>
    )
}

export default FollowersCard;