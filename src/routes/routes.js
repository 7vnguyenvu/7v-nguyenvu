import HomePage from '../pages/Home';
import CommentsPage from '../pages/Comments';
import BlogPage from '../pages/Blog';
import FriendsPage from '../pages/Friends';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';

import routes from '../config/routes';

//Layout
import { HeaderOnly } from '../layouts';

const publicRoutes = [
    { path: routes.home, component: HomePage },
    { path: routes.comments, component: CommentsPage },
    { path: routes.blog, component: BlogPage },
    { path: routes.friends, component: FriendsPage },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload },
    // { path: routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
