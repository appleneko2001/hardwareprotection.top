<script lang="ts">
  let { icon, head, text } = $props()
</script>

<div class="card">
  <div class="icon">
    {icon}
    <!--{@render icon?.()}-->
  </div>
  <div class="title">
    {head}
    <!--{@render head?.()}-->
  </div>
  <div class="text">
    {text}
    <!--{@render text?.()}-->
  </div>
</div>

<style>
  .card {
    padding: 24px;
    border-radius: 8px;
    background-color: var(--card-background-color);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .icon {
    padding: 8px;
    border-radius: 8px;
    background-color: white;
    align-self: start;
    font-size: 24px;
  }

  .title {
    font-size: 20px;
  }

  .text {
    font-size: 14px;
  }

  @media screen and (min-width: 1000px) {
    .card {
      max-width: calc(80% / 3);
    }
  }
</style>
