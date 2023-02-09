import * as request from '../utils/friends';

export const friends = async () => {
    try {
        const res = await request.get('friends', {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
