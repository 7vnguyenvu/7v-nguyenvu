import classNames from 'classnames/bind';

import styles from './Friends.module.scss';
const cx = classNames.bind(styles);

function Friends() {
    return (
        <div className={cx('wraper')}>
            <h2>Bạn bè</h2>
        </div>
    );
}

export default Friends;
