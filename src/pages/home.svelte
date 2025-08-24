<script lang="ts">
  import HomeCard from '../components/home/card.svelte'
  import PillButtonLink from '../components/pill-button-link.svelte'
</script>

<div class="content">
  <div class="block">
    <div class="headline">硬件保护协会</div>
    <div class="subheader">Hardware Protect Association</div>
  </div>

  <div class="cards">
    <HomeCard
      icon="🖥"
      head="硬件"
      text="指计算机及相关设备的物理组件，如主板、CPU、内存、硬盘等实体部件，是数字世界运行的基石"
    />
    <HomeCard
      icon="🛡️"
      head="保护"
      text="代表本组织对硬件合理使用与维护的捍卫，包括但不限于杜绝暴■■卸、恶意超■、无■■热等“硬件虐待”行为"
    />
    <HomeCard
      icon="🫶"
      head="协会"
      text="由工程师、极客及硬件爱好者组成的非官方正义联盟，通过■■■■■■■执行“制裁”"
    />
  </div>

  <div>
    <PillButtonLink text="Become a member" href="#" />
  </div>
</div>

<style>
  .cards {
    display: flex;
    flex-flow: column;
    gap: 8px;

    align-items: stretch;
    justify-content: space-between;
  }

  .headline {
    font-size: 3.2em;
    font-weight: bold;
    margin: 8px 0;
  }
  .subheader {
    font-size: 1.4em;
    font-weight: bold;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4em;
    margin-top: 8em;
  }

  @media screen and (width > 1000px) {
    .cards {
      flex-flow: row wrap;
    }
  }
</style>
