import classNames from 'classnames/bind';

import styles from './FreindItem.module.scss';
const cx = classNames.bind(styles);

function freindItem({ data }) {
    return (
        <div className={cx('use')}>
            <div className={cx('use-avatar')}>
                {/* <img src="avatar.png" alt="avatar" />
                "https://www.facebook.com/pi.ngo.169"
                Yen Ngoc
                12/01/02*/}
                <a className={cx('use-facebook')} href={data.facebook_url} target="_blank">
                    <img src={data.avatar} alt="avatar__link_fb" />
                </a>
            </div>
            <div className={cx('use-body')}>
                <h4>{data.full_name}</h4>
                <h6>{data.nickname}</h6>
            </div>
        </div>
    );
}

export default freindItem;
