<script lang="ts">
  import SocialMediaIcon from './components/social-media-icon.svelte'
  import { SocialMediaLinks } from './components/social-media-links'
  import HomePage from './pages/home.svelte'
</script>

<svelte:head>
  <title>Page</title>
</svelte:head>

<div class="app-header">
  <div class="content-layout">
    <div class="logo">LOGO</div>
    <nav>
      <SocialMediaIcon model={SocialMediaLinks.discord} />
      <SocialMediaIcon model={SocialMediaLinks.qq} />
      <SocialMediaIcon model={SocialMediaLinks.github} />
    </nav>
  </div>
</div>

<div class="app-layout">
  <div class="content-layout">
    <HomePage />
  </div>
</div>

<div class="app-footer">
  <div class="content-layout">2025</div>
</div>

<style>
  .app-header {
    position: sticky;
    top: 0;
    border-bottom: black solid 1px;
    height: 64px;
    align-content: center;
    background-color: white;

    .content-layout {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }

    nav {
      display: flex;
      flex-flow: row nowrap;
      gap: 8px;
      margin-right: 8px;
    }
  }
  .app-footer {
    border-top: black solid 1px;
    position: relative;
    bottom: 0;
  }
  .app-layout {
    min-height: 80vh;
  }

  .content-layout {
    margin-left: 24px;
    margin-right: 24px;
  }

  @media screen and (width > 1000px) {
    .content-layout {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
