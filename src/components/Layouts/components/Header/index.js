import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src="#" alt="Logo" />
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search..."></input>
                    <div className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <div className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={cx('action')}>
                    <a href="#">Đăng ký hay đăng nhập chỗ này nè Ông cố ơi!</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
