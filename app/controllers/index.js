import Controller from '@ember/controller';
// import {writeFile} from 'broccoli-file-creator'
export default class IndexController extends Controller {
  actions = {
    async addTask(newTask) {
      console.log(newTask);
      //  console.log(textfield);

      const data = { title: newTask };
      console.log(data);
      this.model.pushObject(data);
      console.log(this.model);
      console.log(JSON.stringify(data));
      // write into json file
      // this.model.push(writeFile('/data/task.json', JSON.stringify(data)));

      // clear input field with id newTask
      document.getElementById('newTask').value = '';
      newTask = '';
    },

    async completeTask(task) {
      console.log(task);
      this.model.removeObject(task);
    },
  };
}
