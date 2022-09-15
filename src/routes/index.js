import HomePage from '../pages/Home';
import ExplorePage from '../pages/Explore';
import FriendsPage from '../pages/Friends';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';

//Layout
import { HeaderOnly } from '../components/Layouts';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/explore', component: ExplorePage },
    { path: '/friends', component: FriendsPage },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
