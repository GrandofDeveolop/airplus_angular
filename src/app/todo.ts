export class Todo {

  id: number;
  title = '';
  complete = false;
  startdate = '';
  enddate = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
