import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wraper')}>
            <h2>Thông tin cá nhân</h2>
        </div>
    );
}

export default Profile;
