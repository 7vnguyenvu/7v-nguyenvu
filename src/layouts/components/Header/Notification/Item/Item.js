import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import styles from './Item.module.scss';
const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <Link to="/#" className={cx('item', data.status && 'new')}>
            <FontAwesomeIcon icon={data.status ? faEnvelope : faEnvelopeOpen} className={cx('item-icon')} />
            <div className={cx('item-body')}>
                <h4>{data.tilte}</h4>
                <h6>{data.time_created}</h6>
            </div>
            {data.status && <div className={cx('item-status')}></div>}
        </Link>
    );
}

export default Item;
