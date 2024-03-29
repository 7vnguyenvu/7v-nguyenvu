import classNames from 'classnames/bind';
import { useEffect } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [children]);

    return (
        <div className={cx('wraper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
