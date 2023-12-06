// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
export const headerData = {
  links: [
    {
      text: 'Program Kelas',
      href: '#',
    },
    {
      text: 'Alur Pendaftaran',
      href: '#',
    },
    {
      text: 'Ekstrakurikuler',
      href: '#',
    },
  ],
  actions: [{ text: 'Daftar', href: 'https://smpmduta-ppdb.madinapay.id/auth', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Alur Pendaftaran', href: '#' },
        { text: 'Gelombang', href: '#' },
        // { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Alamat',
      links: [
        { text: 'Jl. Belakang Pasar Lama No.135, Sepanjang. Kel. Wonocolo, Kec. Taman, Bebekan, Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61257', href: 'https://maps.app.goo.gl/r5MA9eiqL4HuKbT86' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/spemduta/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@spemduta135' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@spemduta?is_from_webapp=1&sender_device=pc' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://api.whatsapp.com/send?phone=6281232331554&text=Assalamualaikum,%20Saya%20ingin%20bertanya%20tentang%20PPDB%20SPEMDUTA.' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
