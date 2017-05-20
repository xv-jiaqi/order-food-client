export default class User {
  name: string;
  checkList: any[];
  checkToggle: ToggleFunc;
}

interface ToggleFunc {
  (state: boolean, index: number);
}
