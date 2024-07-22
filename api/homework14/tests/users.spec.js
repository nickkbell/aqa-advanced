import {UserController} from '../controllers/UserController';

const usersController = new UserController();

test('Get current user profile', async () => {
    await usersController.login();
    const sid = usersController.getSessionID();
    console.log('SID', sid);

    const res = await usersController.getUserProfile();

    expect(res.status).toBe(200);
    expect(res.data.data.name).toBe('nick');
});
