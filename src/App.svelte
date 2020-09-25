<script>
  import Route from './Route.svelte'
  import Link from './Link.svelte'
  import R from './R115.svelte'
  import X from './X115.svelte'
</script>

<h1>What up {window.location}!</h1>

<Link href="/test/route">
Go there! NOW!
</Link>

<Link href="/">
Go home! NOW!
</Link>

<Route path="/">
  <p>We are at Root! Woot!</p>
</Route>

<Route path="/test/route">
  <p>We are at test route!</p>
</Route>

<R/>

<X/>
