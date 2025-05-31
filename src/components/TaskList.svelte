 
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import TaskItem from './TaskItem.svelte';
  import type { Task } from '../types';

  export let tasks: Task[];
  const dispatch = createEventDispatcher();

  let newTask = '';
  let filter: 'all' | 'completed' | 'pending' = 'all';

  function add() {
    if (!newTask.trim()) return;
    dispatch('addTask', newTask.trim());
    newTask = '';
  }

  function toggle(index: number) {
    tasks[index].completed = !tasks[index].completed;
    dispatch('updateTasks', tasks);
  }

  function remove(index: number) {
    tasks.splice(index, 1);
    dispatch('updateTasks', tasks);
  }

  $: filtered = tasks.filter(t =>
    filter === 'all' ? true : filter === 'completed' ? t.completed : !t.completed
  );
</script>

<div class="mb-4">
  <input type="text" class="border p-2 w-full" bind:value={newTask} on:keydown={(e) => e.key === 'Enter' && add()} placeholder="Nueva tarea..." />
  <button on:click={add} class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Agregar</button>
</div>

<div class="flex space-x-2 mb-4">
  <button class="px-2 py-1" on:click={() => filter = 'all'}>Todas</button>
  <button class="px-2 py-1" on:click={() => filter = 'completed'}>Completadas</button>
  <button class="px-2 py-1" on:click={() => filter = 'pending'}>Pendientes</button>
</div>

<ul>
  {#each filtered as task, i (task.text)}
    <TaskItem {task} {i} on:toggle={e => toggle(e.detail)} on:delete={e => remove(e.detail)} />
  {/each}
</ul>
