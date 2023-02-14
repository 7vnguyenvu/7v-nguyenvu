import classNames from 'classnames/bind';

import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wraper')}>
            <div className={cx('image')}>
                <img src="hello.png" />
            </div>
        </div>
    );
}

export default Home;
