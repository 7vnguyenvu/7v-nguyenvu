import classNames from 'classnames/bind';

import styles from './Comments.module.scss';
const cx = classNames.bind(styles);

function Comments() {
    return (
        <div className={cx('wraper')}>
            <h2>Bình luận - chia sẻ - hỏi đáp với nhau</h2>
        </div>
    );
}

export default Comments;
