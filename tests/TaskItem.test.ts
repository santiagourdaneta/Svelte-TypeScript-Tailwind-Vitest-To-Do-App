 
import { render, fireEvent } from '@testing-library/svelte';
import TaskItem from '../src/components/TaskItem.svelte';

test('marca una tarea como completada', async () => {
  const toggleTask = vi.fn();
  const { getByRole } = render(TaskItem, {
    props: {
      task: { text: 'Prueba', completed: false },
      index: 0,
      toggleTask,
      deleteTask: () => {}
    }
  });
  await fireEvent.change(getByRole('checkbox'));
  expect(toggleTask).toHaveBeenCalledWith(0);
});
