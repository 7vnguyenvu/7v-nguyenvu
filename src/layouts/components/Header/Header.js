import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import routes from '../../../config/routes';
import styles from './Header.module.scss';
import Button from '../../../components/Button';
import Search from '../Search';

const cx = classNames.bind(styles);
function Header() {
    const user_Login = true;

    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src="7V_NguyenVu.png" alt="Logo" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {user_Login ? (
                        <>
                            <div className={cx('notify-btn')}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            <div className={cx('use-avatar')}>
                                <img src="avatar.png" alt="avatar" />
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Sign up</Button>
                            <Button primary>Sign in</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
