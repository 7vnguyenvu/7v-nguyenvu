import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const fakeUsers = [
        {
            id: 0,
            full_name: 'Admin',
            name: 'Admin',
            nick_name: 'Admin',
            image: 'users/admin.png',
            description: '____',
            number_phone: '____',
            facebook_url: 'https://www.facebook.com/nguyenvu.version2319.vn',
            tiktok_url: 'https://www.tiktok.com/@_7v_52',
            youtube_url: 'https://www.youtube.com/@7vnguyenvu577',
        },
        {
            id: 1,
            full_name: 'Phạm Minh Tú',
            name: 'Minh Tú',
            nick_name: 'MinTs',
            birthday: '9/8/2002',
            description: '____',
            image: 'friends/Minh_Tu.jpg',
            number_phone: '0912327601',
            facebook_url: 'https://www.facebook.com/miinhtus.09',
            tiktok_url: 'https://www.tiktok.com/@mintts69',
            youtube_url: '#',
        },
        {
            id: 2,
            full_name: 'Trần Thị Thảo Vy',
            name: 'Thảo Vy',
            nick_name: '_',
            birthday: '3/5/2002',
            description: '____',
            number_phone: '0793923536',
            image: 'friends/Thao_Vy.jpg',
            facebook_url: 'https://www.facebook.com/iamvie0305',
            tiktok_url: 'https://www.tiktok.com/@_imv901',
            youtube_url: 'https://www.youtube.com/@thaovytranthi2956',
        },
        {
            id: 3,
            full_name: 'Đoàn Thị Yến Ngọc',
            name: 'Yen Ngoc',
            nick_name: 'Rùa Nhi',
            birthday: '12/1/2002',
            description: '____',
            number_phone: '0826631504',
            image: 'friends/Rua_Nhi.jpg',
            facebook_url: 'https://www.facebook.com/pi.ngo.169',
            tiktok_url: 'https://www.tiktok.com/@yenngoc362',
            youtube_url: '#',
        },
    ];

    const user = fakeUsers[1];

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
