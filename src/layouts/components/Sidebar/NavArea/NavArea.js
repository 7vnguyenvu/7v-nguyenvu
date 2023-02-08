import classNames from 'classnames/bind';

import styles from './NavArea.module.scss';
const cx = classNames.bind(styles);

function NavArea({ children }) {
    return <nav className={cx('nav-area')}>{children}</nav>;
}

export default NavArea;
