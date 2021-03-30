interface UserData {
  uid: string;
  name: string;
  lastname?: string;
  age?: number;
  phonenumber?: number;
  email: string;
}

interface UserInstance {
  userData: UserData;
  updateData: void;
}

export default UserInstance;
