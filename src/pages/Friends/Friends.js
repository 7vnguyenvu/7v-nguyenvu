import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Friends.module.scss';
const cx = classNames.bind(styles);

function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/api/searches')
            .then((res) => res.json())
            .then((data) => {
                setFriends(data.slice(1));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={cx('wraper')}>
            <header>Bạn bè</header>
            <div className={cx('content')}>
                {friends.map((friend) => (
                    <h1 key={friend._id}>{friend.full_name}</h1>
                ))}
            </div>

            <div style={{ width: 50, height: 50, background: "url('Loading.gif') no-repeat center / 101% 101%" }}></div>
        </div>
    );
}

export default Friends;
