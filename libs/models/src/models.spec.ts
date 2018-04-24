import { TodoModel } from './models';

describe('Models', () => {
  it('should work', () => {
    const model: TodoModel = {
      title: 'title',
      done: false,
      id: '1',
    }
    expect(model).toEqual({
      title: 'title',
      done: false,
      id: '1',
    });
  });
});
