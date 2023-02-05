import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './FriendItem.module.scss';
const cx = classNames.bind(styles);

function FreindItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('use')}>
            <div className={cx('use-avatar')}>
                <img src={data.avatar} alt="avatar" />
            </div>
            <div className={cx('use-body')}>
                <h4>{data.full_name}</h4>
                <h6>{data.nickname}</h6>
            </div>
        </Link>
    );
}

export default FreindItem;
