<script>
  import { curpath } from './curpath.js'

  export let prefix = undefined
  export let path = undefined

  let show = false
  $: {
    show = true
    if(prefix) {
      show = show && $curpath.startsWith(prefix)
    }
    if(path) {
      show = show && ($curpath === path)
    }
  }
</script>

{#if show}
  <slot />
{/if}
