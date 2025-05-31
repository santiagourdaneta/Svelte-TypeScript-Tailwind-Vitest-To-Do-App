 
<script lang="ts">
  import { onMount } from 'svelte';
  import TaskList from './components/TaskList.svelte';
  import type { Task } from './types';

  let tasks: Task[] = [];

  onMount(() => {
    const saved = localStorage.getItem('tasks');
    tasks = saved ? JSON.parse(saved) : [];
  });

  function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function addTask(text: string) {
    tasks = [...tasks, { text, completed: false }];
    save();
  }

  function updateTasks(updated: Task[]) {
    tasks = updated;
    save();
  }
</script>

<main class="max-w-xl mx-auto p-4">
  <h1 class="text-3xl font-bold text-center mb-4">ToDo App</h1>
  <TaskList {tasks} on:addTask={e => addTask(e.detail)} on:updateTasks={e => updateTasks(e.detail)} />
</main>

<style>
  main {
    font-family: sans-serif;
  }
</style>