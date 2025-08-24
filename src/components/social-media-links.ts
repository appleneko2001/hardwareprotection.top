export class SocialMediaLink {
  svgUrl: string = ''
  name: string = ''
  description: string | undefined
  url: string = ''
}

export const SocialMediaLinks = {
  discord: {
    name: 'Discord',
    description: '',
    url: 'https://discord.gg/9qjEPEGfwz',
    svgUrl:
      'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/discord.svg',
  },
  qq: {
    name: 'QQ Group',
    description: '',
    url: 'https://qm.qq.com/q/S3JeBGW5WQ',
    svgUrl:
      'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/qq.svg',
  },
  github: {
    name: 'GitHub',
    description: '',
    url: 'https://github.com/HardwareProtectAssociation',
    svgUrl:
      'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/github.svg',
  },
}
