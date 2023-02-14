import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`/api/searches?nick_name=${window.location.pathname.slice(2)}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className={cx('wraper')}>
            <header>
                <div
                    className={cx('cover-img')}
                    style={{ background: 'url("cover_image_2.png") no-repeat center / 100% 100%' }}
                >
                    <div className={cx('link-custom')}>
                        {user.facebook_url !== '#' && (
                            <a
                                href={user.facebook_url}
                                style={{ background: 'url("logo_fb.png") no-repeat center / 100% 100%' }}
                                target="_blank"
                                rel="noreferrer"
                            ></a>
                        )}
                        {user.tiktok_url !== '#' && (
                            <a
                                href={user.tiktok_url}
                                style={{ background: 'url("logo_tik.png") no-repeat center / 100% 100%' }}
                                target="_blank"
                                rel="noreferrer"
                            ></a>
                        )}
                        {user.youtube_url !== '#' && (
                            <a
                                href={user.youtube_url}
                                style={{ background: 'url("logo_yt.png") no-repeat center / 100% 100%' }}
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
                    <h1>{user.name}</h1>
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
