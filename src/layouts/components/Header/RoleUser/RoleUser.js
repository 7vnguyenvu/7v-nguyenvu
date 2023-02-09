import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../../config/routes';
import styles from '../Header.module.scss';
const cx = classNames.bind(styles);

function RoleUser({ onChildrentClicked }) {
    const user = {
        id: '1',
        full_name: 'Yen Ngoc',
        nickname: 'Rùa Nhi của Tôi',
        avatar: 'avatar.png',
    };

    return (
        <div>
            <header>
                <div className={cx('user')}>
                    <img src={user.avatar} alt="avatar" className={cx('user-avatar')} />
                    <div className={cx('user-body')}>
                        <h4>{user.full_name}</h4>
                        <h6>@{user.nickname}</h6>
                    </div>
                </div>
            </header>
            <main>
                <div className={cx('bulkhead')}></div>
                <Link to={`/@${user.nickname}`} className={cx('item')} onClick={() => onChildrentClicked(true)}>
                    <h5>Thông tin cá nhân</h5>
                </Link>
                <Link to={routes.blog} className={cx('item')} onClick={() => onChildrentClicked(true)}>
                    <h5>Viết Blog</h5>
                </Link>
                <div className={cx('bulkhead')}></div>
                <Link to="#" className={cx('item')} onClick={() => onChildrentClicked(true)}>
                    <h5>Đăng xuất</h5>
                </Link>
            </main>
        </div>
    );
}

export default RoleUser;
