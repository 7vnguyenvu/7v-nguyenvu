import classNames from 'classnames/bind';
import { faHouse, faComments, faAddressBook, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';
import routes from '../../../config/routes';
import NavArea, { NavItem } from './NavArea';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wraper')}>
            <NavArea>
                <NavItem title="Trang chủ" to={routes.home} icon={faHouse} />
                <NavItem title="Cá Nhân" to={routes.personal} icon={faAddressBook} />
                <NavItem title="Blog" to={routes.blog} icon={faNewspaper} />
            </NavArea>
            <div className={cx('bulkhead')}></div>
            <NavArea>
                <NavItem title="Bình luận" to={routes.comments} icon={faComments} />
            </NavArea>
        </aside>
    );
}

export default Sidebar;
