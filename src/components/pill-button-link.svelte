<script lang="ts">
  let { text, href } = $props()
</script>

<a class="pill-button" {href}><span>{text}</span></a>

<style>
  .pill-button {
    padding: 12px 32px;
    border-radius: 48px;
    background-color: lightgray;
    font-size: 1.5em;

    color: black;
    text-decoration: none;
  }
</style>
