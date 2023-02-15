import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Friends.module.scss';
const cx = classNames.bind(styles);

function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/api/searches')
            .then((res) => res.json())
            .then((data) => {
                setFriends(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={cx('wraper')}>
            <header>
                <h2>Bạn bè</h2>
            </header>
            <div className={cx('bulkhead')}></div>
            <div className={cx('content')}>
                {friends.map((friend, i) => (
                    <Link to={`/@${friend.nick_name}`} key={friend._id} className={cx('friend')}>
                        <div className={cx('avatar')}>
                            <div
                                className={cx('avatar-img')}
                                style={{ background: `url(${friend.image}) no-repeat center / 101% 101%` }}
                            ></div>
                        </div>
                        <main>
                            <h4 className={cx('fullname')}>{friend.last_name}</h4>
                            <h6 className={cx('birthday')}>‖ {friend.birthday}</h6>
                        </main>
                    </Link>
                ))}
                <div className={cx('friend')}>
                    <div className={cx('avatar')}>
                        <div
                            className={cx('avatar-img')}
                            style={{ background: 'url(Loading.gif) no-repeat center / 101% 101%' }}
                        ></div>
                    </div>
                    <main>
                        <h4 className={cx('fullname')}>Đang tải thêm...</h4>
                        <h6 className={cx('birthday')}>‖ ../../....</h6>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Friends;
