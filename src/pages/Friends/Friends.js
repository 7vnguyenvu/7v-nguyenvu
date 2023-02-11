import classNames from 'classnames/bind';
import { useEffect } from 'react';

import styles from './Friends.module.scss';
const cx = classNames.bind(styles);

function Friends() {
    useEffect(() => {
        console.log('fetch Api here...');
    }, []);

    return (
        <div className={cx('wraper')}>
            <h2>Bạn bè</h2>
        </div>
    );
}

export default Friends;
