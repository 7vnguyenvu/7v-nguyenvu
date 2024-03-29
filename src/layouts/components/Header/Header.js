import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import routes from '../../../config/routes';
import styles from './Header.module.scss';
import Button from '../../../components/Button';
import Search from '../Search';
import Notification from './Notification';
import RoleUser from './RoleUser';

const cx = classNames.bind(styles);
function Header() {
    const [user_Login, setUser_Login] = useState(true);
    const [user, setUser] = useState({});

    const [showNotification, setShowNotification] = useState(false);
    const [showRoleUser, setShowRoleUser] = useState(false);

    const [account, setAccount] = useState('admin7v52');
    const [password, setPassword] = useState('admin777');

    useEffect(() => {
        // fetch(`/api/users?account=${account}&password=${password}`)
        fetch(`/api/users?account=${account}&password=${password}`)
            .then((res_acc) => res_acc.json())
            .then((data) => {
                if (data != null) {
                    fetch(`/api/searches?user=${data.account}`)
                        .then((res_user) => res_user.json())
                        .then((user) => {
                            setUser(user);
                        })
                        .catch((err) => console.log(err));
                } else {
                    console.log('data isNull!');
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const handle_Show_Hide_Notification = () => {
        setShowNotification(!showNotification);
    };

    const handle_Show_Hide_RoleUser = () => {
        setShowRoleUser(!showRoleUser);
    };

    const on_Children_Clicked_Notification = (boolean) => {
        boolean && handle_Show_Hide_Notification();
    };

    const on_Children_Clicked_RoleUser = (boolean) => {
        boolean && handle_Show_Hide_RoleUser();
    };

    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-area')}>
                    <Link to={routes.home} className={cx('logo')}>
                        <img src="7V_NguyenVu_Light.png" alt="Logo" />
                    </Link>
                </div>

                <Search />

                <div className={cx('action')}>
                    {user_Login ? (
                        <>
                            <div>
                                <HeadlessTippy
                                    interactive
                                    placement="bottom-end"
                                    visible={showNotification}
                                    render={(attrs) => (
                                        <div className={cx('notification-list')} tabIndex="-1" {...attrs}>
                                            <Notification onChildrentClicked={on_Children_Clicked_Notification} />
                                        </div>
                                    )}
                                    onClickOutside={handle_Show_Hide_Notification}
                                >
                                    <div className={cx('notification-btn')} onClick={handle_Show_Hide_Notification}>
                                        <FontAwesomeIcon icon={faBell} />
                                    </div>
                                </HeadlessTippy>
                            </div>

                            <HeadlessTippy
                                interactive
                                placement="bottom-end"
                                visible={showRoleUser}
                                render={(attrs) => (
                                    <div className={cx('role-user')} tabIndex="-1" {...attrs}>
                                        <RoleUser user={user} onChildrentClicked={on_Children_Clicked_RoleUser} />
                                    </div>
                                )}
                                onClickOutside={handle_Show_Hide_RoleUser}
                            >
                                <div className={cx('use-avatar')} onClick={handle_Show_Hide_RoleUser}>
                                    <img src={user.image} alt="avatar" />
                                </div>
                            </HeadlessTippy>
                        </>
                    ) : (
                        <>
                            <Button text>Đăng ký</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
