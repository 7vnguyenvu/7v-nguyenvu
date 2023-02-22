import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();
    const user_null = {
        user_account: 'Undefine!',
        first_name: 'Undefine!',
        last_name: 'Undefine',
        full_name: 'Undefine!',
        nick_name: 'Undefine!',
        birthday: 'Undefine!',
        description: 'Undefine!',
        image: 'images/friends/default.jpg',
        cover_image: 'images/cover_images/default.png',
        number_phone: 'Undefine!',
        facebook_url: 'https://www.facebook.com/#Undefine!',
        tiktok_url: 'https://www.tiktok.com/#Undefine!',
        youtube_url: 'https://www.youtube.com/#Undefine!',
    };

    const [user, setUser] = useState(user_null);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        fetchApi(location.pathname.slice(2));
    }, [location]);

    const fetchApi = (nickname) => {
        fetch(`/api/searches?nick_name=${nickname}`)
            .then((res) => res.json())
            .then((data) => data && setUser(data))
            .catch((err) => console.log(err));
    };
    return (
        <div className={cx('wraper')}>
            <header>
                <div
                    className={cx('cover-img')}
                    style={{ background: `url(${user.cover_image}) no-repeat center / 100% 100%` }}
                >
                    <div className={cx('link-custom')}>
                        {user.facebook_url !== '#' && (
                            <a
                                href={user.facebook_url}
                                style={{ background: 'url("logos/logo_fb.png") no-repeat center / 100% 100%' }}
                                target="_blank"
                                rel="noreferrer"
                            ></a>
                        )}
                        {user.tiktok_url !== '#' && (
                            <a
                                href={user.tiktok_url}
                                style={{ background: 'url("logos/logo_tik.png") no-repeat center / 100% 100%' }}
                                target="_blank"
                                rel="noreferrer"
                            ></a>
                        )}
                        {user.youtube_url !== '#' && (
                            <a
                                href={user.youtube_url}
                                style={{ background: 'url("logos/logo_yt.png") no-repeat center / 100% 100%' }}
                                target="_blank"
                                rel="noreferrer"
                            ></a>
                        )}
                    </div>
                </div>
                <div className={cx('clustom')}>
                    <div className={cx('avatar')}>
                        <div
                            className={cx('img')}
                            style={{ background: `url(${user.image}) no-repeat center / 101% 101%` }}
                        ></div>
                    </div>
                    <h1>{user.last_name}</h1>
                </div>
            </header>

            {/* ...waiting... */}
            <main>
                <div
                    style={{ width: 50, height: 50, background: "url('Loading.gif') no-repeat center / 101% 101%" }}
                ></div>
            </main>
        </div>
    );
}

export default Profile;
