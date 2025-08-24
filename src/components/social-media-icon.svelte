<script lang="ts">
  import { SocialMediaLink } from './social-media-links'

  let { model }: { model: SocialMediaLink } = $props()
</script>

<a class="icon-small" href={model.url} title={model.name}>
  <span style="--icon: url({model.svgUrl})"></span>
</a>

<style>
  .icon-small {
    padding: 8px;
    display: block;
    border-radius: 8px;

    transition:
      background-color 0.25s ease-in-out,
      border-color 0.25s ease-in-out,
      box-shadow 0.25s ease-in-out;
  }

  .icon-small > span {
    width: 24px;
    height: 24px;
    mask-image: var(--icon);
    background-color: #1a1a1a;
    display: block;

    transition:
      background-color 0.25s ease-in-out,
      border-color 0.25s ease-in-out,
      box-shadow 0.25s ease-in-out;
  }

  .icon-small:hover {
    background-color: var(--button-hover-color);
  }

  .icon-small:hover > span {
    background-color: var(--icon-hover-color);
  }
</style>
