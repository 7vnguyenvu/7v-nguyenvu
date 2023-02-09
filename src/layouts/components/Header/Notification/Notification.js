import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import Item from './Item';
import styles from '../Header.module.scss';
const cx = classNames.bind(styles);

function Notification({ onChildrentClicked }) {
    const [notification_List, setNotification_List] = useState([]);

    const item_On_Clicked = (boolean) => {
        boolean && onChildrentClicked(true);
    };

    useEffect(() => {
        // Fake API -> Dùng Tạm FriendItem để code giao diện
        setNotification_List([
            {
                id: '1',
                tilte: 'Thông báo 1',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '2',
                tilte: 'Thông báo 2',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '3',
                tilte: 'Thông báo 3',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '4',
                tilte: 'Thông báo 4',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '5',
                tilte: 'Thông báo 5',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '6',
                tilte: 'Thông báo 6',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '7',
                tilte: 'Thông báo 7',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '10',
                tilte: 'Thông báo 8',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '20',
                tilte: 'Thông báo 9',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '30',
                tilte: 'Thông báo 10',
                time_created: '7/2/2023',

                status: false,
            },
            {
                id: '40',
                tilte: 'Thông báo 11',
                time_created: '8/2/2023',

                status: true,
            },
            {
                id: '50',
                tilte: 'Thông báo 12',
                time_created: '8/2/2023',

                status: false,
            },
            {
                id: '60',
                tilte: 'Thông báo 13',
                time_created: '8/2/2023',

                status: true,
            },
            {
                id: '70',
                tilte: 'Thông báo 14',
                time_created: '8/2/2023',

                status: true,
            },
        ]);
    }, []);

    return (
        <div>
            <header>
                <h3>Thông Báo</h3>
                <p>Đánh dấu đã đọc</p>
            </header>

            <main>
                {notification_List
                    .map((result) => <Item key={result.id} data={result} itemOnClick={item_On_Clicked} />)
                    .reverse()}
            </main>
        </div>
    );
}

export default Notification;
