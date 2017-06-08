export default class User {
  name: string;
  checkList: any[];
  checkToggle?: ToggleFunc;
}

interface ToggleFunc {
  (status: boolean, index: number);
}
