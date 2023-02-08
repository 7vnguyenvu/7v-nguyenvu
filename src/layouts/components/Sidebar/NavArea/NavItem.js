import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './NavArea.module.scss';
const cx = classNames.bind(styles);

function NavItem({ title, to, icon }) {
    const className = (navObj) => {
        // Mỗi khi bấm vào điều hướng luôn phải cho giao diện chạy lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Trả về className mong muốn
        return cx('nav-item', { active: navObj.isActive });
    };

    return (
        // Prop "end" ở cuối để fix lỗi luôn active đường dẫn cha (vd: /home là cha của /home/user)
        <NavLink className={className} to={to} end>
            <FontAwesomeIcon icon={icon} className={cx('icon')} />
            <h6>{title}</h6>
        </NavLink>
    );
}

export default NavItem;
