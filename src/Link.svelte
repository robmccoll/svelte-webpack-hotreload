<script context="module">
  import { curpath } from './curpath.js'

  export function go(path) {
    history.pushState({}, '', path)
    curpath.set(path)
  }
</script>

<script>
  export let href = ''
</script>

<a on:click|preventDefault={() => go(href)} href="#0" role="button">
  <slot />
</a>
