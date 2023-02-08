import classNames from 'classnames/bind';

import styles from './Blog.module.scss';
const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wraper')}>
            <h2>Bài viết</h2>
        </div>
    );
}

export default Blog;
