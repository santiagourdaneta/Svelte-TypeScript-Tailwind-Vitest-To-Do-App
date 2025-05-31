 
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { Task } from '../types';

  export let task: Task;
  export let i: number;
  const dispatch = createEventDispatcher();
</script>

<li in:fade out:fade class="flex items-center justify-between p-2 border-b">
  <label class="flex items-center gap-2">
    <input type="checkbox" checked={task.completed} on:change={() => dispatch('toggle', i)} />
    <span class={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
  </label>
  <button on:click={() => dispatch('delete', i)} class="text-red-500">❌</button>
</li>
