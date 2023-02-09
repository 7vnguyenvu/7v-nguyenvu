import classNames from 'classnames/bind';
import { useEffect } from 'react';

import * as friendsService from '../../services/friendsService';
import styles from './Friends.module.scss';
const cx = classNames.bind(styles);

function Friends() {
    useEffect(() => {
        // const fetchApi = async () => {
        //     const result = await friendsService.friends();
        //     console.log(result);
        // };
        // fetchApi();
    }, []);

    return (
        <div className={cx('wraper')}>
            <h2>Bạn bè</h2>
        </div>
    );
}

export default Friends;
