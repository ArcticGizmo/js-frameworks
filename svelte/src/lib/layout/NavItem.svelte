<script>
  import Icon from '../components/Icon.svelte';

  export let route = {};
</script>

<div class="nav-item">
  <Icon icon={route.icon} />
  <span class="nav-bar-tooltip"> {route.name} </span>
</div>

<style>
  .nav-item {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .nav-item :global(.icon) {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
    padding: 0.5rem;
    color: #ff3e00;
    background-color: #2f3136;
    border-radius: 2rem;
    transition: all 0.3s;
  }

  .nav-item :global(.icon svg.svelte-fa) {
    width: 100% !important;
    height: 100% !important;
  }

  :global(.active) .nav-item :global(.icon),
  .nav-item:hover :global(.icon) {
    color: white;
    border-radius: 0.75rem;
    background-color: #ff3e00;
  }

  .nav-item .nav-bar-tooltip {
    font-size: 0.9rem;
    font-weight: bold;
    position: absolute;
    left: 4.5rem;
    top: 1.25rem;
    padding: 0.5rem;
    color: white;
    background-color: #202225;
    border-radius: 0.75rem;
    transform: scale(0);
    transform-origin: left;
    transition: transform 0.15s;
    white-space: nowrap;
  }

  .nav-item:hover .nav-bar-tooltip {
    transform: scale(1);
  }
</style>
