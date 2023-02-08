import classNames from 'classnames/bind';

import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wraper')}>
            <h2>Trang chủ</h2>
        </div>
    );
}

export default Home;
