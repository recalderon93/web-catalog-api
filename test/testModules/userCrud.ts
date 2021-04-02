import UserModel from '../../src/models/User/user.model';

export default () => {
  describe('User Crud', () => {
    it('Testing Enviroment', () => {
      console.log(process.env.PORT);
      expect(process.env.NODE_ENV).toBe('testing');
    });
    it('Creates an User and Verify the object ', async () => {
      const userTest = await UserModel.create({
        firstName: 'Rafael',
        lastName: 'Calderon',
        age: 20,
      });
      expect(userTest.firstName).toBe('Rafael');
    });
    it('Query all the rows of the Users table', async () => {
      const userTest = await UserModel.findAll();
      console.log(typeof userTest);
      expect(userTest).toBeTruthy();
    });
  });
};
